messagenum = 0;
gamespace = document.getElementById("gameSpace");
message = document.getElementById("message");
console.log(document.getElementById("gameSpace"));
document.getElementById("title").style.display = 'block';
messagelist = ["こんにちは。","こちらはエリアの選択画面となっております。",
"あなたが選んだ区は今後の体験に多大な影響を及ぼす可能性を有しています。",
"焦らず、しかし迅速にお決めいただくことを推奨いたします。"]
function gameStart(){
  document.getElementById("title").style.display = 'none';
  gamespace.innerHTML = '<p id="message">こんにちは</p><a id=nextmessage onclick="messagefunction()">Next</a>';
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
