const app =() => {
const song= document.querySelector('.song');
const play= document.querySelector('.play');
const outline= document.querySelector('.moving-outline circle');
const video = document.querySelector('.vid-container video');

// sounds
const sounds= document.querySelectorAll('.sound-pickerr button');
const timeDisplay= document.querySelector('.time-display');
const timeSelect= document.querySelectorAll(".time-select button")
const outlineLength= outline.getTotalLength();
console.log(outlineLength)

//Duration
let fakeDuracion = 600;
outline.style.strokeDasharray= outlineLength;
outline.style.strokeDashoffset= outlineLength;

// play sound
play.addEventListener('click', ()=> {
    checkPlaying(song)
})

// select sound
timeSelect.forEach(option => {
    option.addEventListener('click', function(){
        fakeDuracion = this.getAttribute('data-time')
        timeDisplay.textContent= `${Math.floor(fakeDuracion/60)}:${Math.floor(fakeDuracion%60)}`
    })
})

// create a function specific to stop and play the sound
const checkPlaying = song=>{
    if(song.paused){
        song.play();
        video.play();
        play.src= './svg/pause.svg'
    }else{
        song.pause();
        video.pause();
        play.src = './svg/play.svg'
    }
}
// animate the circle
song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed= fakeDuracion - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes= Math.floor(elapsed / 60);;


    // animate de circle
    let progress = outlineLength - (currentTime/ fakeDuracion) * outlineLength
    outline.style.strokeDashoffset = progress;
    // animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if(currentTime >= fakeDuracion){
        song.pause();
        song.currentTime=0;
        play.src = './svg/play.svg'
        video.pause();
    }
}



};


app()