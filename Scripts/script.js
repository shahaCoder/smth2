// JQUERY КОД ДЛЯ СВАЙПЕРА
$(function() {
        $('.slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3500,
            pauseOnHover: true, 
            arrows: true,
            prevArrow: $('.arrow-prew'),
            nextArrow: $('.arrow-next'),
            fade: true,
        });
});
// PAGES
const HomePage = document.querySelector('#HomePage')
const HomePage2 = document.querySelector('#HomePage2')
const playlistPage = document.querySelector('#playlist-page')
const playlistPage2 = document.querySelector('#playlist-page2')
const settingsPage = document.querySelector('#settings_page')
const settingsPage2 = document.querySelector('#settings_page2')
// BLOCKS
const playlists = document.querySelector('.playlist-content')
const swiperBlock = document.querySelector('.swiper-block')
const catalogContent = document.querySelector('.catalog-content')
const settings = document.querySelector('.settings-page')
let player = document.querySelector('.music-play-playlist'),
      playerBoxPlaylist = document.querySelector('.playerPlaylist')
      playContPlaylist = document.querySelector('.play-cont-playlist'),
      pausePlaylist = document.querySelector('.pause-music-playlist'),
      playerSongPlaylist = document.querySelector('.player-song-name-playlist'),
      playerSingerPlaylist = document.querySelector('.player-singer-name-playlist'),
      progressBarPlaylist = document.querySelector('.progress-playlist'),
      progressContPlaylist = document.querySelector('.progress-container-playlist'),
      repeatTrackPlaylist = document.querySelector('.repeat-track-playlist'),
      nextTrackPlaylist = document.querySelector('.next-track-playlist'),
      prevTrackPlaylist = document.querySelector('.prev-track-playlist'),
      startTextPlaylist = document.querySelector('.start-playlist'),
      endTextPlaylist = document.querySelector('.end-playlist'),
      repeatedTrackPlaylist = document.querySelector('.repeated-track-playlist'),
      audio2 = document.querySelector('.audio2'),
      btns = document.querySelector('.btns')
// axios и reload       
const playlistsArr = 'http://localhost:3001/Playlists'      
const songUrl = 'http://localhost:3001/Alltracks',
 place1 = document.querySelector('.random-songs-reload'),
 place2 = document.querySelector('.liked-songs-reload'),
 place3 = document.querySelector('.playlist-reload'),
 place4 = document.querySelector('.playlist-reload2'),
 place22 = document.querySelector('.random-songs-reload2'),
 place33 = document.querySelector('.liked-songs-reload2'),
 place44 = document.querySelector('.resently-listened-reload'),
 placeSongs = document.querySelector('#likedList')
 placeSongs2 = document.querySelector('#likedList2')
 let play = document.querySelector('.music-play'),
      playerContainer = document.querySelector('.player')
      playCont = document.querySelector('.play-cont'),
      audio = document.querySelector('.audio'),
      pause = document.querySelector('.pause-music'),
      playerSong = document.querySelector('.player-song-name'),
      playerSinger = document.querySelector('.player-singer-name'),
      progressBar = document.querySelector('.progress'),
      progressCont = document.querySelector('.progress-container'),
      progressCont22 = document.querySelector('.progress-cont22'),
      progressBar22 = document.querySelector('.progress-bar2'),
      repeatTrack = document.querySelector('.repeat-track'),
      nextTrack = document.querySelector('.next-track'),
      prevTrack = document.querySelector('.prev-track'),
      startText = document.querySelector('.start'),
      endText = document.querySelector('.end'),
      repeatedTrack = document.querySelector('.repeated-track'),
      createPlaylist = document.querySelector('.create-plailist'),
      playlistsName = document.querySelector('.playlistsName'),
      addPlaylist = document.querySelector('.addPlaylist'),
      PLaylistForm = document.forms.playlist,
      ModalContainer = document.querySelector('.modal-playlists-window_container'),
      playlistWindow = document.querySelector('.modal-playlists-window'),
      closeWindow = document.querySelector('.close-window'),
      contBox = document.querySelector('.cont-box'),
      searchInp = document.querySelector('#header-inp'),
      inpList = document.querySelector('.inp-list'),
      randomImg = document.querySelector('.random-img'),
      randomActive = document.querySelector('.random-active'),
      likedSongsNavbar = document.querySelector('#liked-songs-id'),
      likedSongsNavbar2 = document.querySelector('#liked-songs-id2'),
      lkdpage = document.querySelector('#liked-songs-page-block'),
      likedPage = document.querySelector('.liked-page'),
      playlistNavbar = document.querySelector('.playlist-navbar'),
      playlistNavbar2 = document.querySelector('.playlist-navbar2')
// Перемещение по сайту(навигация)      

// 
HomePage2.onclick = () => {
    swiperBlock.style.display = 'block'
    catalogContent.style.display = 'flex'
    playlists.style.display = 'none'
    settings.style.display = 'none'
    playlistPage2.classList.remove('active')
    settingsPage2.classList.remove('active')
    HomePage2.classList.add('active')
    playerBoxPlaylist.classList.add('playerPlaylist2')
    playerContainer.classList.remove('playerPlaylist2')
    likedSongsNavbar.classList.remove('active')
    likedPage.style.display = 'none'
}
playlistPage2.onclick = () => {
    swiperBlock.style.display = 'none'
    catalogContent.style.display = 'none'
    settings.style.display = 'none'
    playlists.style.display = 'flex'
    playlistPage2.classList.add('active')
    HomePage2.classList.remove('active')
    settingsPage2.classList.remove('active')
    playerBoxPlaylist.classList.remove('playerPlaylist2')
    playerContainer.classList.add('playerPlaylist2')
    likedPage.style.display = 'none'
    likedSongsNavbar.classList.remove('active')
}
settingsPage2.onclick = () => {
    swiperBlock.style.display = 'none'
    catalogContent.style.display = 'none'
    playlists.style.display = 'none'
    settings.style.display = 'block'
    playlistPage2.classList.remove('active')
    settingsPage2.classList.add('active')
    HomePage2.classList.remove('active')
    likedPage.style.display = 'none'
    likedSongsNavbar.classList.remove('active')
}
likedSongsNavbar2.onclick = () => {
    swiperBlock.style.display = 'none'
    catalogContent.style.display = 'none'
    settings.style.display = 'none'
    playlists.style.display = 'none'
    playlistPage.classList.remove('active')
    likedSongsNavbar2.classList.add('active')
    HomePage2.classList.remove('active')
    settingsPage2.classList.remove('active')
    playerBoxPlaylist.classList.remove('playerPlaylist2')
    playerContainer.classList.add('playerPlaylist2')
    likedPage.style.display = 'block'
    lkdpage.append(songList)
}
// Функции настроек сайта
const premiumBtn = document.querySelector('.premium-switch')
const sliderDotBtn = document.querySelector('.dot-slider')
const userStatus = document.querySelector('.user_status')
premiumBtn.onclick = () => {
    if(sliderDotBtn.classList.contains('toggle-btn-active') && premiumBtn.classList.contains('toggle-btn-color')){
        sliderDotBtn.classList.remove('toggle-btn-active')
          premiumBtn.classList.remove('toggle-btn-color')
    } else{
        sliderDotBtn.classList.add('toggle-btn-active')
        premiumBtn.classList.add('toggle-btn-color')
    }
}
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.inp-list') === null){
        inpList.style.display = 'none';
    }
});
const saveSettingsChanges = document.querySelector('.save-btn')
const inputName = document.querySelector('.change-name')
const userName2 = document.querySelector('.user__name2')
const nickName = 'http://localhost:3001/NickName'
const userPlace = document.querySelector('.user-info')
const text = document.querySelector('.user__name')
const contentWrapper = document.querySelector('.content')
const search2 = document.querySelector('.search-icon'),
      inputSeparately = document.querySelector('.input-separately'),
      content2 = document.querySelector('.content'),
      inpList2 = document.querySelector('.inp-list2'),
      searchInp2 = document.querySelector('#new-inp'),
      mobilePlayerVersion = document.querySelector('.mobile-player-version')
      originAside = document.querySelector('#origin-aside')
      swiperText = document.querySelectorAll('.premium-color-text')
      swiperArrows = document.querySelectorAll('.arrow-next-premium')
      leftHeaderInp = document.querySelector('.left-header-inp')
      namePr = document.querySelector('#name-premium-text')
