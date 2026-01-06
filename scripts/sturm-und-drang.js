let score = 0;
let currentQuestion = 0;
let isAnswered = false;

const questions = [
  {
    frage: 'Wann begann und endete der Sturm und Drang?',
    answers: [
      { text: '1765 bis 1785', correct: true },
      { text: '1760 - 1780', correct: false },
      { text: '1665 bis 1685', correct: false },
    ],
  },
  {
    frage: 'Welche Prinzipien standen im Sturm und Drang im Mittelpunkt?',
    answers: [
      { text: 'Vernunft und Ordnung', correct: false },
      { text: 'Emotion und Leidenschaft', correct: true },
      { text: 'Glaube und Religion', correct: false },
    ],
  },
  {
    frage:
      'Gegen welche Epoche richtete sich der Sturm und Drang hauptsächlich?',
    answers: [
      { text: 'Barock', correct: false },
      { text: 'Klassik', correct: false },
      { text: 'Aufklärung', correct: true },
    ],
  },
  {
    frage: 'Welche Rolle spielte die Vernunft im Sturm und Drang?',
    answers: [
      { text: 'Sie stand im Mittelpunkt', correct: false },
      { text: 'Sie wurde abgelehnt', correct: true },
      { text: 'Sie war wichtiger als Gefühle', correct: false },
    ],
  },
  {
    frage: 'Welches Ideal prägte den Sturm und Drang besonders?',
    answers: [
      {
        text: 'Der gebildete Bürger',
        correct: false,
      },
      {
        text: 'Der starke Ritter',
        correct: false,
      },
      {
        text: 'Das schöperische Genie',
        correct: true,
      },
    ],
  },
  {
    frage: 'Was bedeutet der Begriff „Genie“ im Sturm und Drang?',
    answers: [
      {
        text: 'Ein gebildeter Gelehrter',
        correct: false,
      },
      {
        text: 'Ein Mensch, der sich an Regeln hält',
        correct: false,
      },
      {
        text: 'Ein freier, unabhängiger und regellose Mensch',
        correct: true,
      },
    ],
  },
  {
    frage: 'Welche Themen sind typisch für den Sturm und Drang?',
    answers: [
      {
        text: 'Freiheit und Emotionen',
        correct: true,
      },
      {
        text: 'Moral und Ordung',
        correct: false,
      },
      {
        text: 'Reichtum und Macht',
        correct: false,
      },
    ],
  },
  {
    frage: 'Welcher Autor gilt als Hauptvertreter des Sturm und Drang?',
    answers: [
      {
        text: 'Gotthold Ephraim Lessing',
        correct: false,
      },
      {
        text: 'Albert Einstein',
        correct: false,
      },
      {
        text: 'Johann Wolfgang von Goethe',
        correct: true,
      },
    ],
  },
  {
    frage: 'Welches Werk gehört zum Sturm und Drang?',
    answers: [
      {
        text: 'Nathan der Weise',
        correct: false,
      },
      {
        text: 'Die Leiden des jungen Werther',
        correct: true,
      },
      {
        text: 'Faust',
        correct: false,
      },
    ],
  },
  {
    frage: 'Wie ist die Sprache im Sturm und Drang meist gestaltet?',
    answers: [
      {
        text: 'Gefühlsbetont und leidenschaftlich',
        correct: true,
      },
      {
        text: 'Stark geregelt und streng',
        correct: false,
      },
      {
        text: 'Nüchtern und sachlich',
        correct: false,
      },
    ],
  },
  {
    frage: 'Woher hat der Sturm und Drang seinen Namen?',
    answers: [
      {
        text: 'Wegen politischer Kriege',
        correct: false,
      },
      {
        text: 'Wegen Naturkatastrophen',
        correct: false,
      },
      {
        text: 'Von einem Drama namens „Sturm und Drang“',
        correct: true,
      },
    ],
  },
  {
    frage:
      'Welche Zielgruppe sprach die Literatur des Sturm und Drang besonders an?',
    answers: [
      {
        text: 'Das junge, gebildete Bürgertum',
        correct: true,
      },
      {
        text: 'Den Adel',
        correct: false,
      },
      {
        text: 'Bauern und Landbevölkerung',
        correct: false,
      },
    ],
  },
  {
    frage: 'Was war ein zentraler Leitgedanke des Sturm und Drang?',
    answers: [
      {
        text: 'Pflichtbewusstsein',
        correct: false,
      },
      {
        text: 'Freiheit und Individualität',
        correct: true,
      },
      {
        text: 'Religiöse Disziplin',
        correct: false,
      },
    ],
  },
  {
    frage: 'Was war ein häufiges Ende von Dramen im Sturm-und-Drang?',
    answers: [
      {
        text: 'Happy End',
        correct: false,
      },
      {
        text: 'Tod des Helden als Rebellion gegen die Gesellschaft',
        correct: true,
      },
      {
        text: 'Politische Revolution',
        correct: false,
      },
    ],
  },
  {
    frage: 'Was war charakteristisch für die Lyrik des Sturm und Drang?',
    answers: [
      {
        text: 'Freier Rhythmus, unregelmäßiges Reimschema',
        correct: true,
      },
      {
        text: 'Strenge Formvorgaben',
        correct: false,
      },
      {
        text: 'Religiöse Themen',
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
