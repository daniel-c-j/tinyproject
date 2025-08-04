const kaomoji = [
  "Σ(°ロ°)",
  "(＃°Д°)",
  "( • ᴖ • ｡)",
  "(≖_≖ )",
  "₍^. .^₎⟆",
  "(╹ -╹) ?",
];

export default function getRandomKaomoji() {
  return kaomoji[Math.floor(Math.random() * kaomoji.length)];
}
