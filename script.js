// =============================================================================
// Song Metadata
// =============================================================================

var SONGS = [
    { id: 0,  file: "songs/01 - Uuem eesti rahvalik laul (liedertafellik laul) - _Mu isamaa armas_.mp3", number: "01", title: "Mu isamaa armas", composer: "Uuem eesti rahvalik laul", type: "rahvalik laul" },
    { id: 1,  file: "songs/02 - Aleksander Saebelmann-Kunileid - koorilaul _Mu isamaa on minu arm_.mp3", number: "02", title: "Mu isamaa on minu arm", composer: "Aleksander Saebelmann-Kunileid", type: "koorilaul" },
    { id: 2,  file: "songs/03 - Aleksander Saebelmann-Kunileid - koorilaul _Sind surmani_.mp3", number: "03", title: "Sind surmani", composer: "Aleksander Saebelmann-Kunileid", type: "koorilaul" },
    { id: 3,  file: "songs/04 - Friedrich August Saebelmann - koorilaul _Kaunimad laulud.mp3", number: "04", title: "Kaunimad laulud", composer: "Friedrich August Saebelmann", type: "koorilaul" },
    { id: 4,  file: "songs/05 - Karl August Hermann - koorilaul _Isamaa mälestus_.mp3", number: "05", title: "Isamaa mälestus", composer: "Karl August Hermann", type: "koorilaul" },
    { id: 5,  file: "songs/06 - Miina Härma - koorilaul _Meeste laul_.mp3", number: "06", title: "Meeste laul", composer: "Miina Härma", type: "koorilaul" },
    { id: 6,  file: "songs/07 - Miina Härma - koorilaul _Tuljak_.mp3", number: "07", title: "Tuljak", composer: "Miina Härma", type: "koorilaul" },
    { id: 7,  file: "songs/08 - Aleksander Läte - koorilaul _Kuldrannake_.mp3", number: "08", title: "Kuldrannake", composer: "Aleksander Läte", type: "koorilaul" },
    { id: 8,  file: "songs/09 - Rudolf Tobias - oratoorium _Joonase lähetamine_, osa _Sanctus_ (Püha).mp3", number: "09", title: "Sanctus (Püha)", composer: "Rudolf Tobias", type: "oratoorium" },
    { id: 9,  file: "songs/10 - Mihkel Lüdig - koorilaul _Koit_.mp3", number: "10", title: "Koit", composer: "Mihkel Lüdig", type: "koorilaul" },
    { id: 10, file: "songs/11 - Artur Kapp - oratoorium _Hiiob_, koor _Suur oled Sa!_.mp3", number: "11", title: "Suur oled Sa!", composer: "Artur Kapp", type: "oratoorium" },
    { id: 11, file: "songs/12 - Artur Kapp - soololaul _Metsateel_.mp3", number: "12", title: "Metsateel", composer: "Artur Kapp", type: "soololaul" },
    { id: 12, file: "songs/13 - Mart Saar - soololaul _Must lind_.mp3", number: "13", title: "Must lind", composer: "Mart Saar", type: "soololaul" },
    { id: 13, file: "songs/14 - Mart Saar - koorilaul _Põhjavaim_.mp3", number: "14", title: "Põhjavaim", composer: "Mart Saar", type: "koorilaul" },
    { id: 14, file: "songs/15 - Cyrillus Kreek - koorilaul _Õnnis on inimene_, koorilaulude kogumikust _Taaveti laulud_.mp3", number: "15", title: "Õnnis on inimene", composer: "Cyrillus Kreek", type: "koorilaul" },
    { id: 15, file: "songs/16 - Cyrillus Kreek - koorilaul _Sirisege, sirisege sirbikesed_.mp3", number: "16", title: "Sirisege, sirisege sirbikesed", composer: "Cyrillus Kreek", type: "koorilaul" },
    { id: 16, file: "songs/17 - Heino Eller - _Kodumaine viis_, keelpilliorkestrile.mp3", number: "17", title: "Kodumaine viis", composer: "Heino Eller", type: "keelpilliorkestrile" },
    { id: 17, file: "songs/18 - Heino Eller - klaveripala _Liblikas_.mp3", number: "18", title: "Liblikas", composer: "Heino Eller", type: "klaveripala" },
    { id: 18, file: "songs/19 - Eduard Tubin - sümfooniline süit balletist _Kratt_.mp3", number: "19", title: "Kratt", composer: "Eduard Tubin", type: "sümfooniline süit" },
    { id: 19, file: "songs/20 - Gustav Ernesaks - koorilaul _Hakkame mehed minema_.mp3", number: "20", title: "Hakkame mehed minema", composer: "Gustav Ernesaks", type: "koorilaul" },
    { id: 20, file: "songs/21 - Gustav Ernesaks - koorilaul _Mu isamaa on minu arm_.mp3", number: "21", title: "Mu isamaa on minu arm", composer: "Gustav Ernesaks", type: "koorilaul" },
    { id: 21, file: "songs/22 - Villem Kapp - kooripoeem _Põhjarannik_.mp3", number: "22", title: "Põhjarannik", composer: "Villem Kapp", type: "kooripoeem" },
    { id: 22, file: "songs/23 - Veljo Tormis - koorilaul _Ühtehoidmiselaul_.mp3", number: "23", title: "Ühtehoidmiselaul", composer: "Veljo Tormis", type: "koorilaul" },
    { id: 23, file: "songs/24 - Veljo Tormis - _Jaani hobu_, V osa kooritsüklist _Eesti kalendrilaulud_.mp3", number: "24", title: "Jaani hobu", composer: "Veljo Tormis", type: "kooritsükkel" },
    { id: 24, file: "songs/25 - Eino Tamberg - _Concerto grosso_, I osa.mp3", number: "25", title: "Concerto grosso, I osa", composer: "Eino Tamberg", type: "kontsert" },
    { id: 25, file: "songs/26 - Arvo Pärt - _Credo_ (_Usutunnistus_) segakoorile, klaverile ja orkestrile.mp3", number: "26", title: "Credo (Usutunnistus)", composer: "Arvo Pärt", type: "koorimuusika" },
    { id: 26, file: "songs/27 - Arvo Pärt - _Fratres_ (_Vennad_) viiulile, keelpilliorkestrile ja löökriistadele.mp3", number: "27", title: "Fratres (Vennad)", composer: "Arvo Pärt", type: "kammermuusika" },
    { id: 27, file: "songs/28 - Raimo Kangro - _Arcus_ (_Vibu_) sümfooniaorkestrile (katkend).mp3", number: "28", title: "Arcus (Vibu)", composer: "Raimo Kangro", type: "orkestriteos" },
    { id: 28, file: "songs/29 - Lepo Sumera - klaveriteos _Pala aastast 1981_, 2. pala _..._.mp3", number: "29", title: "Pala aastast 1981", composer: "Lepo Sumera", type: "klaveriteos" },
    { id: 29, file: "songs/30 - Erkki-Sven Tüür - _Ostium_ (_Uks_).mp3", number: "30", title: "Ostium (Uks)", composer: "Erkki-Sven Tüür", type: "orkestriteos" },
    { id: 30, file: "songs/31 - Erkki-Sven Tüür - _Spectrum I_, orelile.mp3", number: "31", title: "Spectrum I", composer: "Erkki-Sven Tüür", type: "oreliteos" },
    { id: 31, file: "songs/32 - Urmas Sisask - Missa nr. 3 _Eesti missa_, osa _Sanctus_.mp3", number: "32", title: "Eesti missa, Sanctus", composer: "Urmas Sisask", type: "missa" },
    { id: 32, file: "songs/33 - Urmas Sisask -  klaveritsükkel _Tähistaeva tsükkel lastele_, 2. pala _Kassiopeia_.mp3", number: "33", title: "Kassiopeia", composer: "Urmas Sisask", type: "klaveritsükkel" },
    { id: 33, file: "songs/34 - Toivo Tulev - _Der Herr ist mein getreuer Hirt, II_ (_Issand on minu ustav karjane_).mp3", number: "34", title: "Der Herr ist mein getreuer Hirt, II", composer: "Toivo Tulev", type: "koorimuusika" },
    { id: 34, file: "songs/35 - Mart Siimer - koorilaul _Homme_.mp3", number: "35", title: "Homme", composer: "Mart Siimer", type: "koorilaul" },
    { id: 35, file: "songs/36 - Pärt Uusberg - koorilaul _Muusika_.mp3", number: "36", title: "Muusika", composer: "Pärt Uusberg", type: "koorilaul" }
];

