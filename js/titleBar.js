const remote = require("electron").remote;

const minimize = document.getElementById("minimize");
const maximizeRestoreToogle = document.getElementById("maximize");
const close = document.getElementById("close");

//To keep track of if window is maximised or not (Toggler)
let ifWindowRestoredDown = true;

minimize.addEventListener("click",() => {
    remote.BrowserWindow.getFocusedWindow().minimize();
});

maximizeRestoreToogle.addEventListener("click",() => {
    //If window is restored-down,then only we can maximize the window.
    if(ifWindowRestoredDown){
        remote.BrowserWindow.getFocusedWindow().maximize();
    }else{
        remote.getCurrentWindow().restore();
    }
    
    ifWindowRestoredDown = !ifWindowRestoredDown;
});

close.addEventListener("click",() => {
    remote.getCurrentWindow().close();
});