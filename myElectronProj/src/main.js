const { app, BrowserWindow, Menu, shell } = require('electron');
// include the Node.js 'path' module at the top of your file 
const path = require('path') 
// modify your existing createWindow() function 
function createWindow () { 
  const win = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    webPreferences: { 
      preload: path.join(__dirname, 'preload.js') 
    } 
  }) 
  win.loadURL('http://localhost:3000')
} 
app.whenReady().then(() => { 
  createWindow() 
})
/**
 * @values 메뉴선언부
*/
/*start*/
const template = 
[
  { 
    label: "File"
    ,submenu: 
    [ 
      { 
        label   : "Open"
        , click : (ev)=>{ 
          console.log('Clicked Menu Open!!!');
        }
      }
      ,{type : "separator"}
      ,{ 
        label   : "New" 
      }
      ,{ 
        label: 'Dark Mode'
        , type: 'checkbox'
        , checked: true 
      }
    ] 
  }
  ,  { 
    label: "Dev"
    ,submenu: 
    [ 
      { 
        role   : "toggleDevTools" 
      }
    ] 
  }  ,  { 
    label: "Help"
    ,submenu: 
    [ 
      { 
        label   : "Api" 
        , click : (ev)=>{ 
          shell.openExternal("https://www.electronjs.org/docs/latest/api/app");
        }
      }
    ] 
  }
]; 
const menu = Menu.buildFromTemplate(template); 
/*end*/
Menu.setApplicationMenu(menu);

app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})