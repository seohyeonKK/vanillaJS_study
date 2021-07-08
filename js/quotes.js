const quotes = [
{
  quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
  author: "파울로 코엘료",
},
{
  quote: "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보나가 우리를 향해 열린 문을 보지 못하게 된다.",
  author: "헬렌 켈러",
},
{
  quote: "계단을 밟아야 계단 위에 올라설 수 있다.",
  author: "터키 속담",
},
{
  quote: "행복은 습관이다, 그것을 몸에 지녀라.",
  author: "하버드",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


