const electron = require('electron');
const { app, BrowserWindow } = require('electron')


let win;
function createWindow () {
  // Create the browser window.
   win = new BrowserWindow({
    width: 900,
    height: 900,
    minHeight: 650,      // Limit resizing
    minWidth: 600,
    frame:false,        // To make Text Editor completely customisable and remove default menu 
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true // Deprecation Warning
    }
  })

  // and load the index.html of the app. 
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
