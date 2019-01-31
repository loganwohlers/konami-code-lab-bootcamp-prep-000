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
  var index=0;
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    if(codes[index] === key) {
      index++
    } else {
      window.alert("Wrong code!")
      index = 0
    }
    
    if(index === codes.length) {
      window.alert("Yay!")
      index = 0
    }
    
    // if(key === codes[index]){
    //   index++;
    //   if(index===codes.length){
    //     alert("Yay!");
    //     index=0;
    //   }
    // } else {
    //   alert("wrong code!");
    //   index=0;
    // }
  
  }
  
  document.body.addEventListener('keydown', onKeyDownHandler);
}


init();

