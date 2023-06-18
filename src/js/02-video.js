// 1. import librarii
// 2. initializare pre existing player 
// 3. functia on pentru time update
// 4. Salvează timpul de redare în local storage. "videoplayer-current-time" va fi cheia de stocare.
// 5. La reîncărcarea paginii, utilizează metoda setCurrentTime() pentru a relua redarea de la poziţia salvată.
// 6. Adaugă la proiect librăria lodash.throttle și fă astfel încât timpul de redare să fie actualizat în spațiul de stocare nu mai mult de o dată pe secundă.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
    let currentTimeSecond = Math.floor(data.seconds);
    console.log(currentTimeSecond);
    localStorage.setItem('videoplayer-current-time', currentTimeSecond);
};

player.on('timeupdate', throttle(onPlay, 1000));
 
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
