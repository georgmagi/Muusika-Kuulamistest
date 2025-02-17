var songs = [
    "./songs/01 - Franz Schubert - Soololaul _An die Musik_ (Muusikale).mp3",
    "./songs/02 - Franz Schubert - Soololaul _Erlkönig_ (Metshaldjas).mp3",
    "./songs/03 - Robert Schumann - Klaveripala _Träumerei_ (Unistus), klaveritsüklist _Lastestseenid_.mp3",
    "./songs/04 - Robert Schumann - Soololaul _Im wunderschönen Monat Mai_ (See oli kaunil maikuul) laulutsüklist _Poeedi armastus_.mp3",
    "./songs/05 - Frederic Chopin - _Etüüd_ klaverile op. 10, nr.12, _Revolutsiooniline_.mp3",
    "./songs/06 - Frederic Chopin - _Nokturn_ klaverile nr. 20.mp3",
    "./songs/07 - Ferenc Liszt - _Ungari rapsoodia nr.2_ klaverile.mp3",
    "./songs/08 - Ferenc Liszt - _Totentanz_ (Surmatants) klaverile ja orkestrile.mp3",
    "./songs/09 - Johannes Brahms - Soololaul _Wiegenlied_ (Hällilaul).mp3",
    "./songs/10 - Johannes Brahms - _Ungari tants nr. 5_ orkestrile.mp3",
    "./songs/11 - Hector Berlioz - _Fantastiline sümfoonia_, IV osa - _Rongkäik võllapuule_.mp3",
    "./songs/12 - Gioacchino Rossini - Figaro aaria ooperist _Il Barbiere di Sevilla_ (Sevilla habemeajaja).mp3",
    "./songs/13 - Giuseppe Verdi - _Joogilaul_ ooperist _Traviata_.mp3",
    "./songs/14 - Giuseppe Verdi - Dies Irae (Viha päev), osa Reekviemist.mp3",
    "./songs/15 - Giacomo Puccini - Lauretta aaria ooperist _Gianni Schicchi_.mp3",
    "./songs/16 - Giacomo Puccini - Prints Calafi aaria, ooperist _Turandot_.mp3",
    "./songs/17 - Georges Bizet - Carmeni aaria (Habanera) ooperist _Carmen_.mp3",
    "./songs/18 - Georges Bizet - Toreadooride sisenemine, ooperist _Carmen_.mp3",
    "./songs/19 - Richard Wagner - Pulmamarss, ooperist _Lohengrin_.mp3",
    "./songs/20 - Richard Wagner - Valküüride lend, ooperist _Valküür_ - ooperitetraloogiast _Nibelungi sõrmus_.mp3",
    "./songs/21 - Mihhail Glinka - Avamäng ooperile _Ruslan ja Ludmilla_.mp3",
    "./songs/22 - Pjotr Tšaikovski - Luikede teema balletist _Luikede järv_.mp3",
    "./songs/23 - Pjotr Tšaikovski - Klaverikontsert nr.1, op.23 - I osa.mp3",
    "./songs/24 - Johann Strauss jun - Adele kuplee, operetist _Die Fledermaus (Nahkhiir).mp3",
    "./songs/25 - Franz Lehar - Meeste septett operetist _Die Lustige Witwe_ (Lõbus lesk).mp3",
    "./songs/26 - Nikolai Rimski-Korsakov - _Kimalase lend_ ooperist _Tsaar Saltaan_.mp3",
    "./songs/27 - Modest Mussorgski - Tsaar Boriss Godunovi kroonimisstseen ooperist _Boriss Godunov_.mp3",
    "./songs/28 - Edvard Grieg - _Hommikumeeleolu_ orkestrisüidist _Peer Gynt_.mp3",
    "./songs/29 - Edvard Grieg - _Mäekuninga koopas_, orkestrisüidist _Peer Gynt_.mp3",
    "./songs/30 - Jean Sibelius - Sümfooniline poeem _Finlandia_.mp3",
    "./songs/31 - Gustav Mahler - Sümfoonia nr. 8 _Sümfoonia tuhandele esitajale_, I osa _Veni Creator Spiritus_ (Oh tule Looja Vaim).mp3",
    "./songs/32 - Richard Strauss -  sümfooniline poeem _Also Sprach Zarathustra_ (Nii rääkis Zarathustra), (katkend).mp3",
    "./songs/33 - Claude Debussy - sümfooniline prelüüd _A l'apres-midi d'un faune' (Fauni pärastlõuna).mp3",
    "./songs/34 - Claude Debussy - klaveripala _Claire de Lune_ (Kuuvalgus).mp3",
    "./songs/35 - Maurice Ravel - orkestriteos _Bolero_ (lühike versioon).mp3",
    "./songs/36 - Arnold Schönberg -  aaria _Da kommt ein licht!_ (Sealt saabub valgus), lühiooperist _Erwartung_ (Ootus).mp3",
    "./songs/37 - Igor Stravinski - _Põrgulik tants_, balletist _Tulilind_.mp3",
    "./songs/38 - Carl Orff - lavaline kantaat _Carmina Burana_, 1. osa _O, Fortuna_ (Oo, Saatus).mp3",
    "./songs/39 - Benjamin Britten - _The Young Persons Guide to the Orchestra_ (Noorte juhis orkestri juurde), katkend.mp3",
    "./songs/40 - Sergei Prokofjev - _Capulettide ballil_, balletist _ Romeo ja Julia_.mp3",
    "./songs/41 - Dmitri Šostakovitš - _Pidulik avamäng_, op.96 sümfooniaorkestrile.mp3",
    "./songs/42 - George Gershwin - Orkestriteos _Rhapsody in Blue_.mp3",
    "./songs/43 - John Cage - _Bacchanale_, ettevalmistatud klaverile.mp3",
    "./songs/44 - John Cage - _Imaginary Landscape_ nr.3, löökriistade sekstetile ja mikrofonidele.mp3",
    "./songs/45 - Karlheinz Stockhausen - _Struktur XI_, elektronmuusika teosest _Kontakte_.mp3",
    "./songs/46 - Steve Reich - _City Life_, I osa _Check it out_.mp3",
    "./songs/47 - Philip Glass - _Tapajos river_ (Tapajos_e jõgi).mp3",
    "./songs/48 - Philip Glass - _Truman sleeps_, filmist _The Truman show_.mp3"
];

