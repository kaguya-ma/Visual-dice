function rollDice() {
  let result = Math.floor(Math.random() * 6) + 1
  console.log(result)
  if (result === 1) {
    document.querySelector("img").setAttribute("src", "images/one.png");
    document.querySelector("p").innerHTML="it's one"
  }

  else if (result === 2) {
    document.querySelector("img").setAttribute("src", "images/two.png");
    document.querySelector("p").innerHTML="it's two"
  }

    else if (result === 3) {
    document.querySelector("img").setAttribute("src", "images/three.png");
    document.querySelector("p").innerHTML="it's three"
  }

    else if (result === 4) {
    document.querySelector("img").setAttribute("src", "images/four.png");
    document.querySelector("p").innerHTML="it's four"
  }

    else if (result === 5) {
    document.querySelector("img").setAttribute("src", "images/five.png");
    document.querySelector("p").innerHTML="it's five"
  }

  else {
    document.querySelector("img").setAttribute("src", "images/six.png");
    document.querySelector("p").innerHTML="it's six"
  }
  

  
  
}