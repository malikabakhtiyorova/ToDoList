var elInput = document.querySelector(".input");
var isImportant = document.querySelector(".is-important");
var addBtn = document.querySelector(".add-btn");
var elList = document.querySelector(".list");


var activities = [];

addBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  var inputValue = elInput.value;
  elInput.classList.remove("is-invalid");
  if (activities.includes(inputValue)) {

    alert("Bu mashgulot mavjud, qayta kirgazish uchun OK ni bosing");
  }
  if (isImportant.checked) {
    if (elInput.value) {
      activities.unshift(inputValue.trim());
      elInput.value = "";
      elInput.focus();
    } else {
      elInput.classList.add("is-invalid");
    }

  } else {
    if (elInput.value) {
      activities.push(inputValue.trim());
      elInput.value = "";
      elInput.focus();
    } else {
      elInput.classList.add("is-invalid");
    }
  }

  elList.innerHTML = '';

  for (var activity of activities) {
    var resultList = document.createElement('li');
    resultList.textContent = activity;
    resultList.classList.add('h5', 'text-light');
    elList.appendChild(resultList);
  };

});
