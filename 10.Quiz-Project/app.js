const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  console.log(score);

  // Bereken aantal juiste antwoorden
  userAnswers.map((answer, index) => {
    answer === correctAnswer[index] ? (score += 25) : (score = score);
  });

  // Laat resultaten zien bovenaan de pagina
  scrollTo(0, 0);
  result.querySelector('span').textContent = `${score}%`;
  result.classList.remove('d-none');

  let output = 0;

  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
