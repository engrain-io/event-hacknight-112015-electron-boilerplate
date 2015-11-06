var app = require('app')  // Module to control application life.
var BrowserWindow = require('browser-window')  // Module to create native browser window.
var os = require('os')
var path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'min-width': os.platform() === 'win32' ? 400 : 800,
    'min-height': os.platform() === 'win32' ? 260 : 500,
    resizable: true,
    show: false,
  })

  mainWindow.on('closed', function(event) {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
          
    mainWindow = null
  })

  // Once the window has loaded, show and focus it.
  mainWindow.webContents.on('did-finish-load', function(event) {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.loadUrl(path.normalize('file://' + path.join(__dirname, 'index.html')))
})