// =============================================================================
// State
// =============================================================================

var state = {
    currentPage: 'learn',
    // Learn
    learnIndex: 0,
    // Player
    startMode: 'start', // 'start' | 'random'
    clipTimeout: null,
    // Quiz
    quizPhase: 'select', // 'select' | 'active' | 'done'
    quizPool: [],
    quizCurrent: null,
    quizRevealed: false,
    quizSelection: null, // array of booleans, one per song
    // Storage
    data: null
};

var audioContext = null;

// =============================================================================
// Storage (localStorage)
// =============================================================================

function loadState() {
    try {
        var saved = localStorage.getItem('muusika_state');
        if (saved) {
            state.data = JSON.parse(saved);
        }
    } catch (e) { /* ignore */ }

    if (!state.data) {
        state.data = { songs: {}, quiz: null, stats: {}, prefs: {} };
    }
    if (!state.data.prefs) {
        state.data.prefs = {};
    }

    // Restore preferences
    state.startMode = state.data.prefs.startMode || 'start';
    state.learnIndex = state.data.prefs.learnIndex || 0;
    state.currentPage = state.data.prefs.currentPage || 'learn';

    // Restore quiz selection (default: all selected)
    if (state.data.prefs.quizSelection && state.data.prefs.quizSelection.length === SONGS.length) {
        state.quizSelection = state.data.prefs.quizSelection.slice();
    } else {
        state.quizSelection = [];
        for (var j = 0; j < SONGS.length; j++) state.quizSelection.push(true);
    }

    // Ensure every song has a record (and backfill new fields)
    for (var i = 0; i < SONGS.length; i++) {
        if (state.data.songs[i] && !state.data.songs[i].confusedWith) {
            state.data.songs[i].confusedWith = {};
        }
        if (!state.data.songs[i]) {
            state.data.songs[i] = {
                notes: '',
                notesUpdatedAt: null,
                markerPct: null,
                correctCount: 0,
                wrongCount: 0,
                confusedWith: {}
            };
        }
    }
}

function saveState() {
    try {
        localStorage.setItem('muusika_state', JSON.stringify(state.data));
    } catch (e) { /* ignore */ }
}

var saveDebounceTimer = null;
function saveStateDebounced() {
    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(saveState, 500);
}

// =============================================================================
// Navigation
// =============================================================================

function switchPage(page) {
    if (state.currentPage === page) return;

    // Stop any playing audio when switching pages
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    audio.currentTime = 0;

    state.currentPage = page;
    state.data.prefs.currentPage = page;
    saveState();

    // Update tab bar
    document.querySelectorAll('.tab-bar button').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.page === page);
    });

    // Show/hide pages
    document.querySelectorAll('.page').forEach(function(p) {
        p.classList.toggle('hidden', p.id !== 'page-' + page);
    });

    // Stop clip timeout when leaving quiz
    if (state.clipTimeout) {
        clearTimeout(state.clipTimeout);
        state.clipTimeout = null;
    }

    // Initialize page if needed
    if (page === 'learn') {
        renderLearnPage();
    } else if (page === 'quiz') {
        initQuizPage();
    } else if (page === 'compare') {
        initComparePage();
    }
}

// =============================================================================
// Audio Helpers
// =============================================================================

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }
}

