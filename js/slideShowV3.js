let count = 1;
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let nowPlaying = false;
let timer;

const MIN = 1;
const MAX = 19;
function left(){
  count--;
  let url;
  if(count < MIN){
    count = MAX;
    thumbnailsElement.children[0].classList.remove("selected");
  }else{
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if(count < 10){
      url = src +"0"+count + ".jpg";

  }else{
      url = src +count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected");
}
function right(){
count++;
let url;
  if(count > MAX){
    count = MIN;
    thumbnailsElement.children[MAX-1].classList.remove("selected");
  }else{
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if(count < 10){

      url = src +"0"+count + ".jpg";

  }else{
      url = src +count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected");
}
function play(){
  if(nowPlaying == false){
    nowPlaying = true;
    autoPlay();
  }
}
function autoPlay(){
  right();
  timer = setTimeout(
    autoPlay
  ,1000)
}
function stop(){
  clearTimeout(timer);
  nowPlaying = false;
}
function reset(){
  stop();
  // if(count > MAX){
  //   count = MIN;
  //   thumbnailsElement.children[MAX-1].classList.remove("selected");
  // }else{
  //   thumbnailsElement.children[count-2].classList.remove("selected");
  // }
  thumbnailsElement.children[count-1].classList.remove("selected");
  thumbnailsElement.children[0].classList.add("selected");
  mainElement.setAttribute('src', src+"01.jpg");

  count = 1;
}
