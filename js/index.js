
let obj = {
  index: 12,
  score:0
};

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("money")
  obj.index=12
  document.querySelector(".score").innerHTML=obj.score=0
    showAnswers();
  
});

function showAnswers() {
  let html = "";
  data.forEach(item => {
    let answers = item.answers.slice(); 
    answers.sort(() => Math.random() - 0.5); 
    let answersHtml = "";
    answers.forEach(i => {
      answersHtml += `<span class="span" onClick="startGame(${i.correct})">${i.correct == true ? `<img class="true" src='./img/free-apple-icon-3155-thumb.png' alt=''>` : `<img class=""false src='./img/green_apple-512.png' alt=''></img>`}</span>`;
    });
    html += `<div class='item'>${answersHtml}</div>`;
  });
  var container = document.querySelector(".container-items");
  container.innerHTML = html;
}



function startGame(i) {
  if (i) {
    let correctDiv = document.querySelectorAll('.item')[obj.index - 1];
    let correctImgs = correctDiv.querySelectorAll('img');
    obj.score++
    document.querySelector(".score").innerHTML=obj.score
    correctImgs.forEach(item => {
      item.style.opacity = '1';
      item.classList.add('transition');
    });
    obj.index--;
  } else {
    isFinish()
    btn.textContent="Restart"
    let allImgs = document.querySelectorAll('.item img');
    allImgs.forEach(item => {
      item.style.opacity = '1';
      item.classList.add('transition');
    });
  }
}

function isFinish() {
  return  obj.index = 12 , obj.score=0
}