axios.get(nickName)
.then(res => {
    if(res.status === 200 || res.status === 201){
        changeUserName(res.data, userPlace)
    }  
})
function changeUserName(array, place) {
    for (const i of array) {
        // create
        const premiumUser = document.createElement('p')
        // class adding
        premiumUser.classList.add('user_status')
        // append
        place.append(premiumUser)
        saveSettingsChanges.onclick = (event) => {
            event.preventDefault()
            localStorage.setItem('userName', JSON.stringify(inputName.value))
            if(sliderDotBtn.classList.contains('toggle-btn-active') && premiumBtn.classList.contains('toggle-btn-color')){
                axios.patch(nickName + '/' + i.id,{
                    UserType: "Premium user",
                    Premium: true
                })
            } else{
                axios.patch(nickName + '/' + i.id,{
                    UserType: "Free user",
                    Premium: false
                })
            }
        }
        if(i.Premium === true){
            premiumUser.innerHTML = 'Premium user'
            originAside.style.background = 'linear-gradient(180deg, #55241B,black, black,black)'
            contentWrapper.style.background = 'linear-gradient(180deg, #55241B,black, black,black)'
            sliderDotBtn.classList.add('toggle-btn-active')
            premiumBtn.classList.add('toggle-btn-color')
            swiperText.forEach(y => {
                y.classList.add('premium-color-text2')
            })
            swiperArrows.forEach(y => {
                y.style.background = '#ee6f57'
            })
            leftHeaderInp.style.background = '#74473f'
            HomePage.classList.add('active-premium2')
            HomePage.classList.remove('active')
            playlistPage.onclick = () => {
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                settings.style.display = 'none'
                playlists.style.display = 'flex'
                playlistPage.classList.add('active-premium2')
                HomePage.classList.remove('active-premium2')
                settingsPage.classList.remove('active-premium2')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.add('playerPlaylist2')
                likedPage.style.display = 'none'
                likedSongsNavbar.classList.remove('active-premium2')
            }
            HomePage.onclick = () => {
                swiperBlock.style.display = 'block'
                catalogContent.style.display = 'flex'
                playlists.style.display = 'none'
                settings.style.display = 'none'
                playlistPage.classList.remove('active-premium2')
                settingsPage.classList.remove('active-premium2')
                HomePage.classList.add('active-premium2')
                playerBoxPlaylist.classList.add('playerPlaylist2')
                playerContainer.classList.remove('playerPlaylist2')
                likedSongsNavbar.classList.remove('active-premium2')
                likedPage.style.display = 'none'
            }
            settingsPage.onclick = () => {
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                playlists.style.display = 'none'
                settings.style.display = 'block'
                playlistPage.classList.remove('active-premium2')
                settingsPage.classList.add('active-premium2')
                HomePage.classList.remove('active-premium2')
                likedPage.style.display = 'none'
                likedSongsNavbar.classList.remove('active-premium2')
            }
            likedSongsNavbar.onclick = () => {
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                settings.style.display = 'none'
                playlists.style.display = 'none'
                playlistPage.classList.remove('active-premium2')
                likedSongsNavbar.classList.add('active-premium2')
                HomePage.classList.remove('active-premium2')
                settingsPage.classList.remove('active-premium2')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.add('playerPlaylist2')
                likedPage.style.display = 'block'
                lkdpage.append(songList)
            }

        } else{
            swiperText.forEach(y => {
                y.classList.remove('premium-color-text2')
            })
            premiumUser.innerHTML = 'Free user'
            sliderDotBtn.classList.remove('toggle-btn-active') 
               premiumBtn.classList.remove('toggle-btn-color')

               playlistPage.onclick = () => {
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                settings.style.display = 'none'
                playlists.style.display = 'flex'
                playlistPage.classList.add('active')
                HomePage.classList.remove('active')
                settingsPage.classList.remove('active')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.add('playerPlaylist2')
                likedPage.style.display = 'none'
                likedSongsNavbar.classList.remove('active')
            }
            HomePage.onclick = () => {
                swiperBlock.style.display = 'block'
                catalogContent.style.display = 'flex'
                playlists.style.display = 'none'
                settings.style.display = 'none'
                playlistPage.classList.remove('active')
                settingsPage.classList.remove('active')
                HomePage.classList.add('active')
                playerBoxPlaylist.classList.add('playerPlaylist2')
                playerContainer.classList.remove('playerPlaylist2')
                likedSongsNavbar.classList.remove('active')
                likedPage.style.display = 'none'
            }
            settingsPage.onclick = () => {
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                playlists.style.display = 'none'
                settings.style.display = 'block'
                playlistPage.classList.remove('active')
                settingsPage.classList.add('active')
                HomePage.classList.remove('active')
                likedPage.style.display = 'none'
                likedSongsNavbar.classList.remove('active')
            }
            likedSongsNavbar.onclick = () => {
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                settings.style.display = 'none'
                playlists.style.display = 'none'
                playlistPage.classList.remove('active')
                likedSongsNavbar.classList.add('active')
                HomePage.classList.remove('active')
                settingsPage.classList.remove('active')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.add('playerPlaylist2')
                likedPage.style.display = 'block'
                lkdpage.append(songList)
            }
        }
    }
}
let localname = localStorage.getItem('userName')
let getLocalName = JSON.parse(localname)
text.innerHTML = getLocalName
userName2.innerHTML = getLocalName
inputName.value = getLocalName
// КОД ОТРИСОВКИ МАССИВОВ
axios.get(songUrl)
    .then(response => {
      if(response.status === 200 || response.data === 201){ 
        reload2(response.data, place44)
        reload(response.data, place1)
        likedSongsReload(response.data, place2)
        likedSongsReload(response.data, place33)  
        likedSongsReload2(response.data, lkdpage)
         console.log(response.data);
         let Arrdata = response.data
        inpList.onmousemove = () => {
            inpList.setAttribute('tabindex', '1')
            inpList.focus()
        }
        inpList.onblur = () => {
             inpList.style.display = 'none'
         }
         if(searchInp.value === null){
             inpList.style.display = 'none'
         }
         searchInp.onkeyup = () => {
            inpList.style.display = 'block'
            let filtered = Arrdata.filter(i => {
                let value = searchInp.value.trim().toLowerCase()
                let name = i.SongName.toLowerCase()
                let singername = i.SingerName.toLowerCase()
                    if(name.includes(value)){
                        return i
                    } else if(singername.includes(value)){
                        return i
                    }
            })
            searchReload(filtered,inpList)
        }
         searchInp2.onkeyup = () => {
            inpList2.style.display = 'block'
            let filtered = Arrdata.filter(i => {
                let value = searchInp2.value.trim().toLowerCase()
                let name = i.SongName.toLowerCase()
                let singername = i.SingerName.toLowerCase()
                    if(name.includes(value)){
                        return i
                    } else if(singername.includes(value)){
                        return i
                    }
            })
            searchReload(filtered,inpList2)
        }
        place2.onclick = () => {
            playerBoxPlaylist.classList.remove('playerPlaylist2')
            playerContainer.classList.add('playerPlaylist2')
            audio.pause()
        }
        place1.onclick = () => {
            playerBoxPlaylist.classList.add('playerPlaylist2')
            playerContainer.classList.remove('playerPlaylist2')
        }
        place44.onclick = () => {
            playerBoxPlaylist.classList.add('playerPlaylist2')
            playerContainer.classList.remove('playerPlaylist2')
        }
      }
    })  
    axios.get(playlistsArr)
      .then(response => {
        if(response.status === 200 || response.status === 201){
            playlistReload(response.data, place3)
            showPlaylistsToAdd(response.data, playlistNavbar)
            showPlaylistsToAdd(response.data, playlistNavbar2)
        }
      })
      let miniplayerImg = document.querySelector('.mini-player-img')
                let singersNames = document.querySelector('.singers-names')
                let songNameMini = document.querySelector('.song-text-mini-player')
                let likedImageMini = document.querySelector('.liked-img-mini')
                let repeatMini = document.querySelector('.repeat-mini')
                let repeatedMini = document.querySelector('.repeated-mini')
                let playMini = document.querySelector('.play-mini')
                let pauseMini = document.querySelector('.pause-mini')
                let audioMini = document.querySelector('.audio-mini')
                let roll = document.querySelector('.roll')
                let prevMini = document.querySelector('.prev-mini')
                let nextMini = document.querySelector('.next-mini')
                let randomMini = document.querySelector('.random-mini')
                let randomMiniActive = document.querySelector('.random-mini-active')
                let miniBtn = document.querySelector('.mobile-player-btn')
                miniBtn.onclick = () => {
                    contentWrapper.style.background = 'linear-gradient(#003026, #000000)'
                    audioMini.pause()
                    mobilePlayerVersion.style.display = 'none'
                    swiperBlock.style.display = 'block'
                    catalogContent.style.display = 'flex'
                    playlists.style.display = 'flex'
                    settings.style.display = 'block'
                    playlistPage.classList.add('active')
                    settingsPage.classList.add('active')
                    HomePage.classList.add('active')
                    playerBoxPlaylist.classList.add('playerPlaylist2')
                    playerContainer.classList.add('playerPlaylist2')
                    likedSongsNavbar.classList.add('active')
                    likedPage.style.display = 'flex'
                    playerBoxPlaylist.style.display = 'block'
                    playerContainer.style.display = 'block'
                }
let plName = document.querySelector('.pl-name')
let songIndex = 0
let playlistBox = document.createElement('div')
        let leftbox = document.createElement('p')
        let rightBox = document.createElement('p')
        playlistBox.classList.add('playlist__box')
