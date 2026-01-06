let score = 0;
let currentQuestion = 0;
let isAnswered = false;

const questions = [
  {
    frage: 'Wann begann und endete die Aufklärung?',
    answers: [
      { text: '1680 bis 1810', correct: false },
      { text: '1785 bis 1915', correct: false },
      { text: '1685 bis 1815', correct: true },
    ],
  },
  {
    frage: 'Welches zentrale Prinzip verfolgte die Aufklärung?',
    answers: [
      { text: 'Emotion', correct: false },
      { text: 'Vernunft', correct: true },
      { text: 'Glaube', correct: false },
    ],
  },
  {
    frage: 'Was ist das Symbol der Aufklärung?',
    answers: [
      { text: 'Dunkelheit', correct: false },
      { text: 'Licht', correct: true },
      { text: 'Feuer', correct: false },
    ],
  },
  {
    frage: 'Welches lateinische Motto ist mit der Aufklärung eng verbunden?',
    answers: [
      { text: 'Carpe diem', correct: false },
      { text: 'Sapere aude', correct: true },
      { text: 'Veni vidi vici', correct: false },
    ],
  },
  {
    frage: 'Welchen politischen Einfluss hatte die Aufklärung?',
    answers: [
      {
        text: 'Aufklärer forderten Freiheitsrechte, Volkssouveränität und Bildungsmöglichkeiten',
        correct: true,
      },
      {
        text: 'Aufklärer forderten Absolutismus und Feudalismus',
        correct: false,
      },
      {
        text: 'Aufklärer forderten die Abschaffung der Todesstrafe',
        correct: false,
      },
    ],
  },
  {
    frage:
      'Welche der folgenden Personen war ein wichtiger Denker der Aufklärung?',
    answers: [
      {
        text: 'Martin Luther',
        correct: false,
      },
      {
        text: 'René Descartes',
        correct: true,
      },
      {
        text: 'Alexander der Große',
        correct: false,
      },
    ],
  },
  {
    frage: 'Zu welcher Entwicklung trug die Aufklärung bei?',
    answers: [
      {
        text: 'Verstärkte Autorität der Kirche',
        correct: false,
      },
      {
        text: 'Unterdrückung der Wissenschaft',
        correct: false,
      },
      {
        text: 'Demokratisches Denken',
        correct: true,
      },
    ],
  },
  {
    frage: 'Welche Rolle spielt der Mensch im aufklärerischen Denken?',
    answers: [
      {
        text: 'Rationales Individuum',
        correct: true,
      },
      {
        text: 'Untertan',
        correct: false,
      },
      {
        text: 'schöpferisches Genie',
        correct: false,
      },
    ],
  },
  {
    frage: 'Welche philosophische Richtung basierte auf Sinneserfahrung?',
    answers: [
      {
        text: 'Rationalismus',
        correct: false,
      },
      {
        text: 'Pragmatismus',
        correct: false,
      },
      {
        text: 'Empirismus',
        correct: true,
      },
    ],
  },
  {
    frage: 'Was war eine wichtige Aufgabe der aufklärerischen Literatur?',
    answers: [
      {
        text: 'Geheimnisse hüten',
        correct: false,
      },
      {
        text: 'Adel unterhalten',
        correct: false,
      },
      {
        text: 'Wissen verbreiten',
        correct: true,
      },
    ],
  },
  {
    frage:
      'An welche Zielgruppe richtete sich die Literatur der Aufklärung besonders?',
    answers: [
      {
        text: 'Adel',
        correct: false,
      },
      {
        text: 'Bürgertum',
        correct: true,
      },
      {
        text: 'Bauern',
        correct: false,
      },
    ],
  },
  {
    frage: 'Worin bestand die Besonderheit der Lyrik der Aufklärung?',
    answers: [
      {
        text: 'Formenvielfalt',
        correct: true,
      },
      {
        text: 'Alte Sprache',
        correct: false,
      },
      {
        text: 'bürgerliche Themen',
        correct: false,
      },
    ],
  },
  {
    frage: 'Was ist kein berühmtes Drama der Aufklärung?',
    answers: [
      {
        text: '„Emilia Galotti“',
        correct: false,
      },
      {
        text: '„Nathan der Weise“',
        correct: false,
      },
      {
        text: '„Kabale und Liebe“',
        correct: true,
      },
    ],
  },
  {
    frage:
      'Welche Erzählform spielte häufig in der Epik der Aufklärung eine Rolle?',
    answers: [
      {
        text: 'Märchen',
        correct: false,
      },
      {
        text: 'Bildungsroman',
        correct: true,
      },
      {
        text: 'Heldensage',
        correct: false,
      },
    ],
  },
  {
    frage: 'Was zeigt die Ringparabel im Kontext der Aufklärung?',
    answers: [
      {
        text: 'Keine Religion ist beweisbar die einzig wahre',
        correct: true,
      },
      {
        text: 'Wahre Wertschätzung entsteht aus Fleiß, Ordnung und Gemeinnutz',
        correct: false,
      },
      {
        text: 'Diese Frage ist die Vorletzte Frage im Quiz',
        correct: false,
      },
    ],
  },
];