function encodeSongPath(song) {
    return encodeURI(song.file).replace(/'/g, '%27');
}

function getStartTime(songIndex) {
    var audio = document.getElementById('musicPlayer');
    if (!audio.duration) return 0;

    // Marker overrides mode — but only if actually moved from 0
    var saved = state.data.songs[songIndex].markerPct;
    if (saved && saved > 0.005) {
        return saved * audio.duration;
    }

    // Fallback based on mode
    if (state.startMode === 'random') {
        return Math.floor(Math.random() * audio.duration);
    }
    return 0;
}

function playSongFull(songIndex) {
    initAudioContext();
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    audio.currentTime = 0;

    var path = encodeSongPath(SONGS[songIndex]);
    audio.src = path;
    audio.load();

    audio.onloadedmetadata = function() {
        audio.currentTime = getStartTime(songIndex);
        audio.play().catch(function() {});
        updateMarkerUI();
    };
}

function playSongClip(songIndex, durationMs) {
    initAudioContext();
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    audio.currentTime = 0;

    var path = encodeSongPath(SONGS[songIndex]);
    audio.src = path;
    audio.load();

    audio.onloadedmetadata = function() {
        var maxStart = Math.max(0, audio.duration - (durationMs / 1000));
        audio.currentTime = Math.floor(Math.random() * maxStart);
        audio.play().then(function() {
            state.clipTimeout = setTimeout(function() {
                audio.pause();
            }, durationMs);
        }).catch(function() {});
    };
}

// =============================================================================
// Custom Player UI
// =============================================================================

function updateMarkerUI() {
    var marker = document.getElementById('player-start-marker');
    var pct = state.data.songs[state.learnIndex].markerPct;
    // Always visible — default to 0 if no marker set
    marker.style.display = '';
    marker.style.left = ((pct || 0) * 100) + '%';
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
}

function initPlayer() {
    var audio = document.getElementById('musicPlayer');
    var playBtn = document.getElementById('player-play');
    var playIcon = playBtn.querySelector('.play-icon');
    var pauseIcon = playBtn.querySelector('.pause-icon');
    var track = document.getElementById('player-track');
    var fill = document.getElementById('player-fill');
    var timeEl = document.getElementById('player-time');
    var durationEl = document.getElementById('player-duration');

    // Play/pause toggle
    playBtn.addEventListener('click', function() {
        if (!audio.src || audio.src === window.location.href) {
            // No song loaded — load the current one
            learnPlayCurrent();
            return;
        }
        if (audio.paused) {
            audio.play().catch(function() {});
        } else {
            audio.pause();
        }
    });

    // Update play/pause icon
    audio.addEventListener('play', function() {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    });

    audio.addEventListener('pause', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });

    // Update time + progress
    audio.addEventListener('timeupdate', function() {
        if (!audio.duration) return;
        var pct = (audio.currentTime / audio.duration) * 100;
        fill.style.width = pct + '%';
        timeEl.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', function() {
        durationEl.textContent = formatTime(audio.duration);
    });

    // Seek on track click
    function seekFromEvent(e) {
        var rect = track.getBoundingClientRect();
        var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (audio.duration) {
            audio.currentTime = pct * audio.duration;
        }
    }

    // Click+drag anywhere on track to scrub
    var dragging = false;

    track.addEventListener('mousedown', function(e) {
        dragging = true;
        seekFromEvent(e);
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (dragging) seekFromEvent(e);
    });

    document.addEventListener('mouseup', function() {
        dragging = false;
    });

    // Touch: tap+drag on track to scrub
    track.addEventListener('touchstart', function(e) {
        dragging = true;
        seekFromEvent(e.touches[0]);
        e.preventDefault();
    });

    document.addEventListener('touchmove', function(e) {
        if (dragging) seekFromEvent(e.touches[0]);
    });

    document.addEventListener('touchend', function() {
        dragging = false;
    });

    // Marker drag (triangle below bar)
    var marker = document.getElementById('player-start-marker');
    var markerDragging = false;

    function moveMarkerFromEvent(e) {
        var rect = track.getBoundingClientRect();
        var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        // Snap to 0 if near the start (reset marker)
        if (pct < 0.005) pct = 0;
        marker.style.left = (pct * 100) + '%';
        state.data.songs[state.learnIndex].markerPct = pct > 0 ? pct : null;
        // Scrub audio so you hear where you're placing it
        if (audio.duration) {
            audio.currentTime = pct * audio.duration;
        }
    }

    function ensureAudioLoaded(callback) {
        if (audio.duration) {
            callback();
            return;
        }
        initAudioContext();
        var path = encodeSongPath(SONGS[state.learnIndex]);
        audio.src = path;
        audio.load();
        audio.onloadedmetadata = function() {
            callback();
        };
    }

    marker.addEventListener('mousedown', function(e) {
        ensureAudioLoaded(function() {
            markerDragging = true;
            moveMarkerFromEvent(e);
        });
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (markerDragging) moveMarkerFromEvent(e);
    });

    document.addEventListener('mouseup', function() {
        if (markerDragging) {
            markerDragging = false;
            saveState();
        }
    });

    marker.addEventListener('touchstart', function(e) {
        ensureAudioLoaded(function() {
            markerDragging = true;
            moveMarkerFromEvent(e.touches[0]);
        });
        e.preventDefault();
    });

    document.addEventListener('touchmove', function(e) {
        if (markerDragging) moveMarkerFromEvent(e.touches[0]);
    });

    document.addEventListener('touchend', function() {
        if (markerDragging) {
            markerDragging = false;
            saveState();
        }
    });

    // Start mode menu
    document.querySelectorAll('.player-menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            state.startMode = this.dataset.mode;
            state.data.prefs.startMode = state.startMode;
            saveState();
            document.querySelectorAll('.player-menu-item').forEach(function(el) {
                el.classList.toggle('active', el.dataset.mode === state.startMode);
            });
            updateMarkerUI();
        });
    });

    // Restore menu active state on load
    document.querySelectorAll('.player-menu-item').forEach(function(el) {
        el.classList.toggle('active', el.dataset.mode === state.startMode);
    });
    updateMarkerUI();
}