function reload(arr, place) {
    function shuffle(ar){
        let j, temp;
        for(let i = ar.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = ar[j];
            ar[j] = ar[i];
            ar[i] = temp;
        }
        return ar;
    }
    let randomIndex = Math.floor(Math.random() * arr.length)
    for (let item of shuffle(arr)) {
        let songList = document.createElement('div')
        let leftListBlock = document.createElement('div')
        let wrap = document.createElement('div')
        let img = document.createElement('img')
        let singerName = document.createElement('div')
        let ptext2 = document.createElement('p')
        let ptext3 = document.createElement('p')
        let rightListBlock = document.createElement('div')
        let ptext4 = document.createElement('p')
        let likeimg = document.createElement('img')
        let dots = document.createElement('img')
        const modalWindow = document.createElement('div')
        const likeModalText = document.createElement('p')
        const playlistModalText = document.createElement('p')
        const listenModalText = document.createElement('p')
        const linehr = document.createElement('hr')
        const linehr2 = document.createElement('hr')
        
        // CLASS ADDING
        songList.classList.add('song-list')
        leftListBlock.classList.add('left-list-block')
        img.classList.add('singer-img2')
        singerName.classList.add('singer-name')
        rightListBlock.classList.add('right-song-time')
        likeimg.classList.add('like-img')
        dots.classList.add('dots-img')
        wrap.classList.add('wrap-block')
        modalWindow.classList.add('modal-window')
        linehr.classList.add('modal-line')
        linehr2.classList.add('modal-line')
        // ptext.classList.add('ptext')
        // +ptext++
        ptext2.innerHTML = item.SingerName
        ptext3.innerHTML = item.SongName
        ptext4.innerHTML = item.songTime
        likeModalText.innerHTML = 'LIKE'
        playlistModalText.innerHTML = 'ADD TO PLAYLIST'
        listenModalText.innerHTML = 'LISTEN NOW'
        img.src = item.img
        // likeimg.src = item.likeImg
        dots.src = item.dots
        // APPEND
        rightListBlock.append(likeimg,ptext4)
        singerName.append(ptext2, ptext3)
        leftListBlock.append(img, singerName)
        wrap.append(leftListBlock, rightListBlock)
        modalWindow.append(likeModalText, linehr, playlistModalText,linehr2,listenModalText)
        songList.append(wrap, dots, modalWindow)
        if(arr.indexOf(item) <= 9){
            place.append(songList)
        }
        if(item.liked === true){
            likeimg.src = '../Icons/liked.svg'
            ptext2.style.color = '#00ecbe'
            likeModalText.innerHTML = 'DISLIKE'
        } else {
            likeimg.src = item.likeImg
        }   
        likeimg.onclick = () => {
            if(item.liked === true){
                axios.patch(songUrl + '/' + item.id,{
                    liked: false
                })
            } else{
                axios.patch(songUrl + '/' + item.id,{
                    liked: true
                })
            }
        }
        likeModalText.onclick = () => {
            if(item.liked === true){
                axios.patch(songUrl + '/' + item.id,{
                    liked: false
                })
            } else{
                axios.patch(songUrl + '/' + item.id,{
                    liked: true
                })
            }
        }
        listenModalText.onclick = () => {
            playMusic()
            axios.patch(songUrl + '/' + item.id,{
                listened: true
            })
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic()
                } else {
                    playMusic()
                    axios.patch(songUrl + '/' + item.id,{
                        listened: true
                    })
                }
            }
        }
        randomImg.onclick = () => {
            randomImg.style.display = 'none'
            randomActive.style.display = 'block'
            randomActive.classList.add('block2')
            audio.onended = () => {
                let idx = arr[randomIndex]
            audio.src = `../audio/${idx.SongName}.mp3`
            audio.play()
            playerSong.innerHTML = idx.SongName
            playerSinger.innerHTML = idx.SingerName
            changeImg()
            function pauseMusic2() {
                audio.src = `../audio/${idx.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
            }
        }
        randomActive.onclick = () => {
            randomImg.style.display = 'block'
            randomActive.style.display = 'none'
            randomActive.classList.remove('block2')
        }
        audio.onended = () => {
            songIndex++
            let indexed = arr[songIndex]
            console.log(indexed)
            audio.src = `../audio/${indexed.SongName}.mp3`
            audio.play()
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            changeImg()
            function pauseMusic2() {
                audio.src = `../audio/${indexed.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
        }
        dots.onclick = () => {
            modalWindow.style.display = 'block'
        }   
         document.addEventListener('mousedown', function(e){
             if(e.target.closest('.modal-window') === null){
                 modalWindow.style.display = 'none';
             }
         });
         document.addEventListener('mousedown', function(e){
            if(e.target.closest('.modal-playlists-window') === null){
                playlistWindow.style.display = 'none';
                ModalContainer.style.display = 'none';
            }
        });
        img.onclick = () => {
            let width = document.documentElement.clientWidth
            if(width <= 520){
                mobilePlayerVersion.style.display = 'block'
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                playlists.style.display = 'none'
                settings.style.display = 'none'
                playlistPage.classList.remove('active')
                settingsPage.classList.remove('active')
                HomePage.classList.remove('active')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.remove('playerPlaylist2')
                likedSongsNavbar.classList.remove('active')
                likedPage.style.display = 'none'
                playerBoxPlaylist.style.display = 'none'
                playerContainer.style.display = 'none'
                contentWrapper.style.background = 'black'
                // 
                miniplayerImg.src = item.img
                singersNames.innerHTML = item.SingerName
                songNameMini.innerHTML = item.SongName
                likedImageMini.src = item.likeImg
                audioMini.src = `../audio/${item.SongName}.mp3`
                repeatMini.onclick = () => {
                    repeatedMini.classList.remove('repeated-track')
                    repeatMini.classList.add('repeated-track')
                    audioMini.loop = true
            }
            repeatedMini.onclick = () => {
                repeatMini.classList.remove('repeated-track')
                repeatedMini.classList.add('repeated-track')
                audioMini.loop = false
            }
            playMusic2()

            function playMusic2() {
                // audioMini.src = `../audio/${item.SongName}.mp3`
                audioMini.play()
                changeImgMini()
                songIndex = arr.indexOf(item)
                console.log(songIndex);
            }
            function pauseMusic2() {
                // audioMini.src = `../audio/${item.SongName}.mp3`
                audioMini.pause()
                changeImgMini2()
            }
            function changeImgMini() {
                roll.style.padding = '3px'
                playMini.classList.add('noneall')
                pauseMini.classList.remove('noneall')
            }
            function changeImgMini2() {
                roll.style.padding = '10px 12px'
                pauseMini.classList.add('noneall')
                playMini.classList.remove('noneall')
            }
            roll.onclick = () => {
                if(playMini.classList.contains('noneall')){
                    pauseMusic2()
                } else {
                    playMusic2()
                    axios.patch(songUrl + '/' + item.id,{
                        listened: true
                    })
                }
            }
            nextMini.onclick = () => {
                songIndex++
                let indexed = arr[songIndex]
                console.log(indexed)
                audioMini.src = `../audio/${indexed.SongName}.mp3`
                songNameMini.innerHTML = indexed.SongName
                singersNames.innerHTML = indexed.SingerName
                miniplayerImg.src = indexed.img
                changeImgMini()
                audioMini.play()
                function pauseMusicMini2() {
                    // audio.src = `../audio/${indexed.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusicMini2()
                    } else {
                        audioMini.play()
                        changeImgMini() 
                    }
                }
            }
            prevMini.onclick = () => {
                songIndex--
                let indexed = arr[songIndex]
                console.log(indexed)
                audioMini.src = `../audio/${indexed.SongName}.mp3`
                songNameMini.innerHTML = indexed.SongName
                singersNames.innerHTML = indexed.SingerName
                miniplayerImg.src = indexed.img
                changeImgMini()
                audioMini.play()
                function pauseMusicMini2() {
                    // audio.src = `../audio/${indexed.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusicMini2()
                    } else {
                        audioMini.play()
                        changeImgMini() 
                    }
                }
            }
            
            randomMini.onclick = () => {
                randomMini.style.display = 'none'
                randomMiniActive.style.display = 'block'
                // randomMiniActive.classList.add('block2')
                audioMini.onended = () => {
                    let idx = arr[randomIndex]
                audioMini.src = `../audio/${idx.SongName}.mp3`
                audioMini.play()
                songNameMini.innerHTML = idx.SongName
                singersNames.innerHTML = idx.SingerName
                miniplayerImg.src = idx.img
                changeImgMini()
                function pauseMusic2() {
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusic2()
                    } else {
                        playMusic2()
                        axios.patch(songUrl + '/' + item.id,{
                            listened: true
                        })
                    }
                }
                }
            }
            randomMiniActive.onclick = () => {
                randomMini.style.display = 'block'
                randomMiniActive.style.display = 'none'
                randomMiniActive.classList.remove('block2')
            }

            audioMini.onended = () => {
                songIndex++
                let indexed = arr[songIndex]
                console.log(indexed)
                audioMini.src = `../audio/${indexed.SongName}.mp3`
                songNameMini.innerHTML = indexed.SongName
                singersNames.innerHTML = indexed.SingerName
                miniplayerImg.src = indexed.img
                changeImgMini()
                audioMini.play()
                function pauseMusicMini2() {
                    // audio.src = `../audio/${indexed.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusicMini2()
                    } else {
                        audioMini.play()
                        changeImgMini() 
                    }
                }
            }
            

            } else {
                playMusic()
                axios.patch(songUrl + '/' + item.id,{
                    listened: true
                })
                playCont.onclick = () => {
                    if(play.classList.contains('pause-music')){
                        pauseMusic()
                    } else {
                        playMusic()
                        axios.patch(songUrl + '/' + item.id,{
                            listened: true
                        })
                    }
                }
            }
        }
        function playMusic() {
            audio.src = `../audio/${item.SongName}.mp3`
            playerSong.innerHTML = item.SongName
            playerSinger.innerHTML = item.SingerName
            audio.play()
            changeImg() 
            songIndex = arr.indexOf(item)
            console.log(songIndex);
        }
        repeatTrack.onclick = () => {
                repeatedTrack.classList.remove('repeated-track')
                repeatTrack.classList.add('repeated-track')
                audio.loop = true
        }
        repeatedTrack.onclick = () => {
            repeatTrack.classList.remove('repeated-track')
            repeatedTrack.classList.add('repeated-track')
                audio.loop = false
        }
        function pauseMusic() {
            // audio.src = `../audio/${item.SongName}.mp3`
            audio.pause()
            changeImg2()
            btns.prepend(dots)
        }
        nextTrack.onclick = () => {
            songIndex++
            let indexed = arr[songIndex]
            console.log(indexed)
            audio.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            changeImg()
            audio.play()
            function pauseMusic2() {
                audio.src = `../audio/${indexed.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
        }
        prevTrack.onclick = () => {
            songIndex--
            let indexed = arr[songIndex]
            console.log(indexed)
            audio.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            audio.play()
            changeImg()
            function pauseMusic2() {
                audio.src = `../audio/${indexed.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
        }
        playlistModalText.onclick = () => {
            openModal()
            axios.get(playlistsArr)
      .then(response => {
          if(response.status === 200 || response.status === 201){
              showPlaylistsToAdd(response.data, contBox)
        }
      })
      function showPlaylistsToAdd(arr, place) {
        let left = document.createElement('p')
            left.innerHTML = arr[0].name
        // for (const i of arr[0].songs) {
            let overAllCont = document.createElement('div')
            let right = document.createElement('p')
            right.innerHTML = arr[0].songs.length
            
            overAllCont.classList.add('OverAllCont')
            left.classList.add('left-sng')
    
            overAllCont.append(left,right)
            place.append(overAllCont)
            overAllCont.onclick = () => {
                axios.put(playlistsArr + '/1', {
                    songs: [item]
                })
            }
        // }
    }
            let AddPlaylist = 
            {
                songs: [item]
            }
                PLaylistForm.onsubmit = (e) => {
                    e.preventDefault()
                
                    let fr = new FormData(PLaylistForm)
                    fr.forEach((value, key) => {
                        AddPlaylist[key] = value
                    })
                    axios.post(playlistsArr, AddPlaylist)
                    closeModal()
                    // console.log(playlistsName.value);
                }
        }

    }

}
function showPlaylistsToAdd(arr, place) {
    let left = document.createElement('p')
        left.innerHTML = arr[0].name
        let overAllCont = document.createElement('div')
        let right = document.createElement('p')
        right.innerHTML = arr[0].songs.length
        
        overAllCont.classList.add('OverAllCont')
        left.classList.add('left-sng')

        overAllCont.append(left,right)
        place.append(overAllCont)
        overAllCont.onclick = () => {
            
        }
        overAllCont.onclick = () => {
            if(namePr.classList.contains('premium-color-text')){
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                settings.style.display = 'none'
                playlists.style.display = 'flex'
                playlistPage.classList.add('active-premium2')
                HomePage.classList.remove('active-premium2')
                settingsPage.classList.remove('active-premium2')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.add('playerPlaylist2')
                likedPage.style.display = 'none'
                likedSongsNavbar.classList.remove('active-premium2')
            } else{
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                settings.style.display = 'none'
                playlists.style.display = 'flex'
                playlistPage.classList.remove('active-premium2')
                playlistPage.classList.add('active')
                HomePage.classList.remove('active')
                settingsPage.classList.remove('active')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.add('playerPlaylist2')
                likedPage.style.display = 'none'
                likedSongsNavbar.classList.remove('active')
            }
        }
}
function reload2(arr, place) { 
    let randomIndex = Math.floor(Math.random() * arr.length)
    for (let item of arr) {
        let songList = document.createElement('div')
        let leftListBlock = document.createElement('div')
        let wrap = document.createElement('div')
        let img = document.createElement('img')
        let singerName = document.createElement('div')
        let ptext2 = document.createElement('p')
        let ptext3 = document.createElement('p')
        let rightListBlock = document.createElement('div')
        let ptext4 = document.createElement('p')
        let likeimg = document.createElement('img')
        let dots = document.createElement('img')
        const modalWindow = document.createElement('div')
        const likeModalText = document.createElement('p')
        const playlistModalText = document.createElement('p')
        const listenModalText = document.createElement('p')
        const linehr = document.createElement('hr')
        const linehr2 = document.createElement('hr')
        
        // CLASS ADDING
        songList.classList.add('song-list')
        leftListBlock.classList.add('left-list-block')
        img.classList.add('singer-img2')
        singerName.classList.add('singer-name')
        rightListBlock.classList.add('right-song-time')
        likeimg.classList.add('like-img')
        dots.classList.add('dots-img')
        wrap.classList.add('wrap-block')
        modalWindow.classList.add('modal-window2')
        linehr.classList.add('modal-line')
        linehr2.classList.add('modal-line')
        // ptext.classList.add('ptext')
        // +ptext++
        ptext2.innerHTML = item.SingerName
        ptext3.innerHTML = item.SongName
        ptext4.innerHTML = item.songTime
        likeModalText.innerHTML = 'LIKE'
        playlistModalText.innerHTML = 'ADD TO PLAYLIST'
        listenModalText.innerHTML = 'LISTEN NOW'
        img.src = item.img
        // likeimg.src = item.likeImg
        dots.src = item.dots
        // APPEND
        rightListBlock.append(likeimg,ptext4)
        singerName.append(ptext2, ptext3)
        leftListBlock.append(img, singerName)
        wrap.append(leftListBlock, rightListBlock)
        modalWindow.append(likeModalText, linehr, playlistModalText,linehr2,listenModalText)
        songList.append(wrap, dots, modalWindow)
        if(item.listened === true && arr.indexOf(item) <= 9){
            place.append(songList)
        }
        if(item.liked === true){
            likeimg.src = '../Icons/liked.svg'
            ptext2.style.color = '#00ecbe'
            likeModalText.innerHTML = 'DISLIKE'
        } else {
            likeimg.src = item.likeImg
        }   
        likeimg.onclick = () => {
            if(item.liked === true){
                axios.patch(songUrl + '/' + item.id,{
                    liked: false
                })
            } else{
                axios.patch(songUrl + '/' + item.id,{
                    liked: true
                })
            }
        }
        likeModalText.onclick = () => {
            if(item.liked === true){
                axios.patch(songUrl + '/' + item.id,{
                    liked: false
                })
            } else{
                axios.patch(songUrl + '/' + item.id,{
                    liked: true
                })
            }
        }
        listenModalText.onclick = () => {
            playMusic()
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic()
                } else {
                    playMusic()
                }
            }
        }
        dots.onclick = () => {
            modalWindow.style.display = 'block'
        }
        img.onclick = () => {
            let width = document.documentElement.clientWidth
            if(width <= 520){
                mobilePlayerVersion.style.display = 'block'
                swiperBlock.style.display = 'none'
                catalogContent.style.display = 'none'
                playlists.style.display = 'none'
                settings.style.display = 'none'
                playlistPage.classList.remove('active')
                settingsPage.classList.remove('active')
                HomePage.classList.remove('active')
                playerBoxPlaylist.classList.remove('playerPlaylist2')
                playerContainer.classList.remove('playerPlaylist2')
                likedSongsNavbar.classList.remove('active')
                likedPage.style.display = 'none'
                playerBoxPlaylist.style.display = 'none'
                playerContainer.style.display = 'none'
                contentWrapper.style.background = 'black'
                // 
                miniplayerImg.src = item.img
                singersNames.innerHTML = item.SingerName
                songNameMini.innerHTML = item.SongName
                likedImageMini.src = item.likeImg
                audioMini.src = `../audio/${item.SongName}.mp3`
                repeatMini.onclick = () => {
                    repeatedMini.classList.remove('repeated-track')
                    repeatMini.classList.add('repeated-track')
                    audioMini.loop = true
            }
            repeatedMini.onclick = () => {
                repeatMini.classList.remove('repeated-track')
                repeatedMini.classList.add('repeated-track')
                audioMini.loop = false
            }
            playMusic2()

            function playMusic2() {
                // audioMini.src = `../audio/${item.SongName}.mp3`
                audioMini.play()
                changeImgMini()
                songIndex = arr.indexOf(item)
                console.log(songIndex);
            }
            function pauseMusic2() {
                // audioMini.src = `../audio/${item.SongName}.mp3`
                audioMini.pause()
                changeImgMini2()
            }
            function changeImgMini() {
                roll.style.padding = '3px'
                playMini.classList.add('noneall')
                pauseMini.classList.remove('noneall')
            }
            function changeImgMini2() {
                roll.style.padding = '10px 12px'
                pauseMini.classList.add('noneall')
                playMini.classList.remove('noneall')
            }
            roll.onclick = () => {
                if(playMini.classList.contains('noneall')){
                    pauseMusic2()
                } else {
                    playMusic2()
                    axios.patch(songUrl + '/' + item.id,{
                        listened: true
                    })
                }
            }
            nextMini.onclick = () => {
                songIndex++
                let indexed = arr[songIndex]
                console.log(indexed)
                audioMini.src = `../audio/${indexed.SongName}.mp3`
                songNameMini.innerHTML = indexed.SongName
                singersNames.innerHTML = indexed.SingerName
                miniplayerImg.src = indexed.img
                changeImgMini()
                audioMini.play()
                function pauseMusicMini2() {
                    // audio.src = `../audio/${indexed.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusicMini2()
                    } else {
                        audioMini.play()
                        changeImgMini() 
                    }
                }
            }
            prevMini.onclick = () => {
                songIndex--
                let indexed = arr[songIndex]
                console.log(indexed)
                audioMini.src = `../audio/${indexed.SongName}.mp3`
                songNameMini.innerHTML = indexed.SongName
                singersNames.innerHTML = indexed.SingerName
                miniplayerImg.src = indexed.img
                changeImgMini()
                audioMini.play()
                function pauseMusicMini2() {
                    // audio.src = `../audio/${indexed.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusicMini2()
                    } else {
                        audioMini.play()
                        changeImgMini() 
                    }
                }
            }
            
            randomMini.onclick = () => {
                randomMini.style.display = 'none'
                randomMiniActive.style.display = 'block'
                // randomMiniActive.classList.add('block2')
                audioMini.onended = () => {
                    let idx = arr[randomIndex]
                audioMini.src = `../audio/${idx.SongName}.mp3`
                audioMini.play()
                songNameMini.innerHTML = idx.SongName
                singersNames.innerHTML = idx.SingerName
                miniplayerImg.src = idx.img
                changeImgMini()
                function pauseMusic2() {
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusic2()
                    } else {
                        playMusic2()
                        axios.patch(songUrl + '/' + item.id,{
                            listened: true
                        })
                    }
                }
                }
            }
            randomMiniActive.onclick = () => {
                randomMini.style.display = 'block'
                randomMiniActive.style.display = 'none'
                randomMiniActive.classList.remove('block2')
            }

            audioMini.onended = () => {
                songIndex++
                let indexed = arr[songIndex]
                console.log(indexed)
                audioMini.src = `../audio/${indexed.SongName}.mp3`
                songNameMini.innerHTML = indexed.SongName
                singersNames.innerHTML = indexed.SingerName
                miniplayerImg.src = indexed.img
                changeImgMini()
                audioMini.play()
                function pauseMusicMini2() {
                    // audio.src = `../audio/${indexed.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusicMini2()
                    } else {
                        audioMini.play()
                        changeImgMini() 
                    }
                }
            }
            

            } else {
                playMusic()
                axios.patch(songUrl + '/' + item.id,{
                    listened: true
                })
                playCont.onclick = () => {
                    if(play.classList.contains('pause-music')){
                        pauseMusic()
                    } else {
                        playMusic()
                        axios.patch(songUrl + '/' + item.id,{
                            listened: true
                        })
                    }
                }
            }
        }
        document.addEventListener('mousedown', function(e){
            if(e.target.closest('.modal-window2') === null){
                modalWindow.style.display = 'none';
            }
        });
        document.addEventListener('mousedown', function(e){
            if(e.target.closest('.modal-playlists-window') === null){
                playlistWindow.style.display = 'none';
                ModalContainer.style.display = 'none';
            }
        });
        function playMusic() {
            audio.src = `../audio/${item.SongName}.mp3`
            playerSong.innerHTML = item.SongName
            playerSinger.innerHTML = item.SingerName
            audio.play()
            changeImg() 
            songIndex = arr.indexOf(item)
            console.log(songIndex);
        }
        repeatTrack.onclick = () => {
                repeatedTrack.classList.remove('repeated-track')
                repeatTrack.classList.add('repeated-track')
                audio.loop = true
        }
        repeatedTrack.onclick = () => {
            repeatTrack.classList.remove('repeated-track')
            repeatedTrack.classList.add('repeated-track')
                audio.loop = false
        }
        function pauseMusic() {
            audio.src = `../audio/${item.SongName}.mp3`
            audio.pause()
            changeImg2()
        }
        nextTrack.onclick = () => {
            songIndex++
            let indexed = arr[songIndex]
            console.log(indexed)
            audio.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            changeImg()
            audio.play()
            function pauseMusic2() {
                audio.src = `../audio/${indexed.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
        }
        prevTrack.onclick = () => {
            songIndex--
            let indexed = arr[songIndex]
            console.log(indexed)
            audio.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            audio.play()
            changeImg()
            function pauseMusic2() {
                audio.src = `../audio/${indexed.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
        }
        audio.addEventListener('ended', changeImg2)
        audio.onended = () => {
            changeImg2()
            songIndex++
            let indexed = arr[songIndex]
            console.log(indexed)
            audio.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            audio.play()
            if(audio.play()){
                changeImg()
            }
            function pauseMusic2() {
                audio.src = `../audio/${indexed.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
        }
        playlistModalText.onclick = () => {
            openModal()
            axios.get(playlistsArr)
      .then(response => {
          if(response.status === 200 || response.status === 201){
              showPlaylistsToAdd(response.data, contBox)
        }
      })
      function showPlaylistsToAdd(arr, place) {
        let left = document.createElement('p')
            left.innerHTML = arr[0].name
            let overAllCont = document.createElement('div')
            let right = document.createElement('p')
            right.innerHTML = arr[0].songs.length
            
            overAllCont.classList.add('OverAllCont')
            left.classList.add('left-sng')
    
            overAllCont.append(left,right)
            place.append(overAllCont)
    }
            let AddPlaylist = 
            {
                songs: [item]
            }
                PLaylistForm.onsubmit = (e) => {
                    e.preventDefault()
                
                    let fr = new FormData(PLaylistForm)
                    fr.forEach((value, key) => {
                        AddPlaylist[key] = value
                    })
                    axios.post(playlistsArr, AddPlaylist)
                    // console.log(playlistsName.value);
                }
        }
    }
}
function playlistReload(arr, place) {
    plName.innerHTML = arr[0].name
    for (let item of arr[0].songs) {
        let songList = document.createElement('div')
        let leftListBlock = document.createElement('div')
        let wrap = document.createElement('div')
        let img = document.createElement('img')
        let singerName = document.createElement('div')
        let ptext2 = document.createElement('p')
        let ptext3 = document.createElement('p')
        let rightListBlock = document.createElement('div')
        let ptext4 = document.createElement('p')
        let likeimg = document.createElement('img')
        let dots = document.createElement('img')
        const modalWindow = document.createElement('div')
        const likeModalText = document.createElement('p')
        const playlistModalText = document.createElement('p')
        const listenModalText = document.createElement('p')
        const linehr = document.createElement('hr')
        const linehr2 = document.createElement('hr')
        // CLASS ADDING
        songList.classList.add('song-list')
        leftListBlock.classList.add('left-list-block')
        img.classList.add('singer-img2')
        singerName.classList.add('singer-name')
        rightListBlock.classList.add('right-song-time')
        likeimg.classList.add('like-img')
        dots.classList.add('dots-img')
        wrap.classList.add('wrap-block')
        modalWindow.classList.add('modal-window')
        linehr.classList.add('modal-line')
        linehr2.classList.add('modal-line')
        // ptext.classList.add('ptext')
        // +ptext++
        ptext2.innerHTML = item.SingerName
        ptext3.innerHTML = item.SongName
        ptext4.innerHTML = item.songTime
        likeModalText.innerHTML = 'LIKE'
        playlistModalText.innerHTML = 'ADD TO PLAYLIST'
        listenModalText.innerHTML = 'LISTEN NOW'
        img.src = item.img
        // likeimg.src = item.likeImg
        dots.src = item.dots
        // APPEND
        rightListBlock.append(likeimg,ptext4)
        singerName.append(ptext2, ptext3)
        leftListBlock.append(img, singerName)
        wrap.append(leftListBlock, rightListBlock)
        modalWindow.append(likeModalText, linehr, playlistModalText,linehr2,listenModalText)
        songList.append(wrap, dots, modalWindow)
        if(arr.indexOf(item) <= 9){
            place.append(songList)
        }
        document.addEventListener('mousedown', function(e){
            if(e.target.closest('.modal-window') === null){
                modalWindow.style.display = 'none';
            }
        });
        if(item.liked === true){
            likeimg.src = '../Icons/liked.svg'
            ptext2.style.color = '#00ecbe'
            likeModalText.innerHTML = 'DISLIKE'
        } else {
            likeimg.src = item.likeImg
        }   
        likeimg.onclick = () => {
            if(item.liked === true){
                axios.patch(songUrl + '/' + item.id,{
                    liked: false
                })
            } else{
                axios.patch(songUrl + '/' + item.id,{
                    liked: true
                })
            }
        }
        document.addEventListener('mousedown', function(e){
            if(e.target.closest('.modal-playlists-window') === null){
                playlistWindow.style.display = 'none';
                ModalContainer.style.display = 'none';
            }
        });
        likeModalText.onclick = () => {
            if(item.liked === true){
                axios.patch(songUrl + '/' + item.id,{
                    liked: false
                })
            } else{
                axios.patch(songUrl + '/' + item.id,{
                    liked: true
                })
            }
        }
        listenModalText.onclick = () => {
            playMusic()
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic()
                } else {
                    playMusic()
                }
            }
        }
        dots.onclick = () => {
            modalWindow.style.display = 'block'
        }
        img.onclick = () => {
            playMusic()
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic()
                } else {
                    playMusic()
                }
            }
        }
        function playMusic() {
            audio2.src = `../audio/${item.SongName}.mp3`
            playerSongPlaylist.innerHTML = item.SongName
            playerSingerPlaylist.innerHTML = item.SingerName
            audio2.play()
            imageChangePlaylist()
            songIndex = arr.indexOf(item)
            console.log(songIndex);
        }
        repeatedTrackPlaylist.onclick = () => {
            repeatedTrackPlaylist.classList.remove('repeated-track-playlist')
            repeatedTrackPlaylist.classList.add('repeated-track-playlist')
                audio2.loop = true
        }
        repeatedTrackPlaylist.onclick = () => {
            repeatTrack.classList.remove('repeated-track-playlist')
            repeatedTrack.classList.add('repeated-track')
                audio2.loop = false
        }
        function pauseMusic() {
            audio2.src = `../audio/${item.SongName}.mp3`
            audio2.pause()
            imageChangePlaylist2()
        }
        nextTrackPlaylist.onclick = () => {
            songIndex++
            let indexed = arr[songIndex]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSongPlaylist.innerHTML = indexed.SongName
            playerSingerPlaylist.innerHTML = indexed.SingerName
            imageChangePlaylist()
            audio2.play()
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                imageChangePlaylist2()
            }
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    imageChangePlaylist()
                }
            }
        }
        prevTrackPlaylist.onclick = () => {
            songIndex--
            let indexed = arr[songIndex]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSongPlaylist.innerHTML = indexed.SongName
            playerSingerPlaylist.innerHTML = indexed.SingerName
            audio2.play()
            imageChangePlaylist()
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                imageChangePlaylist2()
            }
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    imageChangePlaylist()
                }
            }
        }
        audio2.onended = () => {
            changeImg2()
            songIndex++
            let indexed = arr[songIndex]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            audio2.play()
            if(audio2.play()){
                changeImg()
            }
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(player.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    changeImg() 
                }
            }
        }
    }
}
let massiv = []
let songIndex2 = 0;
const asideWrap = document.querySelector('.aside-wrap'),
      aside = document.querySelector('.aside'),
      burger_menu = document.querySelector('.burger_menu'),
      burger_menu2 = document.querySelector('.burger_menu2'),
      close_menu = document.querySelector('.close-menu')
    function likedSongsReload(array2, place) {
        let randomIndex = Math.floor(Math.random() * array2.length)
        for (const item of array2) {
            let songList = document.createElement('div')
            let leftListBlock = document.createElement('div')
            let wrap = document.createElement('div')
            // let ptext = document.createElement('p')
            let img = document.createElement('img')
            let singerName = document.createElement('div')
            let ptext2 = document.createElement('p')
            let ptext3 = document.createElement('p')
            let rightListBlock = document.createElement('div')
            let ptext4 = document.createElement('p')
            let likeimg = document.createElement('img')
            let dots = document.createElement('img')
            const modalWindow = document.createElement('div')
            const likeModalText = document.createElement('p')
            const playlistModalText = document.createElement('p')
            const listenModalText = document.createElement('p')
            const linehr = document.createElement('hr')
            const linehr2 = document.createElement('hr')
            // CLASS ADDING
            songList.classList.add('song-list')
            leftListBlock.classList.add('left-list-block')
            img.classList.add('singer-img2')
            singerName.classList.add('singer-name')
            rightListBlock.classList.add('right-song-time')
            likeimg.classList.add('like-img')
            dots.classList.add('dots-img')
            wrap.classList.add('wrap-block')
            modalWindow.classList.add('modal-window')
            linehr.classList.add('modal-line')
            linehr2.classList.add('modal-line')
            // ptext.classList.add('ptext')
            // ptext.innerHTML = item.id
            ptext2.innerHTML = item.SingerName
            ptext3.innerHTML = item.SongName
            ptext4.innerHTML = item.songTime
            likeModalText.innerHTML = 'LIKE'
            playlistModalText.innerHTML = 'ADD TO PLAYLIST'
            listenModalText.innerHTML = 'LISTEN NOW'
            img.src = item.img
            // likeimg.src = item.likeImg
            dots.src = item.dots
            // APPEND
            rightListBlock.append(likeimg,ptext4)
            singerName.append(ptext2, ptext3)
            leftListBlock.append(img, singerName)
            wrap.append(leftListBlock, rightListBlock)
            modalWindow.append(likeModalText, linehr, playlistModalText,linehr2,listenModalText)
            songList.append(wrap, dots, modalWindow)
            document.addEventListener('mousedown', function(e){
                if(e.target.closest('.modal-window') === null){
                    modalWindow.style.display = 'none';
                }
            });
            likeModalText.onclick = () => {
                if(item.liked === true){
                    axios.patch(songUrl + '/' + item.id,{
                        liked: false
                    })
                } else{
                    axios.patch(songUrl + '/' + item.id,{
                        liked: true
                    })
                }
            }
            document.addEventListener('mousedown', function(e){
                if(e.target.closest('.modal-playlists-window') === null){
                    playlistWindow.style.display = 'none';
                    ModalContainer.style.display = 'none';
                }
            });
            dots.onclick = () => {
                modalWindow.style.display = 'block'
            }
            likeimg.onclick = () => {
                if(item.liked === true){
                    axios.patch(songUrl + '/' + item.id,{
                        liked: false
                    })
                } else{
                    axios.patch(songUrl + '/' + item.id,{
                        liked: true
                    })
                }
            }
            if(item.liked === true){
                ptext2.style.color = '#00ecbe'
                likeimg.src = '../Icons/liked.svg'
                likeModalText.innerHTML = 'DISLIKE'
                massiv.push(item)
                console.log(massiv);
                let li = document.createElement('li'),
                p = document.createElement('p'),
                span = document.createElement('span')
                // add classes
                p.innerHTML = item.SongName
                span.innerHTML = item.songTime
                // 
                li.append(p, span)
                li.onclick = () => {
                    playerBoxPlaylist.style.display = 'block'
                   playerContainer.style.display = 'none'
                    playMusic()
                    playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic()
                } else {
                    playMusic()
                }
            }
                }
                let li2 = document.createElement('li'),
                p2 = document.createElement('p'),
                span2 = document.createElement('span')
                // add classes
                p2.innerHTML = item.SongName
                span2.innerHTML = item.songTime
                // 
                li2.append(p2, span2)
                li2.onclick = () => {
                    playerBoxPlaylist.style.display = 'block'
                   playerContainer.style.display = 'none'
                    playMusic()
                    playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic()
                } else {
                    playMusic()
                }
            }
                }
                if(massiv.indexOf(item) <= 9){
                    place.append(songList)
                    placeSongs.append(li)
                        placeSongs2.append(li2)
                }  
            } else{
                likeimg.src = item.likeImg
            }   
            listenModalText.onclick = () => {
                playMusic()
                axios.patch(songUrl + '/' + item.id,{
                    listened: true
                })
                playContPlaylist.onclick = () => {
                    if(player.classList.contains('pause-music')){
                        pauseMusic()
                    } else {
                        playMusic()
                        axios.patch(songUrl + '/' + item.id,{
                            listened: true
                        })
                    }
                }
            }
            img.onclick = () => {
                let width = document.documentElement.clientWidth
                if(width <= 520){
                    mobilePlayerVersion.style.display = 'block'
                    swiperBlock.style.display = 'none'
                    catalogContent.style.display = 'none'
                    playlists.style.display = 'none'
                    settings.style.display = 'none'
                    playlistPage.classList.remove('active')
                    settingsPage.classList.remove('active')
                    HomePage.classList.remove('active')
                    playerBoxPlaylist.classList.remove('playerPlaylist2')
                    playerContainer.classList.remove('playerPlaylist2')
                    likedSongsNavbar.classList.remove('active')
                    likedPage.style.display = 'none'
                    playerBoxPlaylist.style.display = 'none'
                    playerContainer.style.display = 'none'
                    contentWrapper.style.background = 'black'
                    // 
                    miniplayerImg.src = item.img
                    singersNames.innerHTML = item.SingerName
                    songNameMini.innerHTML = item.SongName
                    likedImageMini.src = item.likeImg
                    audioMini.src = `../audio/${item.SongName}.mp3`
                    repeatMini.onclick = () => {
                        repeatedMini.classList.remove('repeated-track')
                        repeatMini.classList.add('repeated-track')
                        audioMini.loop = true
                }
                repeatedMini.onclick = () => {
                    repeatMini.classList.remove('repeated-track')
                    repeatedMini.classList.add('repeated-track')
                    audioMini.loop = false
                }
                playMusic2()
    
                function playMusic2() {
                    // audioMini.src = `../audio/${item.SongName}.mp3`
                    audioMini.play()
                    changeImgMini()
                    songIndex = arr.indexOf(item)
                    console.log(songIndex);
                }
                function pauseMusic2() {
                    // audioMini.src = `../audio/${item.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                function changeImgMini() {
                    roll.style.padding = '3px'
                    playMini.classList.add('noneall')
                    pauseMini.classList.remove('noneall')
                }
                function changeImgMini2() {
                    roll.style.padding = '10px 12px'
                    pauseMini.classList.add('noneall')
                    playMini.classList.remove('noneall')
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusic2()
                    } else {
                        playMusic2()
                        axios.patch(songUrl + '/' + item.id,{
                            listened: true
                        })
                    }
                }
                nextMini.onclick = () => {
                    songIndex++
                    let indexed = array2[songIndex]
                    console.log(indexed)
                    audioMini.src = `../audio/${indexed.SongName}.mp3`
                    songNameMini.innerHTML = indexed.SongName
                    singersNames.innerHTML = indexed.SingerName
                    miniplayerImg.src = indexed.img
                    changeImgMini()
                    audioMini.play()
                    function pauseMusicMini2() {
                        // audio.src = `../audio/${indexed.SongName}.mp3`
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusicMini2()
                        } else {
                            audioMini.play()
                            changeImgMini() 
                        }
                    }
                }
                prevMini.onclick = () => {
                    songIndex--
                    let indexed = array2[songIndex]
                    console.log(indexed)
                    audioMini.src = `../audio/${indexed.SongName}.mp3`
                    songNameMini.innerHTML = indexed.SongName
                    singersNames.innerHTML = indexed.SingerName
                    miniplayerImg.src = indexed.img
                    changeImgMini()
                    audioMini.play()
                    function pauseMusicMini2() {
                        // audio.src = `../audio/${indexed.SongName}.mp3`
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusicMini2()
                        } else {
                            audioMini.play()
                            changeImgMini() 
                        }
                    }
                }
                
                randomMini.onclick = () => {
                    randomMini.style.display = 'none'
                    randomMiniActive.style.display = 'block'
                    // randomMiniActive.classList.add('block2')
                    audioMini.onended = () => {
                        let idx = array2[randomIndex]
                    audioMini.src = `../audio/${idx.SongName}.mp3`
                    audioMini.play()
                    songNameMini.innerHTML = idx.SongName
                    singersNames.innerHTML = idx.SingerName
                    miniplayerImg.src = idx.img
                    changeImgMini()
                    function pauseMusic2() {
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusic2()
                        } else {
                            playMusic2()
                            axios.patch(songUrl + '/' + item.id,{
                                listened: true
                            })
                        }
                    }
                    }
                }
                randomMiniActive.onclick = () => {
                    randomMini.style.display = 'block'
                    randomMiniActive.style.display = 'none'
                    randomMiniActive.classList.remove('block2')
                }
    
                audioMini.onended = () => {
                    songIndex++
                    let indexed = array2[songIndex]
                    console.log(indexed)
                    audioMini.src = `../audio/${indexed.SongName}.mp3`
                    songNameMini.innerHTML = indexed.SongName
                    singersNames.innerHTML = indexed.SingerName
                    miniplayerImg.src = indexed.img
                    changeImgMini()
                    audioMini.play()
                    function pauseMusicMini2() {
                        // audio.src = `../audio/${indexed.SongName}.mp3`
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusicMini2()
                        } else {
                            audioMini.play()
                            changeImgMini() 
                        }
                    }
                }
                
    
                } else {
                    playMusic()
                    axios.patch(songUrl + '/' + item.id,{
                        listened: true
                    })
                    playCont.onclick = () => {
                        if(play.classList.contains('pause-music')){
                            pauseMusic()
                        } else {
                            playMusic()
                            axios.patch(songUrl + '/' + item.id,{
                                listened: true
                            })
                        }
                    }
                }
            }
        function playMusic() {
            audio2.src = `../audio/${item.SongName}.mp3`
            playerSongPlaylist.innerHTML = item.SongName
            playerSingerPlaylist.innerHTML = item.SingerName
            audio2.play()
            imageChangePlaylist()
            songIndex2 = array2.indexOf(item)
            console.log(songIndex);
        }
        repeatedTrackPlaylist.onclick = () => {
            repeatedTrackPlaylist.classList.remove('repeated-track-playlist')
            repeatedTrackPlaylist.classList.add('repeated-track-playlist')
                audio2.loop = true
        }
        repeatedTrackPlaylist.onclick = () => {
            repeatTrack.classList.remove('repeated-track-playlist')
            repeatedTrack.classList.add('repeated-track')
                audio2.loop = false
        }
        function pauseMusic() {
            audio2.src = `../audio/${item.SongName}.mp3`
            audio2.pause()
            imageChangePlaylist2()
        }
        nextTrackPlaylist.onclick = () => {
            songIndex2++
            let indexed = array2[songIndex2]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSongPlaylist.innerHTML = indexed.SongName
            playerSingerPlaylist.innerHTML = indexed.SingerName
            imageChangePlaylist()
            audio2.play()
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                imageChangePlaylist2()
            }
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    imageChangePlaylist()
                }
            }
        }
        prevTrackPlaylist.onclick = () => {
            songIndex2--
            let indexed = array2[songIndex2]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSongPlaylist.innerHTML = indexed.SongName
            playerSingerPlaylist.innerHTML = indexed.SingerName
            audio2.play()
            imageChangePlaylist()
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                imageChangePlaylist2()
            }
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    imageChangePlaylist()
                }
            }
        }
        audio2.onended = () => {
            changeImg2()
            songIndex++
            let indexed = array2[songIndex]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            audio2.play()
            if(audio2.play()){
                changeImg()
            }
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(player.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    changeImg() 
                }
            }
        }
        playlistModalText.onclick = () => {
            openModal()
            axios.get(playlistsArr)
      .then(response => {
          if(response.status === 200 || response.status === 201){
              showPlaylistsToAdd(response.data, contBox)
        }
      })
      function showPlaylistsToAdd(arr, place) {
        let left = document.createElement('p')
            left.innerHTML = arr[0].name
        // for (const i of arr[0].songs) {
            let overAllCont = document.createElement('div')
            let right = document.createElement('p')
            right.innerHTML = arr[0].songs.length
            
            overAllCont.classList.add('OverAllCont')
            left.classList.add('left-sng')
    
            overAllCont.append(left,right)
            place.append(overAllCont)
            overAllCont.onclick = () => {
                axios.put(playlistsArr + '/1', {
                    songs: [item]
                })
            }
        // }
    }
            let AddPlaylist = 
            {
                songs: [item]
            }
                PLaylistForm.onsubmit = (e) => {
                    e.preventDefault()
                
                    let fr = new FormData(PLaylistForm)
                    fr.forEach((value, key) => {
                        AddPlaylist[key] = value
                    })
                    axios.post(playlistsArr, AddPlaylist)
                    closeModal()
                    // console.log(playlistsName.value);
                }
        }
        }
    }    
    function likedSongsReload2(array2, place) {
        let randomIndex = Math.floor(Math.random() * array2.length)
        for (const item of array2) {
            let songList = document.createElement('div')
            let leftListBlock = document.createElement('div')
            let wrap = document.createElement('div')
            // let ptext = document.createElement('p')
            let img = document.createElement('img')
            let singerName = document.createElement('div')
            let ptext2 = document.createElement('p')
            let ptext3 = document.createElement('p')
            let rightListBlock = document.createElement('div')
            let ptext4 = document.createElement('p')
            let likeimg = document.createElement('img')
            let dots = document.createElement('img')
            const modalWindow = document.createElement('div')
            const likeModalText = document.createElement('p')
            const playlistModalText = document.createElement('p')
            const listenModalText = document.createElement('p')
            const linehr = document.createElement('hr')
            const linehr2 = document.createElement('hr')
            // CLASS ADDING
            songList.classList.add('song-list')
            leftListBlock.classList.add('left-list-block')
            img.classList.add('singer-img2')
            singerName.classList.add('singer-name')
            rightListBlock.classList.add('right-song-time')
            likeimg.classList.add('like-img')
            dots.classList.add('dots-img')
            wrap.classList.add('wrap-block')
            modalWindow.classList.add('modal-window')
            linehr.classList.add('modal-line')
            linehr2.classList.add('modal-line')
            // ptext.classList.add('ptext')
            // ptext.innerHTML = item.id
            ptext2.innerHTML = item.SingerName
            ptext3.innerHTML = item.SongName
            ptext4.innerHTML = item.songTime
            likeModalText.innerHTML = 'LIKE'
            playlistModalText.innerHTML = 'ADD TO PLAYLIST'
            listenModalText.innerHTML = 'LISTEN NOW'
            img.src = item.img
            // likeimg.src = item.likeImg
            dots.src = item.dots
            // APPEND
            rightListBlock.append(likeimg,ptext4)
            singerName.append(ptext2, ptext3)
            leftListBlock.append(img, singerName)
            wrap.append(leftListBlock, rightListBlock)
            modalWindow.append(likeModalText, linehr, playlistModalText,linehr2,listenModalText)
            songList.append(wrap, dots, modalWindow)
            document.addEventListener('mousedown', function(e){
                if(e.target.closest('.modal-window') === null){
                    modalWindow.style.display = 'none';
                }
            });
            likeModalText.onclick = () => {
                if(item.liked === true){
                    axios.patch(songUrl + '/' + item.id,{
                        liked: false
                    })
                } else{
                    axios.patch(songUrl + '/' + item.id,{
                        liked: true
                    })
                }
            }
            dots.onclick = () => {
                modalWindow.style.display = 'block'
            }
            likeimg.onclick = () => {
                if(item.liked === true){
                    axios.patch(songUrl + '/' + item.id,{
                        liked: false
                    })
                } else{
                    axios.patch(songUrl + '/' + item.id,{
                        liked: true
                    })
                }
            }
            if(item.liked === true){
                ptext2.style.color = '#00ecbe'
                likeimg.src = '../Icons/liked.svg'
                likeModalText.innerHTML = 'DISLIKE'
                massiv.push(item)
                place.append(songList)
            } else{
                likeimg.src = item.likeImg
            }   
            img.onclick = () => {
                let width = document.documentElement.clientWidth
                if(width <= 520){
                    mobilePlayerVersion.style.display = 'block'
                    swiperBlock.style.display = 'none'
                    catalogContent.style.display = 'none'
                    playlists.style.display = 'none'
                    settings.style.display = 'none'
                    playlistPage.classList.remove('active')
                    settingsPage.classList.remove('active')
                    HomePage.classList.remove('active')
                    playerBoxPlaylist.classList.remove('playerPlaylist2')
                    playerContainer.classList.remove('playerPlaylist2')
                    likedSongsNavbar.classList.remove('active')
                    likedPage.style.display = 'none'
                    playerBoxPlaylist.style.display = 'none'
                    playerContainer.style.display = 'none'
                    contentWrapper.style.background = 'black'
                    // 
                    miniplayerImg.src = item.img
                    singersNames.innerHTML = item.SingerName
                    songNameMini.innerHTML = item.SongName
                    likedImageMini.src = item.likeImg
                    audioMini.src = `../audio/${item.SongName}.mp3`
                    repeatMini.onclick = () => {
                        repeatedMini.classList.remove('repeated-track')
                        repeatMini.classList.add('repeated-track')
                        audioMini.loop = true
                }
                repeatedMini.onclick = () => {
                    repeatMini.classList.remove('repeated-track')
                    repeatedMini.classList.add('repeated-track')
                    audioMini.loop = false
                }
                playMusic2()
    
                function playMusic2() {
                    // audioMini.src = `../audio/${item.SongName}.mp3`
                    audioMini.play()
                    changeImgMini()
                    songIndex = arr.indexOf(item)
                    console.log(songIndex);
                }
                function pauseMusic2() {
                    // audioMini.src = `../audio/${item.SongName}.mp3`
                    audioMini.pause()
                    changeImgMini2()
                }
                function changeImgMini() {
                    roll.style.padding = '3px'
                    playMini.classList.add('noneall')
                    pauseMini.classList.remove('noneall')
                }
                function changeImgMini2() {
                    roll.style.padding = '10px 12px'
                    pauseMini.classList.add('noneall')
                    playMini.classList.remove('noneall')
                }
                roll.onclick = () => {
                    if(playMini.classList.contains('noneall')){
                        pauseMusic2()
                    } else {
                        playMusic2()
                        axios.patch(songUrl + '/' + item.id,{
                            listened: true
                        })
                    }
                }
                nextMini.onclick = () => {
                    songIndex++
                    let indexed = array2[songIndex]
                    console.log(indexed)
                    audioMini.src = `../audio/${indexed.SongName}.mp3`
                    songNameMini.innerHTML = indexed.SongName
                    singersNames.innerHTML = indexed.SingerName
                    miniplayerImg.src = indexed.img
                    changeImgMini()
                    audioMini.play()
                    function pauseMusicMini2() {
                        // audio.src = `../audio/${indexed.SongName}.mp3`
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusicMini2()
                        } else {
                            audioMini.play()
                            changeImgMini() 
                        }
                    }
                }
                prevMini.onclick = () => {
                    songIndex--
                    let indexed = array2[songIndex]
                    console.log(indexed)
                    audioMini.src = `../audio/${indexed.SongName}.mp3`
                    songNameMini.innerHTML = indexed.SongName
                    singersNames.innerHTML = indexed.SingerName
                    miniplayerImg.src = indexed.img
                    changeImgMini()
                    audioMini.play()
                    function pauseMusicMini2() {
                        // audio.src = `../audio/${indexed.SongName}.mp3`
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusicMini2()
                        } else {
                            audioMini.play()
                            changeImgMini() 
                        }
                    }
                }
                
                randomMini.onclick = () => {
                    randomMini.style.display = 'none'
                    randomMiniActive.style.display = 'block'
                    // randomMiniActive.classList.add('block2')
                    audioMini.onended = () => {
                        let idx = array2[randomIndex]
                    audioMini.src = `../audio/${idx.SongName}.mp3`
                    audioMini.play()
                    songNameMini.innerHTML = idx.SongName
                    singersNames.innerHTML = idx.SingerName
                    miniplayerImg.src = idx.img
                    changeImgMini()
                    function pauseMusic2() {
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusic2()
                        } else {
                            playMusic2()
                            axios.patch(songUrl + '/' + item.id,{
                                listened: true
                            })
                        }
                    }
                    }
                }
                randomMiniActive.onclick = () => {
                    randomMini.style.display = 'block'
                    randomMiniActive.style.display = 'none'
                    randomMiniActive.classList.remove('block2')
                }
    
                audioMini.onended = () => {
                    songIndex++
                    let indexed = array2[songIndex]
                    console.log(indexed)
                    audioMini.src = `../audio/${indexed.SongName}.mp3`
                    songNameMini.innerHTML = indexed.SongName
                    singersNames.innerHTML = indexed.SingerName
                    miniplayerImg.src = indexed.img
                    changeImgMini()
                    audioMini.play()
                    function pauseMusicMini2() {
                        // audio.src = `../audio/${indexed.SongName}.mp3`
                        audioMini.pause()
                        changeImgMini2()
                    }
                    roll.onclick = () => {
                        if(playMini.classList.contains('noneall')){
                            pauseMusicMini2()
                        } else {
                            audioMini.play()
                            changeImgMini() 
                        }
                    }
                }
                
    
                } else {
                    playMusic()
                    axios.patch(songUrl + '/' + item.id,{
                        listened: true
                    })
                    playCont.onclick = () => {
                        if(play.classList.contains('pause-music')){
                            pauseMusic()
                        } else {
                            playMusic()
                            axios.patch(songUrl + '/' + item.id,{
                                listened: true
                            })
                        }
                    }
                }
            }
        document.addEventListener('mousedown', function(e){
            if(e.target.closest('.modal-playlists-window') === null){
                playlistWindow.style.display = 'none';
                ModalContainer.style.display = 'none';
            }
        });
        function playMusic() {
            audio2.src = `../audio/${item.SongName}.mp3`
            playerSongPlaylist.innerHTML = item.SongName
            playerSingerPlaylist.innerHTML = item.SingerName
            audio2.play()
            imageChangePlaylist()
            songIndex2 = array2.indexOf(item)
            console.log(songIndex);
        }
        repeatedTrackPlaylist.onclick = () => {
            repeatedTrackPlaylist.classList.remove('repeated-track-playlist')
            repeatedTrackPlaylist.classList.add('repeated-track-playlist')
                audio2.loop = true
        }
        repeatedTrackPlaylist.onclick = () => {
            repeatTrack.classList.remove('repeated-track-playlist')
            repeatedTrack.classList.add('repeated-track')
                audio2.loop = false
        }
        function pauseMusic() {
            audio2.src = `../audio/${item.SongName}.mp3`
            audio2.pause()
            imageChangePlaylist2()
        }
        nextTrackPlaylist.onclick = () => {
            songIndex2++
            let indexed = array2[songIndex2]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSongPlaylist.innerHTML = indexed.SongName
            playerSingerPlaylist.innerHTML = indexed.SingerName
            imageChangePlaylist()
            audio2.play()
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                imageChangePlaylist2()
            }
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    imageChangePlaylist()
                }
            }
        }
        prevTrackPlaylist.onclick = () => {
            songIndex2--
            let indexed = array2[songIndex2]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSongPlaylist.innerHTML = indexed.SongName
            playerSingerPlaylist.innerHTML = indexed.SingerName
            audio2.play()
            imageChangePlaylist()
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                imageChangePlaylist2()
            }
            playContPlaylist.onclick = () => {
                if(player.classList.contains('pause-music-playlist')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    imageChangePlaylist()
                }
            }
        }
        audio2.onended = () => {
            changeImg2()
            songIndex++
            let indexed = array2[songIndex]
            console.log(indexed)
            audio2.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            audio2.play()
            if(audio2.play()){
                changeImg()
            }
            function pauseMusic2() {
                audio2.src = `../audio/${indexed.SongName}.mp3`
                audio2.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(player.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio2.play()
                    changeImg() 
                }
            }
        }
    
        }
    }    
