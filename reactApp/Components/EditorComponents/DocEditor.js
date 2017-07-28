import React from 'react';
// const io = require('socket.io')(http);
const io = require('socket.io-client');


import AppBar from 'material-ui/AppBar';
import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
  convertToRaw,
  convertFromRaw

} from 'draft-js';

import {
  Map
} from 'immutable';


import {
  ToolBar
} from './ToolBar';


const blockTypes = DefaultDraftBlockRenderMap.merge(new Map({
  center: {
    wrapper: <div className="center-align" />,
  },
  left: {
    wrapper: <div className="left-align" />,
  },
  right: {
    wrapper: <div className="right-align" />,
  },
}));
const styleMap = {

}

class DocEditor extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.formatColor = this.formatColor.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.increaseSize = this.increaseSize.bind(this);
    this.decreaseSize = this.decreaseSize.bind(this);
    this.onChange = this.onChange.bind(this);
    /////////////////
    this.socket = io('http://localhost:3000');

    this.socket.on('userJoin', () => {
      console.log('joined');
    });

    this.socket.on('back', ({
      doc
    }) => {
      console.log('you just joined', doc);
    });

    this.socket.on('userLeft', () => {
      console.log('user left');
    });

    this.socket.on('reveiveNewContent', stringifiedContent => {
      const contentState = convertFromRaw(JSON.parse(stringifiedContent));
      const newEditorState = EditorState.createWithContent(contentState);
      this.setState({
        editorState: newEditorState
      })
    });

    this.socket.on('receiveNewCursor', incomingSelectionObj => {
      // console.log('inc', incomingSelectionObj);
      let editorState = this.state.editorState;
      const ogEditorState = editorState;
      const ogSelection = editorState.getSelection();
      const incommingSelectionState = ogSelection.merge(incomingSelectionObj);
      const temporaryEditorState = EditorState.forceSelection(ogEditorState, incommingSelectionState);
      this.setState({
        editorState: temporaryEditorState
      }, () => {
        const winSel = window.getSelection();
        const range = winSel.getRangeAt(0);
        const rects = range.getClientRects()[0];
        console.log('range', range);
        console.log('rects', rects);
        const {
          top,
          left,
          bottom
        } = rects;
        this.setState({
          editorState: ogEditorState,
          top,
          left,
          height: (bottom - top)
        })
      })

    }); /// dealling with the cursor position

    this.socket.emit('join', {
      doc: this.props.match.params.dochash
    }); /// event to emit the target doc

    ///////////////////
    this.state = {
      editorState: EditorState.createEmpty(),
      customStyleMap: {},
      currentFontSize: 7,
      title: 'Loading ...'
    };
    this.previousHighlight = null;
  }
  onChange(editorState) {
    ////////////////// be low is for selection highlight
    const selection = editorState.getSelection();
    const turnBlue = {
      'BLUE': {
        backgroundcolor: 'blue'
      }
    }
    this.setState({
      customStyleMap: turnBlue
    }) /// adding for turning blue for different users
    //
    if (this.previousHighlight) {
      editorState = EditorState.acceptSelection(editorState, this.previousHighlight);
      editorState = RichUtils.toggleInlineStyle(editorState, 'BLUE');
      editorState = EditorState.acceptSelection(editorState, selection);
    }
    editorState = RichUtils.toggleInlineStyle(editorState, 'BLUE');
    this.previousHighlight = editorState.getSelection();
    if (selection.getStartOffset() === selection.getEndOffset()) {
      console.log('cursor', selection);
      this.socket.emit('cursorMove', selection);
    }
    // ///////////////////////////
    //
    const contentState = editorState.getCurrentContent(); // current content (the changing part)
    const stringifiedContent = JSON.stringify(convertToRaw(contentState));
    this.socket.emit('newContent', stringifiedContent); // sending out the change

    this.setState({
      editorState,
    });

  } /// made some change on this function

  saveDoc() {
    const contentState = this.state.editorState.getCurrentContent(); // current content (the changing part)
    const stringifiedContent = JSON.stringify(convertToRaw(contentState));
    const docId = this.props.match.params.dochash;

    fetch(`http://localhost:3000/savedocument/${docId}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: stringifiedContent
        })
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.success) {
          // successful save
        } else {
          throw resp.error;
        }
      })
      .catch(err => {
        throw err
      });
    /// fetch to server to save it.
    // credential : 'include'
    // header: {'Content-type': 'application/json'}
    // body : JSON.stringify({content: stringifiedContent })
  }

  componentDidMount() {
    const docId = this.props.match.params.dochash;
    // fetch to the server to get the target document
    // this.props.match.params.dochash
    fetch(`http://localhost:3000/getdocument/${docId}`, {
        credentials: 'include'
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.success) {
          const raw = resp.document.content;

          if (raw) {
            const contentState = convertFromRaw(JSON.parse(raw));
            this.setState({
              editorState: EditorState.createWithContent(contentState),
              title: resp.document.title
            });
          } else {
            this.setState({
              title: resp.document.title
            });
          }

        } else {
          this.setState({
            error: resp.error.errmsg
          });
        }
      })
      .catch(err => {
        throw err
      });
  }
  componentWillUnmount() {
    // this.socket.emit('disconnect');
    this.socket.disconnect();
  }

  onClick(...args) {
    // console.log(this.state.editorState.getCurrentInlineStyle().has(args[0]));
    if (!args[1]) {
      this.setState({
        editorState: RichUtils.toggleInlineStyle(this.state.editorState, args[0]),
      });
    } else {
      this.setState({
        editorState: RichUtils.toggleBlockType(this.state.editorState, args[0]),
      });
    }
  }

  handleKeyCommand(command) { // // key command
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  formatColor(color) {
    const map = {
      [color.hex]: {
        color: color.hex,
      },
    };
    const key = Object.keys(map)[0];
    this.setState({
      customStyleMap: map,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, key),
    });
  }

  increaseSize() {
    const newSize = this.state.currentFontSize + 1;
    const size = {
      [newSize]: {
        fontSize: `${newSize}px`
      }
    };
    this.setState({
      customStyleMap: size,
      currentFontSize: newSize,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, String(newSize)),
    });
  }
  decreaseSize() {
    const newSize = this.state.currentFontSize - 1;
    const size = {
      [newSize]: {
        fontSize: `${newSize}px`
      }
    };
    this.setState({
      customStyleMap: size,
      currentFontSize: newSize,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, String(newSize)),
    });
  }

  render() {
    return (
      <div>
        <h1>Editing your document </h1>
        <p>Id: {this.props.match.params.dochash}</p>
          {this.state.top && (
            <div
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                width: '2px',
                height: this.state.height,
                top: this.state.top,
                left: this.state.left
              }}
              >
            </div>
          )}
          <div>
            <button onClick={() => this.props.history.push('/docdirect')}>{'<'} Back to Documents Directory</button>
          </div>

          <div>
            <AppBar title={this.state.title}/>
          </div>
          <div className="toolbar">
            <ToolBar
              Click={this.onClick}
              colorHandle={this.formatColor}
              sizeIncrease={this.increaseSize}
              sizeDecrease={this.decreaseSize}
              // currentInlineStyle={this.state.editorState.getCurrentInlineStyle()}
            />
          </div>
          <div className="editor">
            <Editor
              // ref="editor"
              blockRenderMap={blockTypes}
              customStyleMap={this.state.customStyleMap}
              editorState={this.state.editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}/>
          </div>
          <div>
          <button onClick={() => this.saveDoc()}>Save the Document</button>
          </div>
          </div>
    );
  }
}

module.exports = {
  DocEditor,
};
