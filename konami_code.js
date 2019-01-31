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

function init() {
  let index = 0;
  
  function onKeyDownHandler(e) {
    
    if(key === codes[index]){
      index++;
      if(index===codes.length){
        alert("Yay!");
        index=0;
      }
    } else {
      alert("wrong code!");
      index=0;
    }
  
  }
  
  document.body.addEventListener('keydown', onKeyDownHandler);
}

