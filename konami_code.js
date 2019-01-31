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
  
  // document.body.addEventListener("keydown", (e) => {
  //   const key = e.key
    
  //   idx = (codes[idx] === key) ? ++idx : 0
    
  //   if (idx === codes.length) {
  //     window.alert("Hurray!");
  //     idx = 0
  //   }
    
  // });
  
  function onKeyDownHandler(e) {
    const key = e.key 
    
    if(key === codes[index]){
      index++;
    } else {
      alert("wrong code!");
      index=0;
    }
  
  if(index===codes.length){
        alert("Yay!");
        index=0;
      }
  
  }
  
  document.body.addEventListener('keydown', onKeyDownHandler);
}

