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
  let idx = 0;
  
  document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
    idx = (codes[idx] === key) ? ++idx : 0
    
    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
    
  });
  
  // function onKeyDownHandler(e) {
    
  //   if(key === codes[index]){
  //     index++;
  //     if(index===codes.length){
  //       alert("Yay!");
  //       index=0;
  //     }
  //   } else {
  //     alert("wrong code!");
  //     index=0;
  //   }
  
  // }
  
  // document.body.addEventListener('keydown', onKeyDownHandler);
}

