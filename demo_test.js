const quizData = [
    {
      question: 'On Saturday afternoon, Armand sent m text messages each hour for 5 hours, and Tyrone sent ptext messages each hour for 4 hours. Which of the following represents the total number of messagessent by Armand and Tyrone on Saturday afternoon?',
      options: ['9mp', '20mp', '5m + 4p', '4 + 5mp'],
      answer: '5m + 4p',
      explanation:['The answer is choice C.', "<p>The total number of text messages sent by Armand can be found by multiplying his rate of texting, in number of text messages sent per hour, by the total number of hours he spent sending them; that is p texts/hour x 5 hours = 5m texts. Similarly, the total number of text messages sent by Tyrone is his hourly rate of texting multiplied by the 4 hours he spent texting: p texts/hour x 4 hours = 4p texts. The total number of text messages sent by Armand and Tyrone is the sum of the total number of messages sent by Armand and the total number of messages sent by Tyrone: 5m + 4p.</p> <p>Choice A is incorrect and arises from adding the coefficients and multiplying the variables of 5m and 4p. Choice B is incorrect and is the result of multiplying 5m and 4p. The total number of messages sent by Armand and Tyrone should be the sum of 5m and 4p, not the product of these terms. Choice D is incorrect because it multiplies Armand's number of hours spent texting by Tyrone's hourly rate of texting, and vice versa. This mix-up results in an expression that does not equal the total number of messages sent by Armand and Tyrone."],
    },
    {
      question: '<p style="text-align: center;">3x + 4y = -23</p> <p style="text-align: center;">2y - x = -19</p> What is the solution (x,y) to the system of equations above?',
      options: ['(-5,-2)', '(3,-8)', '(4,-6)', '(9,-6)'],
      answer: '(3,-8)',
      explanation: ['The answer is Choice B','<p>Adding x and 19 to both sides of 2y - x = -19 gives x = 2y + 19. Then, substituting 2y + 19 for x in 3x + 4y = -23 gives 3(2y + 19) + 4y= -23 gives y=-8. Finally, substituting -8 for y in 2y - x = -19 gives 2(-8) - x = -19, or x = 3. Thererefore, the solution (x,y) to the given system if equations is (3,-8).</p> <p>Choices A, C, and D are incorrect because when the given values of x and y are substituted in 2y-x=-19, the value of the left side of the equation does not equal -19 </p>'],
    },
    {
      question: 'A research assistant selected 75 undergraduate students at random from the list of all students enrolled in the psychology-degree program at a large university. She asked each of the 75 students, "How many minutes per day do you typically spend reading?" The mean reading time in the sample was 89 minutes, and the margin of error for this estimate was 4.28 minutes. Another research assistant intends to replicate the survey and will attempt to get a smaller margin of error. Which of the following samples will most likely result in a smaller margin of error for the estimated mean time students in the psychology-degree program read per day?',
      options: ['40 undergraduate psychology-degree program students selected at random', '40 undergraduate students selected at random from all degree programs at the university', '300 undergraduate psychology-degree program students selected at random', '300 undergraduate students selected at random from all degree programs at the university'],
      answer: '300 undergraduate psychology-degree program students selected at random',
      explanation: ['The answer is Choice C','<p>Increasing the sample size while randomly selecting participants from the original population of interest will most likely result in a decrease in the margin of error.</p> <p>Choice A is incorrect and may result from a misunderstanding of the importance of sample size to a margin of error. The margin of error is likely to increase with a smaller sample size. </p> <p>Choice B is incorrect and may result from a misunderstanding of the importance of sample size and participant selection to a margin of error. The margin of error is likely to increase due to the smaller sample size. Also, a sample of undergraduate students from all degree programs at the university is a different population than the original survey; therefore, the impact to the mean and margin of error cannot be predicted.  </p> <p>Choice D is incorrect. A sample of undergraduate students from all degree programs at the university is a different population than the original survey and therefore the impact to the mean and margin of error cannot be predicted.</p>'],
    },
    {
      question: 'The average number of students per classroom, y, at Central High School can be estimated using the equation y = 0.8636x + 27.227, where x represents the number of years since 2004 and x <span>&#8804;</span> 10. Which of the following statements is the best interpretation of the number 0.8636 in the context of this problem?',
      options: ['The estimated average number of students per classroom in 2004', 'The estimated average number of students per classroom in 2004', 'The estimated yearly decrease in the average number of students per classroom', 'The estimated yearly increase in the average number of students per classroom'],
      answer: 'The estimated yearly increase in the average number of students per classroom',
      explanation: ['The answer is Choice D','<p>When an equation is written in the form y = mx + b, the coefficient of the x-term (in this case 0.8636) is the slope of the graph of this equation in the xy-plane. The slope of the graph of this linear equation gives the amount that the average number of students per classroom (represented by y) changes per year (represented by x). The slope is positive, indicating an increase in the average number of students per classroom each year.</p> <p>Choice A is incorrect and may result from a misunderstanding of slope and y-intercept. The y-intercept of the graph of the equation represents the estimated average number of students per classroom in 2004.</p> <p>Choice B is incorrect and may result from a misunderstanding of the limitations of the model. You may have seen that x <span>&#8804;</span> 10 and erroneously used this statement to determine that the model finds the average number of students in 2014.</p> <p>Choice C is incorrect and may result from a misunderstanding of slope. You may have recognized that slope models the rate of change but thought that a slope of less than 1 indicates a decreasing function.</p>'],
    },
    {
      question: '<p style="text-align: center;">b = 2.35 + 0.25x</p><p style="text-align: center;">c = 1.75 + 0.40x</p>In the equations above, b and c represent the price per pound, in dollars, of beef and chicken, respectively, x weeks after July 1 during last summer. What was the price per pound of beef when it was equal to the price per pound of chicken?',
      options: [
        '$2.60',
        '$2.85',
        '$2.95',
        '$3.35',
        
      ],
      answer: '$3.35',
      explanation: ['The answer is Choice D','<p>To determine the price per pound of beef when it was equal to the price per pound of chicken, determine the value of x (the number of weeks after July 1) when the two prices were equal. The prices were equal when b = c; that is, when 2.35 + 0.25x = 1.75 + 0.40x.This last equation is equivalent to 0.60 = 0.15x, and so x = 0.60/0.15 = 4.Then to determine b, the price per pound of beef, substitue 4 for x in b = 2.35 + 0.25x, which gives b = 2.35 + 0.25(4) = 3.35 dollars per pound.</p> <p>Choice A is incorrect. It results from substituting the value 1, not 4, for x in b = 2.35 + 0.25x. Choice B is incorrect. It results from substituting the value 2, not 4, for x in b = 2.35. Choice C is incorrect. It results from substituting the value 3, not 4, for x in c = 1.75 + 0.40x</p>'],
    },
    // {
    //   question: 'What is the chemical symbol for gold?',
    //   options: ['Au', 'Ag', 'Cu', 'Fe'],
    //   answer: 'Au',
    //   explanation: ['Choice C is correct','<p></p><p></p><p></p><p></p>'],
    // },
    // {
    //   question: 'Who painted the Mona Lisa?',
    //   options: [
    //     'Pablo Picasso',
    //     'Vincent van Gogh',
    //     'Leonardo da Vinci',
    //     'Michelangelo',
    //   ],
    //   answer: 'Leonardo da Vinci',
    //   explanation: ['Choice C is correct','<p></p><p></p><p></p><p></p>'],
    // },
    // {
    //   question: 'Which planet is known as the Red Planet?',
    //   options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
    //   answer: 'Mars',
    //   explanation: ['Choice C is correct','<p></p><p></p><p></p><p></p>'],
    // },
    // {
    //   question: 'What is the largest species of shark?',
    //   options: [
    //     'Great White Shark',
    //     'Whale Shark',
    //     'Tiger Shark',
    //     'Hammerhead Shark',
    //   ],
    //   answer: 'Whale Shark',
    //   explanation: ['Choice C is correct','<p></p><p></p><p></p><p></p>'],
    // },
    // {
    //   question: 'Which animal is known as the King of the Jungle?',
    //   options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    //   answer: 'Lion',
    //   explanation: ['Choice C is correct','<p></p><p></p><p></p><p></p>'],
    // },
    
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const nextButton = document.getElementById('next');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  const explanationContainer = document.getElementById('explanation');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
    
    const explanationElement = document.createElement('div');
    explanationElement.className = 'explanation';
    const choice = document.createElement('div');
    choice.className = 'choice';
    choice.innerHTML = questionData.explanation[0];
    const choiceExplanation = document.createElement('div');
    choiceExplanation.innerHTML = questionData.explanation[1];
    explanationElement.appendChild(choice);
    explanationElement.appendChild(choiceExplanation);
    
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    // shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
    quizContainer.appendChild(submitButton);
    quizContainer.appendChild(explanationElement);
    
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      document.getElementById("next").style.display = 'inline-block';
      document.getElementById("submit").style.display = 'none';
      var optionLength = document.getElementsByClassName("option").length;
      // for(var i = 0; i <optionLength; i++) {
      //   document.getElementsByClassName("option")[i].getElementsByTagName("input")[0].setAttribute('disabled','');

      // }
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        document.getElementById("quiz").children[3].style.display = "block";
        document.querySelector(".quizbody").style.borderColor = "green";
        selectedOption.style.accentColor = 'green';
        document.querySelector(".decision").style.visibility = "visible";
        document.querySelector(".decision").innerHTML = "Correct";
        document.querySelector(".decision").style.color = "green";
        document.querySelector("#correct").setAttribute("src","img/icons8-correct-48 (1).png");
        document.querySelector("#correct").style.visibility = "visible";
        
        for(var i = 0; i <optionLength; i++) {
          if (document.getElementsByClassName("option")[i].innerText != quizData[currentQuestion].answer  ){
            document.getElementsByClassName("option")[i].getElementsByTagName("input")[0].setAttribute('disabled','');
          }
  
        }
        document.getElementById("quiz").children[3].style.backgroundColor = '#F2FFE9';
        score = score + 160;
      } else {
        document.getElementById("quiz").children[3].style.display = "block";
        document.getElementById("quiz").children[3].style.backgroundColor = '#FFD1DA';
        document.querySelector(".quizbody").style.borderColor = "red";
        selectedOption.style.accentColor = 'red';
        document.querySelector(".decision").style.visibility = "visible";
        document.querySelector(".decision").innerHTML = "Incorrect";
        document.querySelector(".decision").style.color = "red";
        document.querySelector("#correct").setAttribute("src","img/icons8-wrong-48.png");
        document.querySelector("#correct").style.visibility = "visible";
        
        for(var i = 0; i <optionLength; i++) {
          if (document.getElementsByClassName("option")[i].innerText != answer  ){
            document.getElementsByClassName("option")[i].getElementsByTagName("input")[0].setAttribute('disabled','');
          }
  
        }
        selectedOption.style.accentColor = 'red';
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }

      
      
  }
  }

  function nextQuestion() {


    document.getElementById("quiz").children[2].style.display = 'none';
    document.querySelector(".quizbody").style.borderColor = "#6666ff";
    document.querySelector(".decision").style.visibility = "hidden";
    document.querySelector("#correct").style.visibility = "hidden";
    currentQuestion++;
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    selectedOption.checked = false;
    document.getElementById("next").style.display = 'none';
      document.getElementById("submit").style.display = 'inline-block';
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }

  }
  
  function displayResult() {
    let min = score - 60;
    let max = score + 60;
    if(min<200){
      min = 200;
      max = 280;
    }
    if(max>800){
      max = 800;
      min = 720;
    }
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    // retryButton.style.display = 'inline-block';
    // showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `
    <h3>Your predicted Score:<h3>
    <h1  style="font-size:6rem;color:#6666ff;font-weight:bold">${min}-${max}</h1> 
    
    `;
    const subtn = document.createElement("a");
    subtn.className = "btn  py-3 px-4 animated slideInDown";
    subtn.innerHTML = "Sign Up";
    subtn.setAttribute("href", "signup.html");
    subtn.setAttribute("style", "color: white;border: 2px solid;border-radius: 15px;background-color: #6666ff;margin-top: 20px;font-size: larger;margin-bottom: 20px;font-weight: bold;");
    // subtn.setAttribute("type", "button");
    resultContainer.appendChild(subtn);
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }

    
  
    resultContainer.innerHTML = `
      <p>Your predicted score ${min} to ${max} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  nextButton.addEventListener('click', nextQuestion);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
