const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path') 
function createWindow () { 
  const win = new BrowserWindow({ 
    width: 800
    ,height: 600
    ,frame : false
    ,webPreferences: { 
      preload: path.join(__dirname, 'preload.js') 
    } 
  })
  win.loadFile('src/index.html')
}
/**
 * @values 메뉴선언부
*/
{
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
}
app.whenReady().then(() => { 
  createWindow() 
})
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})