// quotes data
const QUOTES_DATA = [
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
// TP banners and logos
const TP_LOGO_DATA = [
  "./assets/svg/IntroTPGIF.gif",
  "./assets/img/TPBanner.png",
  "./assets/img/TrivenipointLogo.png",
];

// variables
let quotesCounter = 0;
const quotesLength = QUOTES_DATA.length - 1;

let bannerCounter = 0;
const bannerLength = TP_LOGO_DATA.length - 1;

let quoteInterval;
let imgInterval;

// function for moving left and right quotes
const moveQuotes = (direction) => {
  clearInterval(quoteInterval);
  quoteInterval = setInterval(() => {
    moveQuotes(true);
  }, 5000);
  if (quotesCounter < quotesLength && direction) {
    quotesCounter += 1;
    document.getElementById("quote").innerHTML = QUOTES_DATA[quotesCounter];
    return null;
  }
  if (quotesCounter === quotesLength && direction) {
    quotesCounter = 0;
    document.getElementById("quote").innerHTML = QUOTES_DATA[quotesCounter];
    return null;
  }
  if (quotesCounter === 0 && !direction) {
    quotesCounter = quotesLength;
    document.getElementById("quote").innerHTML = QUOTES_DATA[quotesCounter];
    return null;
  }
  quotesCounter -= 1;
  document.getElementById("quote").innerHTML = QUOTES_DATA[quotesCounter];
  return null;
};
// function for moving left and right for img or banners
const moveImage = (direction) => {
  clearInterval(imgInterval);
  imgInterval = setInterval(() => {
    moveImage(true);
  }, 9000);
  if (bannerCounter < bannerLength && direction) {
    bannerCounter += 1;
    document.getElementById("logos-banners").src = TP_LOGO_DATA[bannerCounter];
    return null;
  }
  if (bannerCounter === bannerLength && direction) {
    bannerCounter = 0;
    document.getElementById("logos-banners").src = TP_LOGO_DATA[bannerCounter];
    return null;
  }
  if (bannerCounter === 0 && !direction) {
    bannerCounter = bannerLength;
    document.getElementById("logos-banners").src = TP_LOGO_DATA[bannerCounter];
    return null;
  }
  bannerCounter -= 1;
  document.getElementById("logos-banners").src = TP_LOGO_DATA[bannerCounter];
  return null;
};

// function for creating auto slide effect
const createInterval = () => {
  quoteInterval = setInterval(() => {
    moveQuotes(true);
  }, 5000);
  imgInterval = setInterval(() => {
    moveImage(true);
  }, 9000);
};

const showSliderData = () => {
  document.getElementById("quote").innerHTML = QUOTES_DATA[quotesCounter];
  document.getElementById("logos-banners").src = TP_LOGO_DATA[bannerCounter];
  createInterval();
};
