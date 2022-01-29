const quiz = [
    {
      question: '問題１：【平和:ピンフ】の条件として、間違っているものを選んでください。',
      answers: [ '副露してもよい', '雀頭が役牌でない', '手持ちの牌が全て順子である', '両面待ちで聴牌している'],
      correct: '副露してもよい'
    }, {
      question: '問題２：ｍ１１２２３３ｍ７７８８９９發發 【ドラ白・裏ドラｐ９】で立直、和了りました。 この場合の役の組み合せとして正しいのは？',
      answers: [ '立直・二盃口・混一色・ドラ４・（自摸）', '立直・七対子・二盃口・混一色・ドラ２・（自摸）', '立直・二盃口・混一色・ドラ２・（自摸）', '立直・七対子・混一色・ドラ２・（自摸）'],
      correct: '立直・二盃口・混一色・ドラ２・（自摸）'
    }, {
      question: '問題３：(親)メンタンピンツモ。 ２本場。 点数申告は？',
      answers: [ '2600オール', '2600は2800オール', '4000オール', '4000は4200オール'],
      correct: '2600は2800オール'
    },{
      question: '問題４：(子)90符2翻は何点？',
      answers: [ '2000', '3900', '5800', '満貫'],
      correct: '5800'
    }
  ];

function clickBtn1(){
	location.href = "kaisetu.html";
};

  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  const showEnd = () => {
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }

  