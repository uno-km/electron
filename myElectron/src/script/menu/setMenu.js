const {Menu, shell } = require('electron');
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
function setMenu(){
    Menu.setApplicationMenu(menu);
}