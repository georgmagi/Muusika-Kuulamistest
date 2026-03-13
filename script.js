var songs = [
    "./songs/01 - Uuem eesti rahvalik laul (liedertafellik laul) - _Mu isamaa armas_.mp3",
    "./songs/02 - Aleksander Saebelmann-Kunileid - koorilaul _Mu isamaa on minu arm_.mp3",
    "./songs/03 - Aleksander Saebelmann-Kunileid - koorilaul _Sind surmani_.mp3",
    "./songs/04 - Friedrich August Saebelmann - koorilaul _Kaunimad laulud.mp3",
    "./songs/05 - Karl August Hermann - koorilaul _Isamaa mälestus_.mp3",
    "./songs/06 - Miina Härma - koorilaul _Meeste laul_.mp3",
    "./songs/07 - Miina Härma - koorilaul _Tuljak_.mp3",
    "./songs/08 - Aleksander Läte - koorilaul _Kuldrannake_.mp3",
    "./songs/09 - Rudolf Tobias - oratoorium _Joonase lähetamine_, osa _Sanctus_ (Püha).mp3",
    "./songs/10 - Mihkel Lüdig - koorilaul _Koit_.mp3",
    "./songs/11 - Artur Kapp - oratoorium _Hiiob_, koor _Suur oled Sa!_.mp3",
    "./songs/12 - Artur Kapp - soololaul _Metsateel_.mp3",
    "./songs/13 - Mart Saar - soololaul _Must lind_.mp3",
    "./songs/14 - Mart Saar - koorilaul _Põhjavaim_.mp3",
    "./songs/15 - Cyrillus Kreek - koorilaul _Õnnis on inimene_, koorilaulude kogumikust _Taaveti laulud_.mp3",
    "./songs/16 - Cyrillus Kreek - koorilaul _Sirisege, sirisege sirbikesed_.mp3",
    "./songs/17 - Heino Eller - _Kodumaine viis_, keelpilliorkestrile.mp3",
    "./songs/18 - Heino Eller - klaveripala _Liblikas_.mp3",
    "./songs/19 - Eduard Tubin - sümfooniline süit balletist _Kratt_.mp3",
    "./songs/20 - Gustav Ernesaks - koorilaul _Hakkame mehed minema_.mp3",
    "./songs/21 - Gustav Ernesaks - koorilaul _Mu isamaa on minu arm_.mp3",
    "./songs/22 - Villem Kapp - kooripoeem _Põhjarannik_.mp3",
    "./songs/23 - Veljo Tormis - koorilaul _Ühtehoidmiselaul_.mp3",
    "./songs/24 - Veljo Tormis - _Jaani hobu_, V osa kooritsüklist _Eesti kalendrilaulud_.mp3",
    "./songs/25 - Eino Tamberg - _Concerto grosso_, I osa.mp3",
    "./songs/26 - Arvo Pärt - _Credo_ (_Usutunnistus_) segakoorile, klaverile ja orkestrile.mp3",
    "./songs/27 - Arvo Pärt - _Fratres_ (_Vennad_) viiulile, keelpilliorkestrile ja löökriistadele.mp3",
    "./songs/28 - Raimo Kangro - _Arcus_ (_Vibu_) sümfooniaorkestrile (katkend).mp3",
    "./songs/29 - Lepo Sumera - klaveriteos _Pala aastast 1981_, 2. pala _..._.mp3",
    "./songs/30 - Erkki-Sven Tüür - _Ostium_ (_Uks_).mp3",
    "./songs/31 - Erkki-Sven Tüür - _Spectrum I_, orelile.mp3",
    "./songs/32 - Urmas Sisask - Missa nr. 3 _Eesti missa_, osa _Sanctus_.mp3",
    "./songs/33 - Urmas Sisask -  klaveritsükkel _Tähistaeva tsükkel lastele_, 2. pala _Kassiopeia_.mp3",
    "./songs/34 - Toivo Tulev - _Der Herr ist mein getreuer Hirt, II_ (_Issand on minu ustav karjane_).mp3",
    "./songs/35 - Mart Siimer - koorilaul _Homme_.mp3",
    "./songs/36 - Pärt Uusberg - koorilaul _Muusika_.mp3"
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
