const music = new Audio();

// Create Array

const songs = [
    {
        id:'1',
        songName:`Wing <br>
        <div class="subtitle">BamBam</div>`,
        poster:'img/bam.jpg'
    },
    {
        id:'2',
        songName:`Ride or die <br>
        <div class="subtitle">BamBam</div>`,
        poster:'img/bam2.jpg'
    },
    {
        id:'3',
        songName:`thank u, next <br>
        <div class="subtitle">Ariana Grande</div>`,
        poster:'img/Logo_ariana.jpg'
    },
    {
        id:'4',
        songName:`OMG <br>
        <div class="subtitle">Newjean</div>`,
        poster:'img/Logo_newjean.jpeg'
    },
    {
        id:'5',
        songName:`Prefect night <br>
        <div class="subtitle">Lesserafim</div>`,
        poster:'img/Logolesserafim.jpg'
    },
    {
        id:'6',
        songName:`WHEELS UP <br>
        <div class="subtitle">BamBam</div>`,
        poster:'img/Logobam3.jpg'
    },
    {
        id:'7',
        songName:`Drama <br>
        <div class="subtitle">Aespa</div>`,
        poster:'img/Logoaespa.jpg'
    },
    {
        id:'8',
        songName:`Beside your <br>
        <div class="subtitle">Keshi</div>`,
        poster:'img/Logokeshi.png'
    },
    {
        id:'9',
        songName:`ETA <br>
        <div class="subtitle">Newjean</div>`,
        poster:'img/Logo_newjean.jpeg'
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.querySelector('img').src = songs[i].poster;
    element.querySelector('h5').innerHTML = songs[i].songName;
    
    // เพิ่มการเล่นเพลงเมื่อคลิกที่แต่ละเพลง
    element.addEventListener('click', () => {
        music.src = 'List_Music/Wings.mp3/' + songs[i].id + '.mp3'; // กำหนดเพลงที่จะเล่น
        music.load(); // โหลดเพลง
        music.play(); // เล่นเพลง
    });
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.load(); // โหลดเพลง
        music.play(); // เล่นเพลง
        masterPlay.classList.remove('bx-play-circle');
        masterPlay.classList.add('bx-pause-circle');
        wave.classList.add('active2')
    } else {
        music.pause(); // หยุดเล่นเพลง
        masterPlay.classList.add('bx-play-circle');
        masterPlay.classList.remove('bx-pause-circle');
        wave.classList.remove('active2')
    }
});

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        e.target.classList.remove('bx-play-circle');
        e.target.classList.add('bx-pause-circle');
    })
})

// 1:19:12