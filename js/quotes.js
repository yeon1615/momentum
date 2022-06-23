const quotes = [
  {
    quotes: '책 없는 방은 영혼 없는 육체와 같다.',
    author: 'Marcus Tullius Cicero',
  },
  {
    quotes: '내가 세계를 알게 된 것은 책에 의해서였다.',
    author: 'Jean-Paul Sartre',
  },
  {
    quotes:
      '독서는 완성된 사람을 만들고, 담론은 재치있는 사람을 만들며, 필기는 정확한 사람을 만든다.',
    author: 'Francis Bacon',
  },
  {
    quotes:
      ' 모든 양서를 읽는 것은 지난 몇 세기 동안 걸친 가장 훌륭한 사람들과 대화 하는 것과 같다.',
    author: 'René Descartes',
  },
  {
    quotes: '책 속에는 과거의 모든 영혼이 가로누워 있다.',
    author: 'Thomas Carlyle',
  },
  {
    quotes: '독서가 정신에 미치는 영향은, 운동이 몸에 미치는 효과와 같다',
    author: 'Richard Steele',
  },
  {
    quotes:
      '내가 인생을 안 것은 사람과 접촉했기 때문이 아니라 책과 접촉했었기 때문이다. ',
    author: 'Anatole France',
  },
  {
    quotes:
      '보기 드문 지식인을 만났을 때는 그가 어떤 책을 읽는가를 물어보아야 한다.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quotes: '단 한 권의 책 밖에 읽은 적이 없는 사람을 경계하라.',
    author: 'Benjamin Disraeli',
  },
  {
    quotes:
      '당신에게 가장 필요한 책은 당신으로 하여금 가장 많이 생각하게 하는 책이다. ',
    author: 'Mark Twain',
  },
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todaysQuote = quotes[Math.trunc(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
