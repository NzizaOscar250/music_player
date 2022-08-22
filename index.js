const listbtn=document.querySelector('#music-opener'),
lists=document.querySelector('#play-list'),
close=document.querySelector(".la-times");

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
