const listbtn=document.querySelector('#music-opener'),
lists=document.querySelector('#play-list'),
close=document.querySelector(".la-times"),
musicName=document.querySelector('.music_name'),
musicArtist=document.querySelector('.music_artist'),
image=document.querySelector('.image-sect img'),
pause=document.querySelector('#pause'),
container=document.querySelector('.container'),
audio=document.querySelector('#audio'),
prev=document.querySelector("#prev"),
next=document.querySelector('#next'),
progressbar=document.querySelector('#bar');




let music_index=2;
window.addEventListener("load",()=>{
  loadMusic(music_index);
})

//load music function

function loadMusic(index){
  musicName.innerText = allmusic[index-1].name;
  musicArtist.innerText=allmusic[index-1].artist;
image.src="images/"+allmusic[index-1].img+".jpg"
audio.src="songs/"+allmusic[index-1].src+".mp3";
}

//lets play musicName
function plays(){
  pause.classList.remove("la-play");
  pause.classList.add("la-pause");
  audio.play()
}

function pauses(){
  pause.classList.remove("la-pause");
  pause.classList.add("la-play");
  audio.pause()
}






pause.onclick=()=>{
  const isPlaying = pause.classList.contains("la-play");
//by default it is false
if(isPlaying){plays()}else{pauses()}

}


prev.onclick=()=>{

    music_index--;
    if(music_index < 1 ){
       music_index = allmusic.length
     }
    else{
      music_index=music_index ;
    }
    loadMusic(music_index);
    plays();
}
next.onclick=()=>{
  music_index++;
  if(music_index > allmusic.length ){
     music_index = 1
   }
  else{
    music_index=music_index ;
  }
  loadMusic(music_index);
  plays();
}



//console.log(this)



//adusio speed

audio.addEventListener("timeupdate",(e)=>{
  const currenttime=e.target.currentTime,
  duration=e.target.duration;
  let progresswidth=(currenttime / duration) * 100;
  progressbar.style.width=progresswidth+"%";

    audio.addEventListener("loadeddata",()=>{
      let current=document.querySelector('#current'),
      duration=document.querySelector('#duration');
      //update allmusic
      let audioduration=audio.duration;
      let totalmin=Math.floor(audioduration / 60),
      totalsec=Math.floor(audioduration % 60);
      duration.innerText= totalmin +" : " +totalsec;

    })
    let audioduration=audio.duration;
    let totalmin=Math.floor(currenttime / 60),
    totalsec=Math.floor(currenttime % 60);
    if(totalsec < 10){
      totalsec="0"+totalsec
    }
    current.innerText= "0"+totalmin +" : " +totalsec;

})














lists.style.display="none"
listbtn.onclick=function() {
//  console.log(lists.style)
  if(lists.style.display === "none"){
    lists.style.display="block";
  }
  console.log("fd")

}

close.onclick=function(){
  if(lists.style.display !== "none"){
    lists.style.display="none"
  }
}
