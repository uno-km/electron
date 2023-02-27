const { ipcRenderer} = require('electron');
const ipcRender = ipcRenderer;
var bforeWinW;
const toggleFullScreen = ()=> {
    bforeWinW = window.innerWidth;
    ipcRender.send('toggleFullScreen');
}
document.querySelector('.control').addEventListener('click', (ev) => {
    if (ev.target.classList.contains('min')) {
    ipcRender.send('minimizeApp');
    } else if (ev.target.classList.contains('max')) {
        toggleFullScreen();
    } else if (ev.target.classList.contains('close')) {
    ipcRender.send('closeApp');
    }
});
document.querySelector('.title-bar').addEventListener('dblclick',toggleFullScreen);
window.addEventListener('resize', ()=> {
    if(bforeWinW > window.innerWidth)
    {
        document.querySelector('.max').innerHTML = `<i class="bi bi-arrows-fullscreen max"></i>`;
    }
    else
    {
        document.querySelector('.max').innerHTML = `<i class="bi bi-fullscreen-exit max"></i>`;
    }
});