document.querySelector('.js-quiz-button').addEventListener('click', () => {
  renderQuestion();
});

function renderQuestion() {
  const question = questions[currentQuestion];

  document.querySelector('.js-quiz').innerHTML = `
    <div style="margin-top: 5px;">Teste dein Wissen:</div>
    <div class="quiz-line"></div>
    <div class="quiz-frage-container">
      <div class="quiz-frage">${question.frage}</div>

      ${question.answers
        .map(
          (answer, index) => `
          <div class="quiz-antwortmöglichkeit ${
            answer.correct ? 'correct' : 'wrong'
          }">
            <input type="radio" name="antwort" value="${index}">
            ${answer.text}
          </div>
        `
        )
        .join('')}
    </div>

    <button class="überprüfen-button js-überprüfen-button">Überprüfen</button>
  `;

  document
    .querySelector('.js-überprüfen-button')
    .addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
  if (!isAnswered) {
    checkAnswer();
  } else {
    nextQuestion();
  }
}

function checkAnswer() {
  const checked = document.querySelector('input[name="antwort"]:checked');

  if (!checked) {
    alert('Bitte wähle eine Antwortmöglichkeit!');
    return;
  }

  const answerIndex = Number(checked.value);

  if (questions[currentQuestion].answers[answerIndex].correct) {
    score++;
  }

  document
    .querySelectorAll('.quiz-antwortmöglichkeit')
    .forEach((element, i) => {
      element.classList.add(
        questions[currentQuestion].answers[i].correct
          ? 'correct-style'
          : 'wrong-style'
      );
    });

  isAnswered = true;
  document.querySelector('.js-überprüfen-button').textContent = 'Weiter';
  document.querySelector('.js-überprüfen-button').classList.add('quiz-button');
  document
    .querySelector('.js-überprüfen-button')
    .classList.remove('überprüfen-button');
  document
    .querySelectorAll('input[name="antwort"]')
    .forEach((input) => (input.disabled = true));
}

function nextQuestion() {
  isAnswered = false;
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function showResult() {
  document.querySelector('.js-quiz').innerHTML = `
    <h2>Fertig!</h2>
    <p>Score: ${score} / ${questions.length}</p>
  `;
}

/*
function quiz(
  frage,
  antwortmöglichkeit1,
  antwortmöglichkeit2,
  antwortmöglichkeit3,
  id1,
  id2,
  id3
) {
  let html = `
    <div style="margin-top: 10px;">Teste dein Wissen:</div>
    <div class="quiz-line"></div>
    <div class="quiz-frage">${frage}</div>
    <div class="quiz-antwortmöglichkeit ${id1}">
      <input type="radio" id="${id1}" name="antwortmöglichkeit" value="Antwortmöglichkeit1">
      ${antwortmöglichkeit1}
    </div>
    <div class="quiz-antwortmöglichkeit ${id2}">
      <input type="radio" id="${id2}" name="antwortmöglichkeit" value="Antwortmöglichkeit2">
      ${antwortmöglichkeit2}
    </div>
    <div class="quiz-antwortmöglichkeit ${id3}">
      <input type="radio" id="${id3}" name="antwortmöglichkeit" value="Antwortmöglichkeit3">
      ${antwortmöglichkeit3}
    </div>
    <button class="überprüfen-button js-überprüfen-button">Überprüfen</button>
  `;

  document.querySelector('.js-quiz').innerHTML = html;

  document
    .querySelector('.js-überprüfen-button')
    .addEventListener('click', () => {
      handleButtonClick();
    });
}


function checkAnswer() {
  const checked = document.querySelector(
    'input[name="antwortmöglichkeit"]:checked'
  );

  if (!checked) {
    alert('Bitte wähle eine Antwort!');
    return;
  }

  if (checked.id === 'correct') {
    score++;
  }

  document.querySelector('.correct').classList.add('correct-style');
  document.querySelectorAll('.wrong').forEach((element) => {
    element.classList.add('wrong-style');
  });
  console.log(score);

  isAnswered = true;
  document.querySelector('.js-überprüfen-button').innerText = 'Weiter';

  document
    .querySelectorAll('input[name="antwortmöglichkeit"]')
    .forEach((input) => (input.disabled = true));
}
*/
