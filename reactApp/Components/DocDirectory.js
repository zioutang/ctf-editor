import {
  Card,
  CardTitle,
} from 'material-ui/Card';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { GridList, GridTile } from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import React from 'react';
import { Link } from 'react-router-dom';

class DocDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDocs: [],
      error: null,
    };
  }

  componentDidMount() {
    this.loadDocs();
  }

  loadDocs() {
    fetch('http://localhost:3000/getuserdocuments', {
      credentials: 'include',
    })
      .then(resp => resp.json())
      .then((resp) => {
        if (resp.success) {
          this.setState({
            userDocs: resp.userDocs,
            error: null,
          });
        } else {
          this.setState({
            error: resp.error.errmsg,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  newDoc(title) {
    fetch('http://localhost:3000/newdocument', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
      }),
    })
      .then(resp => resp.json())
      .then((resp) => {
        if (resp.success) {
          this.setState({
            userDocs: this.state.userDocs.concat(resp.newDoc),
            error: null,
          });
        } else {
          this.setState({
            error: resp.error.errmsg,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  addSharedDoc(docId) {
    let docToAdd;
    fetch(`http://localhost:3000/getdocument/${docId}`, {
      credentials: 'include',
    })
      .then(resp => resp.json())
      .then((resp) => {
        if (!resp.success) throw resp.error;

        docToAdd = resp.document;

        return fetch(`http://localhost:3000/addshareddoc/${docId}`, {
          credentials: 'include',
        });
      })
      .then(resp => resp.json())
      .then((resp) => {
        if (!resp.success) throw resp.error;

        this.setState({
          userDocs: this.state.userDocs.concat(docToAdd),
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.errmsg,
        });
      });
  }

  render() {
    let newDocTitleField;
    let shareIdField;

    return (
      <div>
        <AppBar style={{ margin: '0' }} title="Your Directory" />
        <p>{this.state.error}</p>
        <TextField hintText="New document title" onChange={(e) => { newDocTitleField = e.target; }} />
        <FlatButton
          label="Create Document"
          primary
          onTouchTap={() => {
            this.newDoc(newDocTitleField.value);
            newDocTitleField.value = '';
          }}
        />
        <TextField hintText="Document ID" onChange={(e) => { shareIdField = e.target; }} />
        <FlatButton
          label="Add Shared Document"
          primary
          onTouchTap={() => {
            this.addSharedDoc(shareIdField.value);
            shareIdField.value = '';
          }}
        />
        <Paper zDepth={2} style={{ display: 'flex' }}>
          {this.state.userDocs.map(doc => <div style={{ display: 'block' }} key={doc._id}><Link to={`/edit/${doc._id}`}><img height={'40px'} alt={'hello'} src='./public/images/thedoc.png' /></Link><p>{doc.title}</p></div>)}
        </Paper>
      </div>
    );
  }
}


module.exports = {
  DocDirectory,
};