// =============================================================================
// Learn Page
// =============================================================================

function renderLearnPage() {
    var song = SONGS[state.learnIndex];
    var songData = state.data.songs[state.learnIndex];

    // Counter
    document.getElementById('learn-counter').textContent =
        String(state.learnIndex + 1).padStart(2, '0') + ' / ' + SONGS.length;

    // Metadata
    document.getElementById('learn-title').textContent = '"' + song.title + '"';
    document.getElementById('learn-composer').textContent = song.composer;
    document.getElementById('learn-type').textContent = song.type;

    // Notes
    document.getElementById('learn-notes').value = songData.notes || '';

    // Update marker for current song
    updateMarkerUI();

    // Song list highlighting
    renderLearnSongList();
}

function renderLearnSongList() {
    var list = document.getElementById('learn-song-list');
    var html = '';
    for (var i = 0; i < SONGS.length; i++) {
        var s = SONGS[i];
        var isCurrent = (i === state.learnIndex);
        html += '<div class="song-list-item' + (isCurrent ? ' current' : '') + '" data-index="' + i + '">';
        html += s.number + '. "' + s.title + '" — ' + s.composer;
        html += '</div>';
    }
    list.innerHTML = html;

    // Click handlers
    list.querySelectorAll('.song-list-item').forEach(function(el) {
        el.addEventListener('click', function() {
            state.learnIndex = parseInt(this.dataset.index);
            saveLearnIndex();
            renderLearnPage();
            learnPlayCurrent();
        });
    });

    // Scroll current into view
    var currentEl = list.querySelector('.song-list-item.current');
    if (currentEl) {
        currentEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
}

function learnPlayCurrent() {
    playSongFull(state.learnIndex);
}

function saveLearnIndex() {
    state.data.prefs.learnIndex = state.learnIndex;
    saveState();
}

function learnPrev() {
    if (state.learnIndex > 0) {
        state.learnIndex--;
        saveLearnIndex();
        renderLearnPage();
        learnPlayCurrent();
    }
}

function learnNext() {
    if (state.learnIndex < SONGS.length - 1) {
        state.learnIndex++;
        saveLearnIndex();
        renderLearnPage();
        learnPlayCurrent();
    }
}


// =============================================================================
// Quiz Page
// =============================================================================

function quizShowPhase(phase) {
    state.quizPhase = phase;
    document.getElementById('quiz-start-screen').classList.toggle('hidden', phase !== 'select');
    document.getElementById('quiz-card').classList.toggle('hidden', phase !== 'active');
    document.getElementById('quiz-done').classList.toggle('hidden', phase !== 'done');
    renderQuizSongList();
}

function quizStart() {
    // Build pool from selection
    state.quizPool = [];
    for (var i = 0; i < SONGS.length; i++) {
        if (state.quizSelection[i]) state.quizPool.push(i);
    }
    if (state.quizPool.length === 0) return; // nothing selected

    state.quizCurrent = null;
    state.quizRevealed = false;

    // Save pool + selection to localStorage
    state.data.quiz = { pool: state.quizPool.slice(), totalSelected: state.quizPool.length };
    state.data.prefs.quizSelection = state.quizSelection.slice();
    saveState();

    quizShowPhase('active');
    quizNext();
}

function quizNext() {
    if (state.quizPool.length === 0) {
        var total = state.data.quiz ? state.data.quiz.totalSelected : SONGS.length;
        document.getElementById('quiz-done-text').textContent = 'Kõik ' + total + ' teost on läbitud.';
        state.data.quiz = null;
        saveState();
        quizShowPhase('done');
        return;
    }

    // Pick random from pool
    var idx = Math.floor(Math.random() * state.quizPool.length);
    state.quizCurrent = state.quizPool[idx];
    state.quizRevealed = false;

    // Update progress
    var total = state.data.quiz.totalSelected;
    var done = total - state.quizPool.length;
    var pct = (done / total) * 100;
    document.getElementById('quiz-remaining').textContent = state.quizPool.length + ' / ' + total;
    document.getElementById('quiz-progress-fill').style.width = pct + '%';

    // Reset UI
    document.getElementById('quiz-ask').classList.remove('hidden');
    document.getElementById('quiz-answer').classList.add('hidden');
    document.getElementById('quiz-notes-peek').classList.add('hidden');
    document.getElementById('quiz-notes-btn').textContent = 'Näita märkmeid';
    document.getElementById('quiz-buttons').classList.remove('hidden');
    document.getElementById('quiz-confusion').classList.add('hidden');

    // Reset player UI
    document.getElementById('quiz-fill').style.width = '0%';
    document.getElementById('quiz-time').textContent = '0:00';
    document.getElementById('quiz-duration').textContent = '0:30';

    // Play 30s clip
    playSongClipQuiz(state.quizCurrent, 30000);

    renderQuizSongList();
}

function getQuizStartTime(songIndex) {
    var audio = document.getElementById('musicPlayer');
    if (!audio.duration) return 0;
    var clipLen = 30;

    // Marker overrides mode
    var saved = state.data.songs[songIndex].markerPct;
    if (saved && saved > 0.005) {
        return saved * audio.duration;
    }

    // Fallback based on mode
    if (state.startMode === 'random') {
        var maxStart = Math.max(0, audio.duration - clipLen);
        return Math.floor(Math.random() * maxStart);
    }
    return 0;
}

function playSongClipQuiz(songIndex, durationMs) {
    initAudioContext();
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    if (state.clipTimeout) clearTimeout(state.clipTimeout);

    var path = encodeSongPath(SONGS[songIndex]);
    audio.src = path;
    audio.load();

    audio.onloadedmetadata = function() {
        audio.currentTime = getQuizStartTime(songIndex);
        updateQuizMarkerUI();
        audio.play().then(function() {
            state.clipTimeout = setTimeout(function() {
                audio.pause();
            }, durationMs);
        }).catch(function() {});
    };
}

function quizReveal() {
    state.quizRevealed = true;
    var song = SONGS[state.quizCurrent];
    var songData = state.data.songs[state.quizCurrent];

    document.getElementById('quiz-title').textContent = '"' + song.title + '"';
    document.getElementById('quiz-composer').textContent = song.composer;
    document.getElementById('quiz-type').textContent = song.type;

    // Show notes (editable)
    document.getElementById('quiz-notes').value = songData.notes || '';

    document.getElementById('quiz-ask').classList.add('hidden');
    document.getElementById('quiz-answer').classList.remove('hidden');
}

function quizRight() {
    // Track correct
    state.data.songs[state.quizCurrent].correctCount++;

    // Remove from pool
    var idx = state.quizPool.indexOf(state.quizCurrent);
    if (idx > -1) state.quizPool.splice(idx, 1);

    state.data.quiz = { pool: state.quizPool.slice(), totalSelected: state.data.quiz.totalSelected };
    saveState();
    quizNext();
}

function quizWrong() {
    // Track wrong
    state.data.songs[state.quizCurrent].wrongCount++;

    // Show confusion prompt
    document.getElementById('quiz-buttons').classList.add('hidden');
    document.getElementById('quiz-confusion').classList.remove('hidden');

    // Make song list clickable for confusion selection
    state.quizConfusionActive = true;
    renderQuizSongList();
}

function quizConfusionPick(confIdx) {
    if (!state.quizConfusionActive) return;
    state.quizConfusionActive = false;

    // Log confusion pair (bidirectional)
    var songData = state.data.songs[state.quizCurrent];
    songData.confusedWith[confIdx] = (songData.confusedWith[confIdx] || 0) + 1;
    var otherData = state.data.songs[confIdx];
    otherData.confusedWith[state.quizCurrent] = (otherData.confusedWith[state.quizCurrent] || 0) + 1;

    quizAfterWrong();
}

function quizAfterWrong() {
    state.quizConfusionActive = false;
    document.getElementById('quiz-confusion').classList.add('hidden');
    document.getElementById('quiz-buttons').classList.remove('hidden');

    state.data.quiz = { pool: state.quizPool.slice(), totalSelected: state.data.quiz.totalSelected };
    saveState();
    quizNext();
}

function quizReset() {
    // Stop audio
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    if (state.clipTimeout) { clearTimeout(state.clipTimeout); state.clipTimeout = null; }

    state.quizPool = [];
    state.quizCurrent = null;
    state.data.quiz = null;
    saveState();
    quizShowPhase('select');
}

function quizToggleSelection(index) {
    state.quizSelection[index] = !state.quizSelection[index];
    state.data.prefs.quizSelection = state.quizSelection.slice();
    saveState();
    renderQuizSongList();
    updateQuizStartBtn();
}

function quizSelectAll(value) {
    for (var i = 0; i < SONGS.length; i++) state.quizSelection[i] = value;
    state.data.prefs.quizSelection = state.quizSelection.slice();
    saveState();
    renderQuizSongList();
    updateQuizStartBtn();
}

function updateQuizStartBtn() {
    var count = 0;
    for (var i = 0; i < state.quizSelection.length; i++) {
        if (state.quizSelection[i]) count++;
    }
    var btn = document.getElementById('quiz-start-btn');
    btn.disabled = count === 0;
    btn.textContent = count === SONGS.length ? 'Alusta' : 'Alusta (' + count + ')';
}

function renderQuizSongList() {
    var list = document.getElementById('quiz-song-list');
    var html = '';

    if (state.quizPhase === 'select') {
        // Selection mode: toggleable items
        for (var i = 0; i < SONGS.length; i++) {
            var s = SONGS[i];
            var sel = state.quizSelection[i];
            html += '<div class="song-list-item' + (sel ? ' selected' : ' deselected') + '" data-index="' + i + '">';
            html += s.number + '. "' + s.title + '" — ' + s.composer;
            html += '</div>';
        }
    } else {
        // Active/done mode: progress display
        var isConfusion = state.quizConfusionActive;
        for (var j = 0; j < SONGS.length; j++) {
            var s2 = SONGS[j];
            var inPool = state.quizPool && state.quizPool.indexOf(j) > -1;
            var wasSelected = state.data.quiz && state.quizSelection[j];
            var cls = 'song-list-item';
            if (isConfusion && j !== state.quizCurrent) {
                cls += ' confusion-pick';
            } else if (isConfusion && j === state.quizCurrent) {
                cls += ' current';
            } else if (state.quizPhase === 'active' && !wasSelected && !inPool) {
                cls += ' deselected';
            } else if (!inPool && wasSelected) {
                cls += ' done';
            }
            html += '<div class="' + cls + '" data-index="' + j + '">';
            html += s2.number + '. "' + s2.title + '" — ' + s2.composer;
            html += '</div>';
        }
    }
    list.innerHTML = html;

    // Confusion pick handlers
    if (state.quizConfusionActive) {
        list.querySelectorAll('.song-list-item.confusion-pick').forEach(function(el) {
            el.addEventListener('click', function() {
                quizConfusionPick(parseInt(this.dataset.index));
            });
        });
    }

    // Click/drag handlers for selection mode
    if (state.quizPhase === 'select') {
        var dragSelecting = false;
        var dragValue = false;

        list.querySelectorAll('.song-list-item').forEach(function(el) {
            el.addEventListener('mousedown', function(e) {
                var idx = parseInt(this.dataset.index);
                dragValue = !state.quizSelection[idx]; // toggle direction
                dragSelecting = true;
                setSelection(idx, dragValue);
                e.preventDefault();
            });
            el.addEventListener('mouseenter', function() {
                if (dragSelecting) {
                    setSelection(parseInt(this.dataset.index), dragValue);
                }
            });
            el.addEventListener('touchstart', function(e) {
                var idx = parseInt(this.dataset.index);
                dragValue = !state.quizSelection[idx];
                dragSelecting = true;
                setSelection(idx, dragValue);
                e.preventDefault();
            });
            el.addEventListener('touchmove', function(e) {
                if (!dragSelecting) return;
                var touch = e.touches[0];
                var target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.dataset && target.dataset.index !== undefined) {
                    setSelection(parseInt(target.dataset.index), dragValue);
                }
            });
        });

        function setSelection(idx, val) {
            if (state.quizSelection[idx] === val) return;
            state.quizSelection[idx] = val;
            // Update just the class, avoid full re-render during drag
            var items = list.querySelectorAll('.song-list-item');
            items[idx].classList.toggle('selected', val);
            items[idx].classList.toggle('deselected', !val);
            updateQuizStartBtn();
        }

        document.addEventListener('mouseup', function endDrag() {
            if (dragSelecting) {
                dragSelecting = false;
                state.data.prefs.quizSelection = state.quizSelection.slice();
                saveState();
            }
        });
        document.addEventListener('touchend', function() {
            if (dragSelecting) {
                dragSelecting = false;
                state.data.prefs.quizSelection = state.quizSelection.slice();
                saveState();
            }
        });
    }
}

