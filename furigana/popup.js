function onRuby(event) {
  console.log(`Form Submitted! ${event.timeStamp}: ${textarea.value}`);
  event.preventDefault();
}

function onInput(event) {
  result.textContent = textarea.value;
}

window.onload = function () {
  const form = document.getElementById('form');
  const textarea = document.getElementById('textarea');
  const result = document.getElementById('result');

  form.addEventListener('submit', onRuby);
  textarea.addEventListener('input', onInput);
};
