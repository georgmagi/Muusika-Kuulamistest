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

var currentSongIndex = null;
var timeoutId;
var isPlaying = false;
var audioContext = null;

// Initialize audio context on first user interaction
function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }
}

function showLoading() {
    const player = document.getElementById("musicPlayer");
    player.style.opacity = "0.5";
    const loadingDiv = document.getElementById("loadingMessage") || document.createElement("div");
    loadingDiv.id = "loadingMessage";
    loadingDiv.innerHTML = "Laadimine...";
    loadingDiv.style.textAlign = "center";
    loadingDiv.style.marginTop = "10px";
    if (!document.getElementById("loadingMessage")) {
        player.parentNode.insertBefore(loadingDiv, player.nextSibling);
    }
    loadingDiv.style.display = "block";
}

function hideLoading() {
    const player = document.getElementById("musicPlayer");
    player.style.opacity = "1";
    const loadingMessage = document.getElementById("loadingMessage");
    if (loadingMessage) {
        loadingMessage.style.display = "none";
    }
}

function playRandomSong() {
    try {
        initAudioContext();
        showLoading();
        
        // Get the audio element
        const audio = document.getElementById("musicPlayer");
        
        // Stop any currently playing audio and clear timeout
        audio.pause();
        audio.currentTime = 0;
        clearTimeout(timeoutId);
        isPlaying = false;
        
        // Remove all existing event listeners
        audio.removeEventListener('loadedmetadata', null);
        audio.removeEventListener('error', null);
        
        const songName = document.getElementById("song-reveal");
        songName.style.opacity = "0";
        songName.style.display = "none";
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        
        currentSongIndex = randomIndex;
        
        // Encode the file path properly for iOS
        let encodedPath = songs[currentSongIndex];
        // Remove any leading './' as it can cause issues on iOS
        encodedPath = encodedPath.replace(/^\.\//, '');
        // Encode the path properly
        encodedPath = encodeURI(encodedPath).replace(/'/g, '%27');
        
        console.log('Attempting to load audio from:', encodedPath);
        
        // Set new source
        audio.src = encodedPath;
        
        // Add loading timeout
        const loadingTimeout = setTimeout(() => {
            hideLoading();
            alert("Heli laadimine võttis liiga kaua aega. Veenduge, et kõik failid on õiges kaustas ja proovige uuesti.");
        }, 10000); // 10 second timeout
        
        const loadedMetadataHandler = function() {
            clearTimeout(loadingTimeout);
            hideLoading();
            console.log('Audio metadata loaded successfully');
            
            const maxStartTime = Math.max(0, this.duration - 30);
            const randomStartTime = Math.floor(Math.random() * maxStartTime);
            this.currentTime = randomStartTime;
            
            const playPromise = this.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Audio started playing successfully');
                    isPlaying = true;
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        this.pause();
                        isPlaying = false;
                    }, 30000);
                }).catch(error => {
                    console.error("Playback failed:", error);
                    hideLoading();
                    if (error.name === "NotAllowedError") {
                        alert("iOS seadmel peab muusika mängimiseks:\n1. Avama lehe Safari brauseris\n2. Veenduma, et kõik failid on õiges kaustas\n3. Vajutama uuesti 'Järgmine laul' nuppu");
                    } else {
                        alert("Viga heli mängimisel. Veenduge, et:\n1. Kõik failid on õiges kaustas\n2. Kasutate Safari brauserit\n3. Helifailid on MP3 formaadis");
                    }
                });
            }
        };
        
        const errorHandler = function(e) {
            clearTimeout(loadingTimeout);
            console.error("Error loading audio:", e);
            console.error("Error code:", this.error ? this.error.code : 'unknown');
            hideLoading();
            alert("Heli laadimine ebaõnnestus. Veenduge, et:\n1. Kõik failid on 'songs' kaustas\n2. Helifailid on MP3 formaadis\n3. Kasutate Safari brauserit");
        };
        
        // Remove old event listeners if they exist
        audio.removeEventListener('loadedmetadata', loadedMetadataHandler);
        audio.removeEventListener('error', errorHandler);
        
        // Add new event listeners
        audio.addEventListener('loadedmetadata', loadedMetadataHandler);
        audio.addEventListener('error', errorHandler);
        
        // Load the audio
        audio.load();
        
    } catch (error) {
        console.error("Error in playRandomSong:", error);
        hideLoading();
        alert("Midagi läks valesti. Veenduge, et:\n1. Kõik failid on lahti pakitud\n2. 'songs' kaust on olemas\n3. Kasutate Safari brauserit");
    }
}

function revealSongName() {
    if (currentSongIndex === null) {
        alert("Palun valige kõigepealt laul.");
        return;
    }
    
    const songName = document.getElementById("song-reveal");
    const songPath = songs[currentSongIndex];
    const cleanTitle = songPath
        .replace("./songs/", "")
        .replace(".mp3", "")
        .replace(/_/g, '"');
    
    songName.innerHTML = cleanTitle;
    songName.style.display = "block";
    songName.style.opacity = "0";
    
    // Force reflow
    songName.offsetHeight;
    
    songName.style.opacity = "1";
    
    const container = document.querySelector(".song-reveal-container");
    container.style.height = songName.scrollHeight + "px";
}

// Add this function to check file existence
function checkFileExists(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(true);
            } else {
                resolve(false);
            }
        };
        xhr.onerror = function() {
            resolve(false);
        };
        xhr.send();
    });
}

// Update the document ready handler
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("musicPlayer");
    
    // Check if we're on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS) {
        // Check if the songs directory exists
        checkFileExists('songs').then(exists => {
            if (!exists) {
                alert("Hoiatus: 'songs' kausta ei leitud. Veenduge, et:\n1. Kõik failid on lahti pakitud\n2. Kasutate Safari brauserit\n3. 'songs' kaust on olemas");
            }
        });
    }
    
    // Prevent default touch behavior on controls
    audio.addEventListener('touchstart', function(e) {
        e.stopPropagation();
    });
    
    // Initialize buttons with error handling
    const playButton = document.querySelector('.play-button');
    const revealButton = document.querySelector('.reveal-button');
    
    if (playButton && revealButton) {
        playButton.addEventListener('click', playRandomSong);
        revealButton.addEventListener('click', revealSongName);
    } else {
        console.error("Buttons not found in the DOM");
        alert("Viga lehe laadimisel. Palun värskendage lehte.");
    }
});
