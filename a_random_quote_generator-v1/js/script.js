/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes =  [

  { 
    quote: `In the midst of the common, the worldly, the mundane,
    is the ineffable One. Knowing this,
    one lives happily throughout all states.
    This is the secret that only the sage knows
    and enjoys and reveals to those whose time has come
    to flower into divine understanding.`,
    from: 'white fire: second edition',
    guru: 'Mooji',
    when: '2014'
  },
  { 
    quote: `I am permanence and impermanence,
    but I am neither, absolutely.
    That which witnesses both,
    but itself is uncaused and unseen,
    That alone is. That I am.`,
    from:'white fire: second edition',
    guru: 'Mooji',
    when: '2014'
  },
  { 
    quote: `I teach you to be more conscious,
    And love will come as you become more conscious: it is a guest that comes, 
    that comes inevitably to those who are ready and prepared to receive it.`,
    from: 'Satyam Shivam Sundaram: Truth Godliness Beauty',
    guru: 'Osho',
    when: ''
  },
  { 
    quote: `A man of meditation comes to a point where there is no temptation left. Try to understand it. Temptation never comes from without: it is the repressed desire, repressed energy, repressed sex, repressed greed that creates temptation. 
    Temptation comes from within you, it has nothing to do with the without.`,
    from: 'Dang Dang Doko Dang , Talk #5',
    guru: 'Osho',
    when: ''
  },
  { 
    quote: `Whatever was the highest, sweetest, or most wonderful emotion in your life, make that the baseline. 
      Why come down from what you are capable of.`,
    from: 'Sadhguru.org',
    guru: 'Sadhguru Jaggi Vasudev',
    when: '2020 ',
    tags: 'Isha Foundation'
  },
  { 
    quote: `Out of commitment, humans can move mountains. 
      One shining example is Mahatma Gandhi, whose commitment moved millions of people across the world`,
    from: 'Sadhguru.org',
    guru: 'Sadhguru Jaggi Vasudev',
    when: '2020 '
  },
  { 
    quote: `It takes a long time-many incarnations of right action, good company, help of the guru, self-awakening, wisdom, and meditation-for man to regain his soul consciousness of immortality. To reach this state of Self-realization, 
      each man must practice meditation to transfer his consciousness from the limited body to the unlimited sphere of joy felt in meditation.`,
    from: 'Paramahansa Yogananda - Self-Realization Fellowship',
    guru: 'Paramahansa Yogananda',
    when: ''
  },
  { 
    quote: `Don't depend on death to liberate you from your imperfections. You are exactly the same after death as you were before. 
    Nothing changes; you only give up the body. If you are a thief or a liar or a cheater before death, you don't become an angel merely by dying. 
    If such were possible, then let us all go and jump in the ocean now and become angels at once! Whatever you have made of yourself thus far, 
    so will you be hereafter. And when you reincarnate, you will bring that same nature with you. 
    To change, you have to make the effort. This world is the place to do it.`,
    from: '',
    guru: 'Paramahansa Yogananda',
    when: '',
    tags: 'Self-Realization Fellowship'
  }
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr){
  let random = Math.floor(Math.random() * arr.length);
  return random;
}

/***
 * `printQuote` function
***/

function printQuote(){
  let num = getRandomQuote(quotes)
  document.querySelector('.quote-box').innerHTML = `"<p class="quote">${quotes[num].quote}</p>" 
  <p class="source">${quotes[num].guru}<span class="citation">${quotes[num].from}</span><span class="year">${quotes[num].when}</span></p>`;

  if (quotes[num].tags){
    document.querySelector('.year').innerText += `${quotes[num].tags}`;
    }
}

function makeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbGo = `rgb( ${red}, ${green}, ${blue} )`;
  return document.querySelector('.container').style.backgroundColor = rgbGo;
}

setInterval(printQuote, 2000);
setInterval(makeColor, 2000);
// setInterval(extraProp, 2000);

/* /* /* /***
* click event listener for the print quote button
* DO NOT CHANGE THE CODE BELOW!!
***/ 

document.getElementById('load-quote').addEventListener("click", printQuote, false);
// document.getElementById('load-quote').addEventListener("click", makeColor, false);





// Other experiments along the way

// function printQuote(){
//     let num = getRandomQuote(quoteArray)
//     console.log(quoteArray[num]);
//     document.querySelector('.quote').innerText = quoteArray[num].quote;
//     document.querySelector('.citation').innerText = quoteArray[num].from;
//     document.querySelector('.source').innerText = quoteArray[num].guru;
//     document.querySelector('.year').innerText = quoteArray[num].when;
// }

// function printQuote(){
//   let num = getRandomQuote(quoteArray)
//   document.querySelector('.quote').innerText = quoteArray[num].quote;
//   document.getElementsByClassName('.citation').innerText = quoteArray[num].from;
//   document.querySelector('.source').innerText = quoteArray[num].guru;
//   document.getElementsByClassName('.year').innerText = quoteArray[num].when;
// }


// function extraProp(){
//   let num = getRandomQuote(quoteArray);
//   if (quoteArray[num].tags !== undefined ){
//   document.querySelector('.year').innerText += `${quoteArray[num].tags}`;
//   console.log(quoteArray[num]);
//   }
// }

// if (Object.keys(quoteArray[random].length > 4)) {
//     document.querySelector('.quote-box').insertAdjacentHTML = `"<p class="extra">${quoteArray[num].tags}</p>"`
// }

// quoteInterval function & colorChange 

// const colorInput = `<div id="quote-box" class="quote-box" style="background-color: ${makecolor()}"></div>`;

//  function makeColor(){
//     let colorChange = Math.floor(Math.random() * 256)
//     rgbGo = `rgb( ${colorChange}, ${colorChange}, ${colorChange} )`;
//     console.log(rgbGo);
//     return document.getElementById('quote-box').style.backgroundColor = rgbGo;
//  }

// function makeColor(){
//   let colorChange = Math.floor(Math.random() * 256)
//   rgbGo = `rgb( ${colorChange}, ${colorChange}, ${colorChange} )`;
//   console.log(rgbGo);
//   return document.querySelector('.container').style.backgroundColor = rgbGo;
// }
