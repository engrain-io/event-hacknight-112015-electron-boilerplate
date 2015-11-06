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

// let activeWindow = null
// const windows = []

// function newDocumentWindow() {
//   let window = new BrowserWindow({
//     width: 800,
//     height: 600,
//     'min-width': os.platform() === 'win32' ? 400 : 800,
//     'min-height': os.platform() === 'win32' ? 260 : 500,
//     // 'kiosk': true,
//     resizable: true,
//     show: false,
//     // frame: false,
//     // 'title-bar-style': 'hidden',
//     // kiosk: true
//   })

//   window.on('closed', function(event) {
//     // Dereference the window object, usually you would store windows
//     // in an array if your app supports multi windows, this is the time
//     // when you should delete the corresponding element.
    
//     // remove window from windows list
      
//     removeDocumentWindow(window)
//   })

//   window.webContents.on('did-finish-load', function(event) {
//     window.setTitle('Unit Map Document')
//     window.show()
//     window.focus()
//   })

//   // Don't allow windows to create new windows.
  
//   window.webContents.on('new-window', function (event) {
//     event.preventDefault()
//   })
  
//   windows.push(window)
//   window.loadUrl(path.normalize('file://' + path.join(__dirname, 'index.html')))

//   return window
// }

// ipc.on('new-document-window', function(event) {
//   newDocumentWindow()
// })

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'min-width': os.platform() === 'win32' ? 400 : 800,
    'min-height': os.platform() === 'win32' ? 260 : 500,
    // 'kiosk': true,
    resizable: true,
    show: false,
    // frame: false,
    // 'title-bar-style': 'hidden',
    // kiosk: true
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

  // Don't allow windows to create new windows.
  // mainWindow.webContents.on('new-window', function (event) {
  //   event.preventDefault()
  // })

  // app.on('activate-with-no-open-windows', function () {
  //   // If no windows remain, generate a new one
  //   if (windows.length === 0) {
  //     newDocumentWindow()
  //   } else {
  //     // Focus the last window.
      
  //     window[window.length - 1].focus()
  //   }

  //   return false
  // })
})