var pronouncing = require('pronouncing');

  function sylabbleCounter(words) {
    let sylcount = 0;
    for (i = 0; i < words.length; i++) {
        let parsed_word = words[i].replace(".", "");
        sylcount += num_syls(parsed_word.toLowerCase());
        // console.log(sylcount);
    }
    return sylcount;
  }

function num_syls(word) {
    return pronouncing.syllableCount(pronouncing.phonesForWord(word)[0]);
}

// Returns grade level estimate of Flesh-Kincaid test
function flesch_kinkaid_calc(article) {
    let words = article.split(' ');
    let sentenceNumber = article.split('.').length;
    let syllableCount = sylabbleCounter(words);
    return 0.39 * (words.length / (sentenceNumber-1)) + 11.8 * (syllableCount / words.length) - 15.59;
  }

console.log(flesch_kinkaid_calc("The Australian platypus is seemingly a hybrid of a mammal and reptilian creature."));