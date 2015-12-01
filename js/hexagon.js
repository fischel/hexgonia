var hexagon = {
    svg: null,
    imgYeah: null
};

window.onload = function() {
    var elem = null;
    var g = hexagon.createGame(hexagon);

    elem = document.getElementById('btnStart');
    elem.onclick = g.startGame;

    elem = document.getElementById('elemSlider');
    elem.onchange = g.changesound;
    elem.oninput = g.changesound;

    elem = document.getElementById('btnReplay');
    g.elementReplay = elem;
    elem.onclick = g.replay;

    elem = document.getElementById('radioeasy');
    elem.onclick = g.changemode;

    elem = document.getElementById('radiohard');
    elem.onclick = g.changemode;

    elem = document.getElementById('idgame');
    g.elementGame = elem;

    requestAnimationFrame(g.loop);
};