function initQuizPage() {
    // Restore quiz state from localStorage
    if (state.data.quiz && state.data.quiz.pool && state.data.quiz.pool.length > 0) {
        state.quizPool = state.data.quiz.pool.slice();
        quizShowPhase('active');
        quizNext();
    } else {
        quizShowPhase('select');
        updateQuizStartBtn();
    }
}

function updateQuizMarkerUI() {
    var marker = document.getElementById('quiz-start-marker');
    if (state.quizCurrent == null) { marker.style.display = 'none'; return; }
    var pct = state.data.songs[state.quizCurrent].markerPct;
    marker.style.display = '';
    marker.style.left = ((pct || 0) * 100) + '%';
}

function initQuizPlayer() {
    var audio = document.getElementById('musicPlayer');
    var playBtn = document.getElementById('quiz-play');
    var playIcon = playBtn.querySelector('.play-icon');
    var pauseIcon = playBtn.querySelector('.pause-icon');
    var track = document.getElementById('quiz-track');
    var fill = document.getElementById('quiz-fill');
    var timeEl = document.getElementById('quiz-time');
    var marker = document.getElementById('quiz-start-marker');

    // Play/pause
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(function() {});
        } else {
            audio.pause();
        }
    });

    // Seek on track
    var dragging = false;
    function seekFromEvent(e) {
        var rect = track.getBoundingClientRect();
        var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (audio.duration) audio.currentTime = pct * audio.duration;
    }

    track.addEventListener('mousedown', function(e) { dragging = true; seekFromEvent(e); e.preventDefault(); });
    document.addEventListener('mousemove', function(e) { if (dragging && state.currentPage === 'quiz') seekFromEvent(e); });
    document.addEventListener('mouseup', function() { dragging = false; });
    track.addEventListener('touchstart', function(e) { dragging = true; seekFromEvent(e.touches[0]); e.preventDefault(); });
    document.addEventListener('touchmove', function(e) { if (dragging && state.currentPage === 'quiz') seekFromEvent(e.touches[0]); });
    document.addEventListener('touchend', function() { dragging = false; });

    // Marker drag
    var markerDragging = false;
    function moveQuizMarker(e) {
        if (state.quizCurrent == null) return;
        var rect = track.getBoundingClientRect();
        var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (pct < 0.005) pct = 0;
        marker.style.left = (pct * 100) + '%';
        state.data.songs[state.quizCurrent].markerPct = pct > 0 ? pct : null;
        if (audio.duration) audio.currentTime = pct * audio.duration;
    }

    function ensureQuizAudioLoaded(callback) {
        if (audio.duration) { callback(); return; }
        if (state.quizCurrent == null) return;
        initAudioContext();
        audio.src = encodeSongPath(SONGS[state.quizCurrent]);
        audio.load();
        audio.onloadedmetadata = function() { callback(); };
    }

    marker.addEventListener('mousedown', function(e) { ensureQuizAudioLoaded(function() { markerDragging = true; moveQuizMarker(e); }); e.preventDefault(); });
    document.addEventListener('mousemove', function(e) { if (markerDragging) moveQuizMarker(e); });
    document.addEventListener('mouseup', function() { if (markerDragging) { markerDragging = false; saveState(); } });
    marker.addEventListener('touchstart', function(e) { ensureQuizAudioLoaded(function() { markerDragging = true; moveQuizMarker(e.touches[0]); }); e.preventDefault(); });
    document.addEventListener('touchmove', function(e) { if (markerDragging) moveQuizMarker(e.touches[0]); });
    document.addEventListener('touchend', function() { if (markerDragging) { markerDragging = false; saveState(); } });

    // Start mode menu
    document.querySelectorAll('.quiz-menu-item').forEach(function(item) {
        item.addEventListener('click', function() {
            state.startMode = this.dataset.mode;
            state.data.prefs.startMode = state.startMode;
            saveState();
            // Update both menus (learn + quiz)
            document.querySelectorAll('.player-menu-item').forEach(function(el) {
                el.classList.toggle('active', el.dataset.mode === state.startMode);
            });
            updateQuizMarkerUI();
        });
    });

    // Restore menu active state
    document.querySelectorAll('.quiz-menu-item').forEach(function(el) {
        el.classList.toggle('active', el.dataset.mode === state.startMode);
    });

    // Update quiz player UI on timeupdate
    audio.addEventListener('timeupdate', function() {
        if (state.currentPage !== 'quiz' || !audio.duration) return;
        var pct = (audio.currentTime / audio.duration) * 100;
        fill.style.width = pct + '%';
        timeEl.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('play', function() {
        if (state.currentPage !== 'quiz') return;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    });

    audio.addEventListener('pause', function() {
        if (state.currentPage !== 'quiz') return;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });
}

// =============================================================================
// Compare Page
// =============================================================================

function getConfusionPairs() {
    var pairs = [];
    var seen = {};

    // Tier 1: explicit confusion pairs (A)
    for (var i = 0; i < SONGS.length; i++) {
        var cw = state.data.songs[i].confusedWith;
        for (var j in cw) {
            if (cw.hasOwnProperty(j)) {
                var key = Math.min(i, parseInt(j)) + '-' + Math.max(i, parseInt(j));
                if (!seen[key]) {
                    seen[key] = true;
                    pairs.push({ a: i, b: parseInt(j), count: cw[j] + 100 });
                }
            }
        }
    }

    // Tier 2: wrongCount-based pairs (B)
    var wrongSongs = [];
    for (var k = 0; k < SONGS.length; k++) {
        if (state.data.songs[k].wrongCount > 0) {
            wrongSongs.push({ idx: k, wrong: state.data.songs[k].wrongCount });
        }
    }
    wrongSongs.sort(function(x, y) { return y.wrong - x.wrong; });
    for (var m = 0; m + 1 < wrongSongs.length; m += 2) {
        var wKey = Math.min(wrongSongs[m].idx, wrongSongs[m+1].idx) + '-' + Math.max(wrongSongs[m].idx, wrongSongs[m+1].idx);
        if (!seen[wKey]) {
            seen[wKey] = true;
            pairs.push({ a: wrongSongs[m].idx, b: wrongSongs[m+1].idx, count: wrongSongs[m].wrong + wrongSongs[m+1].wrong });
        }
    }

    // Tier 3: same-composer pairs (always available)
    for (var c = 0; c < SONGS.length; c++) {
        for (var d = c + 1; d < SONGS.length; d++) {
            if (SONGS[c].composer === SONGS[d].composer) {
                var cKey = c + '-' + d;
                if (!seen[cKey]) {
                    seen[cKey] = true;
                    pairs.push({ a: c, b: d, count: 0 });
                }
            }
        }
    }

    // Sort by count descending (explicit > wrong > composer)
    pairs.sort(function(x, y) { return y.count - x.count; });

    return pairs;
}

function initComparePage() {
    var pairs = getConfusionPairs();
    state.comparePairs = pairs;

    document.getElementById('compare-empty').classList.toggle('hidden', pairs.length > 0);
    document.getElementById('compare-pairs-list').classList.toggle('hidden', pairs.length === 0);
    document.getElementById('compare-card').classList.add('hidden');

    if (pairs.length > 0) {
        renderComparePairsList(pairs);
    }
}

function renderComparePairsList(pairs) {
    var el = document.getElementById('compare-pairs');
    var html = '';
    var limit = Math.min(pairs.length, 10);
    for (var i = 0; i < limit; i++) {
        var p = pairs[i];
        var songA = SONGS[p.a];
        var songB = SONGS[p.b];
        html += '<button class="compare-pair-item" data-pair="' + i + '">';
        html += '"' + songA.title + '"';
        html += '<span class="compare-pair-vs">vs</span>';
        html += '"' + songB.title + '"';
        if (p.count > 0) {
            html += '<span class="compare-pair-count">' + (p.count > 100 ? p.count - 100 : '') + '</span>';
        }
        html += '</button>';
    }
    el.innerHTML = html;

    el.querySelectorAll('.compare-pair-item').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var pair = pairs[parseInt(this.dataset.pair)];
            compareStartPair(pair);
        });
    });
}

