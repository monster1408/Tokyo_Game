gamespace = document.getElementById("gameSpace")
console.log(document.getElementById("gameSpace"));
document.getElementById("title").style.display = 'block';
function gameStart(){
  document.getElementById("title").style.display = 'none';
  gamespace.innerHTML = "<p message>a</p>";

}
