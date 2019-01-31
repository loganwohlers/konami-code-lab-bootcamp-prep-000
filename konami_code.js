const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

init();

var index=0;

function onKeyDownHandler(e) {
  const key = e.key;
  if(key === codes[index]){
    index++;
    if(index===codes.length){
      alert("Yay!");
      index=0;
    }
  }else{
    alert("wrong code!");
    index=0;
  }

}

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler;
}