function compareStartPair(pair) {
    state.compareA = pair.a;
    state.compareB = pair.b;
    state.compareMystery = Math.random() < 0.5 ? pair.a : pair.b;

    var songA = SONGS[pair.a];
    var songB = SONGS[pair.b];

    document.getElementById('compare-title-a').textContent = '"' + songA.title + '"';
    document.getElementById('compare-composer-a').textContent = songA.composer;
    document.getElementById('compare-title-b').textContent = '"' + songB.title + '"';
    document.getElementById('compare-composer-b').textContent = songB.composer;

    document.getElementById('compare-guess-a').textContent = 'A — "' + songA.title + '"';
    document.getElementById('compare-guess-b').textContent = 'B — "' + songB.title + '"';

    // Show card, hide list
    document.getElementById('compare-pairs-list').classList.add('hidden');
    document.getElementById('compare-card').classList.remove('hidden');

    document.getElementById('compare-phase-listen').classList.remove('hidden');
    document.getElementById('compare-phase-guess').classList.add('hidden');
    document.getElementById('compare-phase-result').classList.add('hidden');
}

function compareBackToList() {
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    if (state.clipTimeout) { clearTimeout(state.clipTimeout); state.clipTimeout = null; }

    document.getElementById('compare-card').classList.add('hidden');
    document.getElementById('compare-pairs-list').classList.remove('hidden');
    // Re-render in case data changed
    renderComparePairsList(getConfusionPairs());
}

