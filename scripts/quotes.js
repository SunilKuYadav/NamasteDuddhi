const DATA = [
  "these are some most important and  precious advices every one should read  💜🙂",
  "Take risks in your life. If you win, you can lead; if you lose, you can guide.",
  "People are not what they say but what they do; so judge them not from their words but from their actions.",
  "When someone hurts you, don't feel bad because it's a law of nature that the tree that bears the sweetest fruits gets maximum number of stones.",
  "Take whatever you can from your life because when life starts taking from you, it takes even your last breath.",
  "In this world, people will always throw stones on the path of your success. It depends on what you make from them - a wall or a bridge.",
  "Challenges make life interesting; overcoming them make life meaningful.",
  "There is no joy in victory without running the risk of defeat.",
  "A path without obstacles leads nowhere.",
  "Past is a nice place to visit but certainly not a good place to stay.",
  "You can't have a better tomorrow if you are thinking about yesterday all the time.",
  "If what you did yesterday still looks big to you, then you haven't done much today.",
  "If you don't build your dreams, someone else will hire you to build theirs.",
  "If you don't climb the mountain; you can't view the plain.",
  "Don't leave it idle - use your brain.",
  "You are not paid for having brain, you are only rewarded for using it intelligently.",
  "It is not what you don't have that limits you; it is what you have but don't know how to use.",
  "What you fail to learn might teach you a lesson.",
  "The difference between a corrupt person and an honest person is: The corrupt person has a price while the honest person has a value.",
  "If you succeed in cheating someone, don't think that the person is a fool...... Realize that the person trusted you much more than you deserved.",
  "Honesty is an expensive gift; don't expect it from cheap people.",
];

let counter = 0;
const length = DATA.length - 1;

// function for moving left and right
const move = (direction) => {
  if (counter < length && direction) {
    counter += 1;
    document.getElementById("quote").innerHTML = DATA[counter];
    return null;
  }
  if (counter === length && direction) {
    counter = 0;
    document.getElementById("quote").innerHTML = DATA[counter];
    return null;
  }
  if (counter === 0 && !direction) {
    counter = length;
    document.getElementById("quote").innerHTML = DATA[counter];
    return null;
  }
  counter -= 1;
  document.getElementById("quote").innerHTML = DATA[counter];
  return null;
};

const showQuoteData = () => {
  document.getElementById("quote").innerHTML = DATA[counter];
};
