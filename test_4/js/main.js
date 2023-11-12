var counter = 0;

function onClickButton(el) {
  counter++;
  el.innerHtml = "Вы нажали на кнопку: " + counter;
  el.style.background = 'red';
  el.style.color = 'blue';
}

function onInput(el) {
  if (el.value == "hello")
    alert("И тебе привет");

  console.log(el.value);
}