// create song player
function changeImg() {
    playCont.style.padding = '3px'
    play.classList.add('pause-music')
    pause.classList.remove('pause-music')
}
function changeImg2() {
    playCont.style.padding = '10px 12px'
    pause.classList.add('pause-music')
    play.classList.remove('pause-music')
}
function progressBarMusic(e) {
    const {duration, currentTime} = e.srcElement
    const progresspercent = (currentTime / duration) * 100
    progressBar.style.width = `${progresspercent}%`
    startText.innerHTML = formatTime(currentTime)
    endText.innerHTML = formatTime(duration)
}
function progressBarMusicPlaylist(e) {
    const {duration, currentTime} = e.srcElement
    const progresspercent = (currentTime / duration) * 100
    progressBarPlaylist.style.width = `${progresspercent}%`
    startTextPlaylist.innerHTML = formatTime(currentTime)
    endTextPlaylist.innerHTML = formatTime(duration)
}
function progressBarMusicMini(e) {
    const {duration, currentTime} = e.srcElement
    const progresspercent = (currentTime / duration) * 100
    progressBar22.style.width = `${progresspercent}%`
}
audio.addEventListener('timeupdate', progressBarMusic)
audio2.addEventListener('timeupdate', progressBarMusicPlaylist)
audioMini.addEventListener('timeupdate', progressBarMusicMini)
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}
function setProgress2(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio2.duration
    audio2.currentTime = (clickX / width) * duration
}
function setProgress3(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audioMini.duration
    audioMini.currentTime = (clickX / width) * duration
}
progressCont.addEventListener('click', setProgress)
progressContPlaylist.addEventListener('click', setProgress2)
progressCont22.addEventListener('click', setProgress3)
// PLAYLISTS
function imageChangePlaylist() {
    playContPlaylist.style.padding = '3px'
    player.classList.add('pause-music-playlist')
    pausePlaylist.classList.remove('pause-music-playlist')
}
function imageChangePlaylist2() {
    playContPlaylist.style.padding = '10px 12px'
    pausePlaylist.classList.add('pause-music-playlist')
    player.classList.remove('pause-music-playlist')
}
// Next song
function nextSong() {
    songIndex++
}
function formatTime(time) {
    let min = Math.floor(time / 60)
    if(min < 10){
        min = `0${min}`
    }
    let second = Math.floor(time % 60)
    if(second < 10){
        sec = `0${second}`
    }
    return `${min} : ${second}`
}
// playlists
createPlaylist.onclick = () => {
    playlistsName.style.display = 'block'
    addPlaylist.style.display = 'block'
    createPlaylist.style.display = 'none'
}
ModalContainer.onmousemove = () => {
    playlistWindow.setAttribute('tabindex', '1')
    playlistWindow.focus()
}
closeWindow.onclick = () => {
    closeModal()
}
function openModal() {
    ModalContainer.style.display = 'block'
    playlistWindow.style.display = 'block'
    setTimeout(() => {
        ModalContainer.style.opacity = '1'
        playlistWindow.style.opacity = '1'
        playlistWindow.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 100);
}
function closeModal() {
    ModalContainer.style.opacity = '0'
    playlistWindow.style.opacity = '0'
    setTimeout(() => {
        ModalContainer.style.display = 'none'
        playlistWindow.style.display = 'none'
        playlistWindow.style.transform = 'translate(-50%, -50%) scale(.1)'
    }, 100);
}
let overAll = document.querySelector('.overAll')
function searchReload(arr,place) {
    place.innerHTML = ''
    for (let item of arr) {
        let overAll = document.createElement('div')
        let leftoverAll = document.createElement('div')
        let pname = document.createElement('p')
        let pname2 = document.createElement('p')
        let time = document.createElement('p')

        overAll.classList.add('overAll')
        leftoverAll.classList.add('leftoverAll')
        pname.classList.add('pname')
        time.classList.add('songTime')

        pname.innerHTML = item.SongName
        pname2.innerHTML = item.SingerName
        time.innerHTML = item.songTime

        leftoverAll.append(pname,pname2)
        overAll.append(leftoverAll, time)
        place.append(overAll)
        overAll.onclick = () => {
            playMusic()
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic()
                } else {
                    playMusic()
                }
            }
        }
        function playMusic() {
            audio.src = `../audio/${item.SongName}.mp3`
            playerSong.innerHTML = item.SongName
            playerSinger.innerHTML = item.SingerName
            audio.play()
            changeImg() 
            songIndex = arr.indexOf(item)
            console.log(songIndex);
        }
        function pauseMusic() {
            audio.src = `../audio/${item.SongName}.mp3`
            audio.pause()
            changeImg2()
        }
        audio.onended = () => {
            changeImg2()
            songIndex++
            let indexed = arr[songIndex]
            console.log(indexed)
            audio.src = `../audio/${indexed.SongName}.mp3`
            playerSong.innerHTML = indexed.SongName
            playerSinger.innerHTML = indexed.SingerName
            audio.play()
            if(audio.play()){
                changeImg()
            }
            function pauseMusic2() {
                audio.src = `../audio/${indexed.SongName}.mp3`
                audio.pause()
                changeImg2()
            }
            playCont.onclick = () => {
                if(play.classList.contains('pause-music')){
                    pauseMusic2()
                } else {
                    audio.play()
                    changeImg() 
                }
            }
        }
    }
}
// NEW ASIDE 
burger_menu.onclick = () => {
    openAside()
}
burger_menu2.onclick = () => {
    openAside()
}    
close_menu.onclick = () => {
    closeAside()
}
document.addEventListener('mousedown', function(e){
    if(e.target.closest('.aside') === null){
        closeAside()
    }
});
 function openAside() {
     aside.style.opacity = '1'
     setTimeout(() => {
        asideWrap.style.display = 'block'
        aside.style.left = '0px'
    }, 50);
 }
 function closeAside() {
    asideWrap.style.display = 'none'
    aside.style.left = '-1000px'
 }
//  Adaptation search version 
const inputSarpWrap = document.querySelector('.input-sarp-wrap')
search2.onclick = () => {
    inputSarpWrap.classList.add('block2')
    inputSeparately.style.display = 'block'
    document.addEventListener('mousedown', function(e){
        if(e.target.closest('.inp-list2') === null && e.target.closest('.new-inp2') === null){
            inputSarpWrap.classList.remove('block2')
            inputSeparately.style.display = 'none'
        }
    });
}
playerContainer.onclick = () => {
}