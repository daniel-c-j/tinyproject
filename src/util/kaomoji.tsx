const kaomoji: string[] = [
  "Σ(°ロ°)",
  "(＃°Д°)",
  "( • ᴖ • ｡)",
  "(≖_≖ )",
  "₍^. .^₎⟆",
  "(╹ -╹) ?",
];

export default function getRandomKaomoji(): string {
  return kaomoji[Math.floor(Math.random() * kaomoji.length)];
}
