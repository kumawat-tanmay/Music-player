var music = [
    {name: "Apna bana le", url: "./songs/Apna-Bana-Le-Piya-MostMags.mp3", img: "https://tse1.mm.bing.net/th?id=OIP.dDQClCm5Z566ScMQH6wYIQHaEK&pid=Api"},
    {name: "Kaash Aisa bhi", url: "./songs/Kaash-Aisa-Hota-(Darshan-Raval)-PagalWorld.mp3", img: "https://tse1.mm.bing.net/th?id=OIP.dvfGUTROpRUbtSBedBYDEAHaEK&pid=Api&P=0&h=220"},
    {name: "Ishq", url: "./songs/Ishq_320(PagalWorld.com.sb).mp3", img: "https://tse2.mm.bing.net/th?id=OIP.zcZQhdnU3_1v0MKUEeO_8wHaEK&pid=Api&P=0&h=220"},
    {name: "Karta kya hai", url: "./songs/KARTA KYA HAI(KoshalWorld.Com).mp3", img: "https://tse4.mm.bing.net/th?id=OIP.-e3xDdH9E7-o5fm927l1VgHaEK&pid=Api&P=0&h=220"},
    {name: "Hum Toh Deewane", url: "./songs/Hum Toh Deewane(PagalWorld.com.se).mp3", img: "https://c.saavncdn.com/464/Hum-Toh-Deewane-Hindi-2023-20230912170430-500x500.jpg"},
    {name: "Players", url: "./songs/Players.mp3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMnUK8GuBXuh7CUNzSznWNqT8cXIN20ifjQ&s"},
    {name: "Makhna", url: "./songs/Makhna - Yo Yo Honey Singh.mp3", img: "https://m.media-amazon.com/images/M/MV5BYzRhODQ3NzMtYzcxOS00ZGVkLTk0OGMtNTk0NmJhZDdmNjNmXkEyXkFqcGc@._V1_.jpg"},
    {name: "Rangisari", url: "./songs/Rangisari-Jugjugg-Jeeyo.mp3", img: "https://c.saavncdn.com/260/Rangisari-From-Jugjugg-Jeeyo-Hindi-2022-20220606031008-500x500.jpg"}
];

var audio = new Audio();
var all_song = document.querySelector("#all-songs");
var image = document.querySelector("#pic");
var currentSongName = document.querySelector("#current-song-name");
var selectedSong = 0;
var play = document.querySelector("#play");
var forward = document.querySelector("#forward");
var backward = document.querySelector("#back");
var flag = 0;

function mainfunction() {
    var clutter = "";
    music.forEach(function(elem, index) {
        clutter += `<div class="song-card flex items-center justify-between p-3 bg-gray-700 rounded-lg shadow-md cursor-pointer hover:bg-gray-600 transition-colors" id=${index}>
                        <div class="part-1 flex items-center space-x-4">
                            <img src="${elem.img}" alt="${elem.name} album art" class="w-14 h-14 rounded-md object-cover">
                            <h3 class="text-lg font-medium text-white">${elem.name}</h3>
                        </div>
                        <h6 class="text-gray-400 text-sm">--:--</h6>
                    </div>`;
    });

    audio.src = music[selectedSong].url;

    image.style.backgroundImage = `url(${music[selectedSong].img})`;
    image.onerror = function() {
        image.style.backgroundImage = `url(https://placehold.co/192x192/4a5568/e2e8f0?text=No+Image)`;
    };

    currentSongName.textContent = music[selectedSong].name;

    all_song.innerHTML = clutter;
}

mainfunction();

all_song.addEventListener("click", function(dets) {
    if (dets.target.id || dets.target.closest('.song-card')) {
        const clickedElement = dets.target.closest('.song-card') || dets.target;
        selectedSong = parseInt(clickedElement.id);
        
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;

        mainfunction();
        audio.play();
    }
});

play.addEventListener("click", function() {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;
        mainfunction();
        audio.play();
    } else {
        play.innerHTML = `<i class="ri-play-large-fill"></i>`;
        flag = 0;
        mainfunction();
        audio.pause();
    }
});

forward.addEventListener("click", function() {
    if (selectedSong < music.length - 1) {
        selectedSong++;
        mainfunction();
        audio.play();
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;
    } else {
        selectedSong = 0;
        mainfunction();
        audio.play();
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;
    }
});

backward.addEventListener("click", function() {
    if (selectedSong > 0) {
        selectedSong--;
        mainfunction();
        audio.play();
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;
    } else {
        selectedSong = music.length - 1;
        mainfunction();
        audio.play();
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1;
    }
});

audio.addEventListener('ended', function() {
    if (selectedSong < music.length - 1) {
        selectedSong++;
    } else {
        selectedSong = 0;
    }
    mainfunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    flag = 1;
});
