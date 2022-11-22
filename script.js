let rightAnswer = 0;
let falseAnswer = 0;

document.querySelector(".right").innerHTML = rightAnswer;
document.querySelector(".wrong").innerHTML = falseAnswer;

function showQuestion() {
  const name = prompt("Ismingiz Nima ?");
  const age = Number(prompt(`Salom ${name} Yoshingizni ayting?`));
  const year = prompt(`${new Date().getFullYear() - age} -- yilmisiz?`);

  let q1 = Number(prompt("25 + 5 = ?"));
  if (q1 == 30) {
    alert("Sizning javob to'g'ri, Davom eting akaxon!");
    rightAnswer++;
    document.querySelector(".right").innerHTML++;
  } else {
    alert("Sizning Javob noto'gri tushkunlikka tushmang?");
    falseAnswer++;
    document.querySelector(".wrong").innerHTML++;
  }

  let q2 = Number(prompt("65 - 30 = ?"));
  if (q2 == 35) {
    alert("Sizning javob to'g'ri, Davom eting akaxon!");
    rightAnswer++;
    document.querySelector(".right").innerHTML++;
  } else {
    alert("Sizning Javob noto'gri tushkunlikka tushmang?");
    falseAnswer++;
    document.querySelector(".wrong").innerHTML++;
  }

  let q3 = Number(prompt("45 - 23 = ?"));
  if (q3 == 22) {
    alert("Sizning javob to'g'ri, Davom eting akaxon!");
    rightAnswer++;
    document.querySelector(".right").innerHTML++;
  } else {
    alert("Sizning Javob noto'gri tushkunlikka tushmang?");
    falseAnswer++;
    document.querySelector(".wrong").innerHTML++;
  }

  let q4 = Number(prompt("60 / 3 = ?"));
  if (q4 == 20) {
    alert("Sizning javob to'g'ri, Davom eting akaxon!");
    rightAnswer++;
    document.querySelector(".right").innerHTML++;
  } else {
    alert("Sizning Javob noto'gri tushkunlikka tushmang?");
    falseAnswer++;
    document.querySelector(".wrong").innerHTML++;
  }

  let q5 = Number(prompt("9 * 8 = ?"));
  if (q5 == 72) {
    alert("Sizning javob to'g'ri, Davom eting akaxon!");
    rightAnswer++;
    document.querySelector(".right").innerHTML++;
  } else {
    alert("Sizning Javob noto'gri tushkunlikka tushmang?");
    falseAnswer++;
    document.querySelector(".wrong").innerHTML++;
  }
}

document.querySelector(".btn").onclick = showQuestion;
