hexagon.createLevel = function() {

    var level = {
        sound: null,
        dummy: 0
    };




    game.click = function(evt) {
        console.log('hexagon click');
        game.sound.playSound(game.dummy);
        game.dummy++;
        if (game.dummy > 5) {
            game.dummy = 0;
        }
    };

    game.sound = hexagon.createSound();

    var elem = hexagon.svg.getElementById('svg1');
    elem.addEventListener('click', game.click, false);

    elem = hexagon.svg.getElementById('svg2');
    elem.addEventListener('click', game.click, false);

    elem = hexagon.svg.getElementById('svg3');
    elem.addEventListener('click', game.click, false);

    elem = hexagon.svg.getElementById('svg4');
    elem.addEventListener('click', game.click, false);

    elem = hexagon.svg.getElementById('svg5');
    elem.addEventListener('click', game.click, false);

    elem = hexagon.svg.getElementById('svg6');
    elem.addEventListener('click', game.click, false);

    return game;
};