var currentSongIndex;
var timeoutId;
var isPlaying = false;
let currentIndex = -1;
let playedIndexes = [];
let audioContext = null;

// Initialize audio context on first user interaction
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

function showLoading() {
    const player = document.getElementById("musicPlayer");
    player.style.opacity = "0.5";
    if (document.getElementById("loadingMessage")) {
        document.getElementById("loadingMessage").style.display = "block";
    } else {
        const loadingDiv = document.createElement("div");
        loadingDiv.id = "loadingMessage";
        loadingDiv.innerHTML = "Loading...";
        loadingDiv.style.textAlign = "center";
        loadingDiv.style.marginTop = "10px";
        player.parentNode.insertBefore(loadingDiv, player.nextSibling);
    }
}

function hideLoading() {
    const player = document.getElementById("musicPlayer");
    player.style.opacity = "1";
    if (document.getElementById("loadingMessage")) {
        document.getElementById("loadingMessage").style.display = "none";
    }
}

function playRandomSong() {
    initAudioContext();
    showLoading();
    
    var songName = document.getElementById("song-reveal");
    songName.style.opacity = 0;
    
    if (playedIndexes.length === songs.length) {
        playedIndexes = [];
    }
    
    let randomIndex = Math.floor(Math.random() * songs.length);
    while (playedIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * songs.length);
    }
    playedIndexes.push(randomIndex);
    
    var audio = document.getElementById("musicPlayer");
    var source = document.getElementById("musicSource");
    currentSongIndex = randomIndex;
    
    // Clear previous handlers
    audio.oncanplay = null;
    audio.oncanplaythrough = null;
    audio.onerror = null;
    
    // Add error handler
    audio.onerror = function(e) {
        console.error("Error loading audio:", e);
        console.log("Attempted to load:", songs[currentSongIndex]);
        hideLoading();
        alert("Vabandust, heli laadimine ebaõnnestus. Palun proovige uuesti.");
    };
    
    // Encode the file path properly
    let encodedPath = encodeURI(songs[currentSongIndex]).replace(/'/g, '%27');
    
    // Set the source and load
    source.src = encodedPath;
    audio.src = encodedPath;
    
    // Handle iOS loading
    audio.load();
    
    // Only set currentTime after metadata is loaded
    audio.onloadedmetadata = function() {
        hideLoading();
        var randomStartTime = Math.floor(Math.random() * (Math.max(0, audio.duration - 30)));
        audio.currentTime = parseFloat(randomStartTime);
        
        document.getElementById("song-reveal").style.display = "none";
        
        // Play handling with timeout
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    audio.pause();
                    isPlaying = false;
                }, 30000);
            }).catch(error => {
                console.error("Playback failed:", error);
                // For iOS, we need user interaction
                if (error.name === "NotAllowedError") {
                    alert("Palun vajutage uuesti 'Järgmine laul' nuppu heli mängimiseks.");
                }
            });
        }
    };
    
    // Add touch event handlers for better mobile experience
    audio.addEventListener('touchstart', function() {
        if (!isPlaying) {
            audio.play().catch(function(error) {
                console.log("Touch play failed:", error);
            });
        }
    });
}

function revealSongName() {
    var songName = document.getElementById("song-reveal");
    songName.style.display = "block";
    var songPath = songs[currentSongIndex];
    if (songPath.startsWith('encode')) {
        songPath = decodeURI(songPath);
    }
    songName.innerHTML = songPath.replace(".mp3", "").slice(12).replace(/_/g, '"');
    songName.style.opacity = 0;
    setTimeout(() => {
        songName.style.opacity = 1;
    }, 10);
    var songNameHeight = songName.scrollHeight;
    document.querySelector(".song-reveal-container").style.height = songNameHeight + 'px';
}

// Add event listener for page load
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("musicPlayer");
    
    // Add play/pause toggle for touch devices
    audio.addEventListener('touchend', function(e) {
        e.preventDefault();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
    
    // Prevent default touch behavior on controls
    const controls = audio.controls;
    if (controls) {
        controls.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        });
    }
});
