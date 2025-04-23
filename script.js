const tokyoWards = [
  { id: 0, name: "千代田区", kana: "ちよだく", area: 11.66, population: 66683, description: "皇居を中心に行政機関が集まる、政治と歴史の中心地。" },
  { id: 1, name: "中央区", kana: "ちゅうおうく", area: 10.21, population: 171299, description: "銀座や築地など、商業と食文化が融合するエリア。" },
  { id: 2, name: "港区", kana: "みなとく", area: 20.37, population: 262865, description: "六本木・青山などおしゃれで国際色豊かな街。" },
  { id: 3, name: "新宿区", kana: "しんじゅくく", area: 18.23, population: 345371, description: "高層ビルと歓楽街、行政もある多面的な区。" },
  { id: 4, name: "文京区", kana: "ぶんきょうく", area: 11.29, population: 235518, description: "大学や病院が多く、落ち着いた文教エリア。" },
  { id: 5, name: "台東区", kana: "たいとうく", area: 10.11, population: 211444, description: "浅草と上野、下町情緒と文化の融合地。" },
  { id: 6, name: "墨田区", kana: "すみだく", area: 13.77, population: 275901, description: "東京スカイツリーのある、歴史と未来のまち。" },
  { id: 7, name: "江東区", kana: "こうとうく", area: 40.16, population: 525569, description: "ウォーターフロント開発が進む湾岸エリア。" },
  { id: 8, name: "品川区", kana: "しながわく", area: 22.84, population: 410127, description: "新幹線も通る、ビジネスと住宅が混在する区。" },
  { id: 9, name: "目黒区", kana: "めぐろく", area: 14.67, population: 289301, description: "落ち着いた住宅街とおしゃれな街並み。" },
  { id: 10, name: "大田区", kana: "おおたく", area: 59.46, population: 748081, description: "東京で一番広い区。羽田空港もここ。" },
  { id: 11, name: "世田谷区", kana: "せたがやく", area: 58.08, population: 943664, description: "住宅街が広がる、東京屈指のベッドタウン。" },
  { id: 12, name: "渋谷区", kana: "しぶやく", area: 15.11, population: 244249, description: "若者文化の発信地。IT企業も多い。" },
  { id: 13, name: "中野区", kana: "なかのく", area: 15.59, population: 338970, description: "オタク文化と住宅地が混ざる多様な街。" },
  { id: 14, name: "杉並区", kana: "すぎなみく", area: 34.02, population: 580620, description: "高円寺や荻窪など、サブカルと落ち着きの街並み。" },
  { id: 15, name: "豊島区", kana: "としまく", area: 13.01, population: 308717, description: "池袋を中心にした商業と交通の要所。" },
  { id: 16, name: "北区", kana: "きたく", area: 20.59, population: 353483, description: "赤羽などの下町エリアと落ち着いた住宅地。" },
  { id: 17, name: "荒川区", kana: "あらかわく", area: 10.20, population: 217827, description: "町工場や住宅地が広がるコンパクトな区。" },
  { id: 18, name: "板橋区", kana: "いたばしく", area: 32.22, population: 584483, description: "東京北西部、住宅街と商店街がバランスよく存在。" },
  { id: 19, name: "練馬区", kana: "ねりまく", area: 48.08, population: 751057, description: "農地も残る広い住宅エリア。アニメも有名。" },
  { id: 20, name: "足立区", kana: "あだちく", area: 53.25, population: 695924, description: "下町文化が色濃く残る、北東部の大きな区。" },
  { id: 21, name: "葛飾区", kana: "かつしかく", area: 34.80, population: 453379, description: "寅さんやこち亀の舞台。人情味のある街。" },
  { id: 22, name: "江戸川区", kana: "えどがわく", area: 49.90, population: 706652, description: "家族連れに人気。自然と住宅地が共存。" }
];

messagenum = 0;
gamespace = document.getElementById("gameMessage");
message = document.getElementById("message");
console.log(document.getElementById("gameMessage"));
document.getElementById("title").style.display = 'block';
messagelist = ["こちらはエリアの選択画面となっております。",
"あなたが選んだ区は今後の体験に多大な影響を及ぼす可能性を有しています。",
"焦らず、しかし迅速にお決めいただくことを推奨いたします。"]
let formlist = "";

for (let i = 0; i < 5; i++) {
  const radio = `
    <label>
      <input type="radio" name="ward" value="${tokyoWards[i].name}">
      ${tokyoWards[i].name}
    </label><br>
  `;
  formlist += radio;
}

document.getElementById("input23").innerHTML = formlist;
function gameStart(){
  document.getElementById("title").style.display = 'none';
  gamespace.innerHTML = '<div class="box"><p id="message">こんにちは。</p><a id=nextmessage onclick="messagefunction()">Next</a></div>';
}
function messagefunction() {
  const message = document.getElementById("message");
  if (messagenum < messagelist.length) {
    message.innerText = messagelist[messagenum];
    messagenum++;
  } else {
    message.innerText = "選択肢は以上です。";
  }
}
console.log(tokyoWards[0].name);
console.log(tokyoWards[0].population);
