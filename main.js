const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const DEV_MODE = process.argv.includes('--dev');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
<<<<<<< HEAD
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
=======
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
>>>>>>> e0eaeda66f0a53fd48fa5f1e7fee7d6a22f2da64

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'build', DEV_MODE ?
      'index.dev.html' :
      'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Open the DevTools.
  if (DEV_MODE) {
<<<<<<< HEAD
    mainWindow.webContents.openDevTools()
=======
    mainWindow.webContents.openDevTools();
>>>>>>> e0eaeda66f0a53fd48fa5f1e7fee7d6a22f2da64
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
<<<<<<< HEAD
  })
=======
  });
>>>>>>> e0eaeda66f0a53fd48fa5f1e7fee7d6a22f2da64
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
