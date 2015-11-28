hexagon.createSound = function (game) {

    var sound = {
        notes: [],
        melodies: [],
        audioFail: null,
        audioSuccess: null,
        mute: false,
        volume: 0.5
    };

    sound.addMelody = function(filename, data) {
        var melody = {
            sound: null,
            data: data
        };
        melody.sound = new Audio(filename);
        melody.sound.load();
        melody.sound.pause();
        melody.sound.volume = sound.volume;
        sound.melodies.push(melody);
    };

    sound.addNote = function(filename) {
        var au = new Audio(filename);
        au.load();
        au.pause();
        au.volume = sound.volume;
        sound.notes.push(au);
    };

    /*sound.init = function() {
        sound.audioAlarm.play();
        sound.audioAlarm.pause();
        sound.audioAlarm.currentTime = 0;

        sound.audioSuccess.play();
        sound.audioSuccess.pause();
        sound.audioSuccess.currentTime = 0;
    };*/

    sound.playFail = function() {
        if (!sound.mute) {
            sound.audioFail.volume = sound.volume;
            sound.audioFail.pause();
            sound.audioFail.currentTime = 0;
            sound.audioFail.play();
        }
    };

    sound.playMelody = function(melody) {
        if (!sound.mute) {
            melody.sound.volume = sound.volume;
            melody.sound.pause();
            melody.sound.currentTime = 0;
            melody.sound.play();
        }

    };

    sound.playNote = function(index) {
        var au = null;
        if (!sound.mute) {
            au = sound.notes[index];
            au.volume = sound.volume;
            au.pause();
            au.currentTime = 0;
            au.play();
        }
    };

    sound.playSuccess = function() {
        if (!sound.mute) {
            sound.audioSuccess.volume = sound.volume;
            sound.audioSuccess.pause();
            sound.audioSuccess.currentTime = 0;
            sound.audioSuccess.play();
        }
    };

    sound.randomMelody = function() {
        var index = Math.floor(sound.melodies.length * Math.random());
        return sound.melodies[index];
    };

    sound.addNote('sound/1C.mp3');
    sound.addNote('sound/2D.mp3');
    sound.addNote('sound/3E.mp3');
    sound.addNote('sound/4G.mp3');
    sound.addNote('sound/5A.mp3');
    sound.addNote('sound/6C.mp3');

    //sound.addMelody('sound/ACEGDC1.mp3', [4, 0, 2, 3, 1, 5]);
    sound.addMelody('sound/C1EGADC.mp3', [5, 2, 3, 4, 1, 0]);
    sound.addMelody('sound/DGEC1AC.mp3', [1, 3, 2, 5, 4, 0]);
    sound.addMelody('sound/C1DCAGE.mp3', [5, 1, 0, 4, 3, 2]);

    // sound.addMelody('sound/C1DCAGE.mp3', [5, 1, 0, 4, 3, 2]);

    // sound.addMelody('sound/CAGDC1E.mp3', [0, 4, 3, 1, 5, 2]);
    // sound.addMelody('sound/DGEC1AC.mp3', [1, 3, 2, 5, 4, 0]);

    sound.audioSuccess = new Audio('sound/pauseYeah.mp3');
    sound.audioSuccess.load();
    sound.audioSuccess.pause();
    sound.audioSuccess.volume = sound.volume;

    sound.audioFail = new Audio('sound/pauseoey.mp3');
    sound.audioFail.load();
    sound.audioFail.pause();
    sound.audioFail.volume = sound.volume;

    return sound;
};