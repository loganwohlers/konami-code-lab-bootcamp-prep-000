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
  var index=0;
  document.body.addEventListener('keydown', onKeyDownHandler);
}

init();

