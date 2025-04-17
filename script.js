messagenum = 0;
gamespace = document.getElementById("gameSpace");
message = document.getElementById("message");
console.log(document.getElementById("gameSpace"));
document.getElementById("title").style.display = 'block';
messagelist = ["あなたはどこにしますか?","千代田区?品川区?"]
function gameStart(){
  document.getElementById("title").style.display = 'none';
  gamespace.innerHTML = '<p id="message">こんにちは</p>';
}
function messagefunction() {
  const message = document.getElementById("message"); // 毎回取得
  if (messagenum < messagelist.length) {
    message.innerText = messagelist[messagenum];
    messagenum++;
  } else {
    message.innerText = "選択肢は以上です。";
  }
}
