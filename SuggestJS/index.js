//SECTION 1: Selection
let homePage = document.getElementById("homePage") //Select Home Page
let questionPages = []
let step = 0;

for (let i = 0; i < document.getElementsByClassName("questionPage").length; i++) { //Select All Question Pages
    questionPages.push( //Create new question pages Object
        {
            home: "",
            answer: [],
            backButton: ""
        }
    )
    //Select all question pages
    questionPages[i].home = document.getElementsByClassName("questionPage")[i]
    //Select all back button in question pages
    questionPages[i].backButton = document.getElementsByClassName("backButton")[i]
    //Select all answer button in question pages
    questionPages[i].answer = document.getElementsByClassName(`answerQuestion${i + 1}`)
}

let answerPage = document.getElementById("answerPage")
console.log(questionPages)

questionPages.forEach((value) => { //Hide all Question Pages
    value.home.style.display = "none"
})
//Create All Button Function

let adviceButton = document.getElementById("adviceButton") // Get Advice Function
adviceButton.addEventListener("click", () => {
    homePage.style.display = "none"
    questionPage1.style.display = "block"
    step++
})


for (i = 0; i < questionPages.length; i++) { // Create all Back Button in Question Page
    if (i == 0) {
        questionPages[i].backButton.addEventListener("click", () => {
            homePage.style.display = "block"
            questionPages[step - 1].home.style.display = "none"
            step--
        })

    }
    else {
        questionPages[i].backButton.addEventListener("click", () => {
            questionPages[step - 1].home.style.display = "none"
            questionPages[step - 2].home.style.display = "block"
            step--
        })
    }
}


for (i = 0; i < questionPages.length; i++) { //Create All Answers Function 
    if (i == 4) {
        for (let j = 0; j < questionPages[i].answer.length; j++) {
            questionPages[i].answer[j].addEventListener("click", () => {
                questionPages[step-1].home.style.display = "none"
                answerPage.style.display="block"
                step++
            })
        }
    }
    else {
        console.log(i)
        console.log(questionPages[i].answer.length)
        for (let j = 0; j < questionPages[i].answer.length; j++) {
            console.log(questionPages[i].answer[j])
            questionPages[i].answer[j].addEventListener("click", () => {

                questionPages[step-1].home.style.display = "none"
                questionPages[step].home.style.display = "block"
                step++
            })
        }

    }

}
