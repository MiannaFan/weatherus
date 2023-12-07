let question = document.querySelectorAll(".question");
for (let i = 0; i < question.length; i++) {
  let a = 0;
  let questionIcon = document.querySelectorAll(".questionIcon");
  let answer = document.querySelectorAll(".answer");
  question[i].addEventListener("click", function () {
    a++;
    if (a % 2 !== 0) {
      questionIcon[i].innerHTML = `<span class="material-symbols-outlined">
remove
</span>`;
      answer[i].style.display = "block";
      for (let j = 0; j < question.length; j++) {
        if (j !== i) {
          questionIcon[
            j
          ].innerHTML = `<span class="material-symbols-outlined"> add </span>`;
          answer[j].style.display = "none";
        }
      }
    } else {
      questionIcon[
        i
      ].innerHTML = `<span class="material-symbols-outlined"> add </span>`;
      answer[i].style.display = "none";
    }
  });
}