function comparePlayPiece(songIndex) {
    initAudioContext();
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    if (state.clipTimeout) clearTimeout(state.clipTimeout);

    audio.src = encodeSongPath(SONGS[songIndex]);
    audio.load();
    audio.onloadedmetadata = function() {
        var maxStart = Math.max(0, audio.duration - 30);
        audio.currentTime = Math.floor(Math.random() * maxStart);
        audio.play().then(function() {
            state.clipTimeout = setTimeout(function() { audio.pause(); }, 30000);
        }).catch(function() {});
    };
}

function compareStartGuess() {
    document.getElementById('compare-phase-listen').classList.add('hidden');
    document.getElementById('compare-phase-guess').classList.remove('hidden');

    // Play the mystery clip
    comparePlayPiece(state.compareMystery);
}

function compareGuess(guessedIndex) {
    var audio = document.getElementById('musicPlayer');
    audio.pause();
    if (state.clipTimeout) clearTimeout(state.clipTimeout);

    var correct = guessedIndex === state.compareMystery;
    var song = SONGS[state.compareMystery];

    document.getElementById('compare-result-text').textContent = correct ? 'Õige!' : 'Vale';
    document.getElementById('compare-result-answer').textContent =
        'See oli "' + song.title + '" — ' + song.composer;

    document.getElementById('compare-phase-guess').classList.add('hidden');
    document.getElementById('compare-phase-result').classList.remove('hidden');
}

