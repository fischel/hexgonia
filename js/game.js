hexagon.createGame = function() {

    var game = {
        angle: 0,
        elementGame: null,
        elementReplay: null,
        keys: [],
        map: {
            'svg1': 0,
            'svg2': 1,
            'svg3': 2,
            'svg4': 3,
            'svg5': 4,
            'svg6': 5
        },
        melody: null, // melody is not null => game running
        mode: 'easy',
        sound: null
    };

    game.changemode = function(evt) {
        if (evt.target.id == 'radiohard') {
            game.mode = 'hard';
        } else {
            game.mode = 'easy';
        }
        game.angle = 0;
        game.loopAngle();
    };

    game.changesound = function(a) {
        game.sound.volume = parseInt(a.target.value) / 10;
    };

    game.click = function(evt) {
        if (!game.map.hasOwnProperty(evt.target.id)) {
            return;
        }

        // play sound
        var index = game.map[evt.target.id];
        game.sound.playNote(index);

        if (game.melody == null) {
            return;
        }

        // add to keys
        game.keys.push(index);

        if (game.compare()) {
            if (game.keys.length == game.melody.data.length) {
                game.sound.playSuccess();
                game.elementGame.className = 'game backyeah';
                game.elementReplay.disabled = true;
            } else {
                game.elementGame.className = 'game back';
            }
        } else {
            game.sound.playFail();
            game.elementGame.className = 'game backfail';
            game.keys = [];
        }
    };

    game.compare = function() {
        var t;

        for (t = 0; t < game.keys.length; t++) {
            if (game.keys[t] != game.melody.data[t]) {
                return false;
            }
        }
        return true;
    };

    game.loop = function() {
        if (game.mode == 'hard') {
            game.angle += 0.5;

            if (game.angle > 360) {
                game.angle = 0;
            }

            game.loopAngle();
        }

        requestAnimationFrame(game.loop);
    };

    game.loopAngle = function() {
        var elem = document.getElementById('rot');
        elem.setAttributeNS(null, 'transform', 'rotate(' + game.angle + ')');
    };

    game.replay = function() {
        if (game.melody) {
            game.sound.playMelody(game.melody);
            game.keys = [];
            game.elementGame.className = 'game back';
        }
    };

    game.startGame = function() {
        game.keys = [];
        game.melody = game.sound.randomMelody();

        // debug melody
        //console.log(game.melody.data);

        game.sound.playMelody(game.melody);
        game.elementReplay.disabled = false;
        game.elementGame.className = 'game back';
    };

    game.sound = hexagon.createSound();

    var elem = document.getElementById('svg1');
    elem.addEventListener('click', game.click, false);

    elem = document.getElementById('svg2');
    elem.addEventListener('click', game.click, false);

    elem = document.getElementById('svg3');
    elem.addEventListener('click', game.click, false);

    elem = document.getElementById('svg4');
    elem.addEventListener('click', game.click, false);

    elem = document.getElementById('svg5');
    elem.addEventListener('click', game.click, false);

    elem = document.getElementById('svg6');
    elem.addEventListener('click', game.click, false);

    return game;
};