function initComparePlayer() {
    var audio = document.getElementById('musicPlayer');
    var playBtn = document.getElementById('compare-play-mystery');
    var playIcon = playBtn.querySelector('.play-icon');
    var pauseIcon = playBtn.querySelector('.pause-icon');
    var track = document.getElementById('compare-track');
    var fill = document.getElementById('compare-fill');
    var timeEl = document.getElementById('compare-time');

    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(function() {});
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('timeupdate', function() {
        if (state.currentPage !== 'compare' || !audio.duration) return;
        fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
        timeEl.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('play', function() {
        if (state.currentPage !== 'compare') return;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    });

    audio.addEventListener('pause', function() {
        if (state.currentPage !== 'compare') return;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });
}

// =============================================================================
// Song List Toggle (Mobile)
// =============================================================================


// =============================================================================
// Init
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    loadState();

    // Create headless audio element (no native controls)
    var audio = document.createElement('audio');
    audio.id = 'musicPlayer';
    audio.setAttribute('playsinline', '');
    audio.setAttribute('webkit-playsinline', '');
    document.body.appendChild(audio);

    // Wire up custom player UI
    initPlayer();

    // Tab navigation
    document.querySelectorAll('.tab-bar button[data-page]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (!this.disabled) {
                switchPage(this.dataset.page);
            }
        });
    });

    // Restore saved page
    var savedPage = state.currentPage;
    state.currentPage = null; // clear so switchPage doesn't early-return
    switchPage(savedPage);

    // Learn controls
    document.getElementById('learn-prev').addEventListener('click', learnPrev);
    document.getElementById('learn-next').addEventListener('click', learnNext);
    // Learn notes auto-save
    document.getElementById('learn-notes').addEventListener('input', function() {
        state.data.songs[state.learnIndex].notes = this.value;
        state.data.songs[state.learnIndex].notesUpdatedAt = Date.now();
        saveStateDebounced();
    });


    // Quiz controls
    document.getElementById('quiz-start-btn').addEventListener('click', quizStart);
    document.getElementById('quiz-notes-btn').addEventListener('click', function() {
        if (state.quizCurrent == null) return;
        var peek = document.getElementById('quiz-notes-peek');
        var peekText = document.getElementById('quiz-notes-peek-text');
        var btn = document.getElementById('quiz-notes-btn');
        if (peek.classList.contains('hidden')) {
            peekText.value = state.data.songs[state.quizCurrent].notes || '';
            peek.classList.remove('hidden');
            btn.textContent = 'Peida märkmed';
        } else {
            peek.classList.add('hidden');
            btn.textContent = 'Näita märkmeid';
        }
    });
    document.getElementById('quiz-notes-peek-text').addEventListener('input', function() {
        if (state.quizCurrent == null) return;
        state.data.songs[state.quizCurrent].notes = this.value;
        state.data.songs[state.quizCurrent].notesUpdatedAt = Date.now();
        saveStateDebounced();
    });
    document.getElementById('quiz-reveal-btn').addEventListener('click', quizReveal);
    document.getElementById('quiz-notes').addEventListener('input', function() {
        if (state.quizCurrent == null) return;
        state.data.songs[state.quizCurrent].notes = this.value;
        state.data.songs[state.quizCurrent].notesUpdatedAt = Date.now();
        saveStateDebounced();
    });
    document.getElementById('quiz-right').addEventListener('click', quizRight);
    document.getElementById('quiz-wrong').addEventListener('click', quizWrong);
    document.getElementById('quiz-confusion-skip').addEventListener('click', quizAfterWrong);
    document.getElementById('quiz-restart-btn').addEventListener('click', function() {
        quizShowPhase('select');
        updateQuizStartBtn();
    });
    var resetBtn = document.getElementById('quiz-reset-btn');
    var resetConfirm = false;
    var resetTimer = null;
    resetBtn.addEventListener('click', function() {
        if (resetConfirm) {
            clearTimeout(resetTimer);
            resetConfirm = false;
            resetBtn.textContent = 'Alusta uuesti';
            resetBtn.classList.remove('confirming');
            quizReset();
        } else {
            resetConfirm = true;
            resetBtn.textContent = 'Oled kindel?';
            resetBtn.classList.add('confirming');
            resetTimer = setTimeout(function() {
                resetConfirm = false;
                resetBtn.textContent = 'Alusta uuesti';
                resetBtn.classList.remove('confirming');
            }, 3000);
        }
    });

    initQuizPlayer();

    // Compare controls
    document.getElementById('compare-play-a').addEventListener('click', function() {
        comparePlayPiece(state.compareA);
    });
    document.getElementById('compare-play-b').addEventListener('click', function() {
        comparePlayPiece(state.compareB);
    });
    document.getElementById('compare-ready-btn').addEventListener('click', compareStartGuess);
    document.getElementById('compare-guess-a').addEventListener('click', function() {
        compareGuess(state.compareA);
    });
    document.getElementById('compare-guess-b').addEventListener('click', function() {
        compareGuess(state.compareB);
    });
    document.getElementById('compare-next-btn').addEventListener('click', compareBackToList);
    document.getElementById('compare-back-btn').addEventListener('click', compareBackToList);

    initComparePlayer();

    // Spacebar to play/pause
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            var audio = document.getElementById('musicPlayer');
            if (audio.paused) {
                audio.play().catch(function() {});
            } else {
                audio.pause();
            }
        }
    });
    // Arrow keys in Õpi
    document.addEventListener('keydown', function(e) {
        if (state.currentPage !== 'learn') return;
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
        if (e.code === 'ArrowLeft') { e.preventDefault(); learnPrev(); }
        if (e.code === 'ArrowRight') { e.preventDefault(); learnNext(); }
    });

    document.addEventListener('keyup', function(e) {
        if (e.code === 'Space' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
        }
    });
});
