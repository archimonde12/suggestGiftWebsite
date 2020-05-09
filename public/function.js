
function addResult(answerofQ) {
    //Add all result Gift
    let listGift = []
    document.getElementsByClassName("progress")[0].hidden = true
    document.getElementById("titleOfListGift").hidden = false
    console.log(answerofQ)
    listOfGift.forEach((value, index) => {
        if (checkAnswer(answerofQ, value)) {
            listGift.push(value)
        }
    })
    console.log(listGift)
    if(listGift==0){console.log("Cannot find a gift")}
    //Create numbers of carousel indicator
    let listOfResult = document.getElementById("listOfResult")
    listOfResult.innerHTML = `<ol class="carousel-indicators"></ol>
    <div class="carousel-inner"></div>`
    let carouselIndicators = document.querySelectorAll("#listOfResult .carousel-indicators")[0]
    carouselIndicators.innerHTML = ""
    for (let i = 0; i <= Math.floor(listGift.length / 3); i++) {
        if (i == 0) {
            carouselIndicators.innerHTML += `<li data-target="#listOfResult" data-slide-to="0" class="active" style="background-color: red;">
            </li>`

        }
        else {
            if(listGift.length % 3!=0)
            carouselIndicators.innerHTML += `<li data-target="#listOfResult" data-slide-to="${i}" style="background-color: red;"></li>`
        }
    }

    //Create numbers of carousel items
    let carouselInner = document.querySelectorAll("#listOfResult .carousel-inner")[0]
    carouselInner.innerHTM = ""
    for (let i = 0; i <= Math.floor(listGift.length / 3); i++) {
        if (i == 0) {
            carouselInner.innerHTML += ` 
            <div class="carousel-item active">
                <div class="container">
                    <div class="row">
                    </div>
                </div>
            </div>`
            let row = document.querySelectorAll(".carousel-item .container .row")[document.querySelectorAll(".carousel-item .container .row").length - 1]
            for (let j = 0; j < 3; j++) {
                row.innerHTML += `
                        <div class="col-sm">
                            <div class="card">
                                <div class="hover-background"><button id="${listGift[i * 3 + j].nameOfGift}"><i class="fas fa-heart fa-2x"></i></button></div>
                                <img src=${listGift[i * 3 + j].imageLink} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">${listGift[i * 3 + j].vietnameseName}</p>
                                </div>
                            </div>
                        </div>`
            }

        } else {
            carouselInner.innerHTML += `
            <div class="carousel-item">
                <div class="container">
                    <div class="row">
                    </div>
                </div>
            </div>`
            let row = document.querySelectorAll(".carousel-item .container .row")[document.querySelectorAll(".carousel-item .container .row").length - 1]
            for (let j = 0; j < 3; j++) {
                if (i * 3 + j < listGift.length) {
                    row.innerHTML += `
                        <div class="col-sm">
                            <div class="card">
                                <div class="hover-background"><button id="${listGift[i * 3 + j].nameOfGift}"><i class="fas fa-heart fa-2x"></i></button></div>
                                <img src=${listGift[i * 3 + j].imageLink} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">${listGift[i * 3 + j].vietnameseName}</p>
                                </div>
                            </div>
                        </div>`
                }
            }
        }
    }

    //Create carousel control
    listOfResult.innerHTML += `
        <a class="carousel-control-prev" href="#listOfResult" role="button" data-slide="prev" style="opacity:1;">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="opacity:1;width:40px;height:40px;border:5px solid white;border-radius:5px;padding:10px;background-color:salmon"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#listOfResult" role="button" data-slide="next" style="opacity:1;">
            <span class="carousel-control-next-icon"  aria-hidden="true" style="opacity:1;width:40px;height:40px;border:5px solid white;border-radius:5px;padding:10px;background-color:salmon"></span>
            <span class="sr-only">Next</span>
        </a>`
    //Selector all resultGift
    let listGiftSelected = []
    listGift.forEach((value, index) => {
        listGiftSelected.push(document.getElementById(value.nameOfGift))
    })
    console.log(listGift)
    //Creater all result clickable
    for (i = 0; i < listGiftSelected.length; i++) {
        console.log("create for "+listGiftSelected[i].id+" success")
        listGiftSelected[i].addEventListener("click", choiceResult);
    }
}



//---------------------------------------------------------------------------------
function backToHome() {
    document.querySelectorAll('section[style*=block]')[0].style.display = "none";
    document.querySelector('section#homePage').style.display = "block"
    showAllQuestion(questionPages[1].type)
    step = 0
}


//---------------------------------------------------------------------------------
function choiceResult() {
    document.getElementById("listResultPage").style.display = "none";
    document.getElementById("choiceResultPage").style.display = "block";
    choiceGift = this.id
    listOfGift.forEach((value, index) => {
        if (choiceGift === value.nameOfGift) {
            document.getElementById("choiceImage").innerHTML = `<img style="max-width:300px;max-height:300px;" src=${value.imageLink} alt="">`
            document.getElementById("choiceDescription").innerHTML = value.vietnameseName
            document.getElementById("choiceAdress1").innerHTML = `${value.shopInfo[0].name}:<a href=${value.shopInfo[0].link}>${value.shopInfo[0].address}</a>`
            document.getElementById("choiceAdress2").innerHTML = `${value.shopInfo[1].name}:<a href=${value.shopInfo[1].link}>${value.shopInfo[1].address}</a>`
            document.getElementById("choiceAdress3").innerHTML = `${value.shopInfo[2].name}:<a href=${value.shopInfo[2].link}>${value.shopInfo[2].address}</a>`
        }
    })
    console.log(choiceGift)
    step++;
}

//---------------------------------------------------------------------------------
function getAdvice() {
    homePage.style.display = "none"
    questionPage1.style.display = "block"

    step++
}

//---------------------------------------------------------------------------------
function clickBackButton() {
    if (step == 1) {
        backToHome()
        showAllQuestion(questionPages[step - 1].type) //fix lỗi không hiển thị khi back lại
    } else if(step==4){
        showAllQuestion(questionPages[step - 1].type)
        answerPage.style.display = "none"
        questionPages[step - 2].home.style.display = "block"
        answerofQ[step - 2] = ""
        step--
    }
    {
        showAllQuestion(questionPages[step - 1].type)
        questionPages[step - 1].home.style.display = "none"
        questionPages[step - 2].home.style.display = "block"
        answerofQ[step - 2] = ""
        step--
    }
    console.log(step)
}

//---------------------------------------------------------------------------------
function loadingResultPage() {
    let progress = document.getElementsByClassName("progress")
    for (let i = 0; i < 4; i++) {
        setTimeout(function () {
            if (i < 3) {
                progress[0].innerHTML = `<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: ${(i + 1) * 33}%">${(i + 1) * 33}%</div>`
            } else {
                progress[0].innerHTML = `
                    <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="background-color:salmon">DONE</div>` }
        }, i * 1000);
    }
    setTimeout(addResult(answerofQ), 3000)
}

//---------------------------------------------------------------------------------
function addingQuestion(nameOfQuestions, location) {

    nameOfQuestions.forEach(function (kindEvent) {
        let newlist = `  
        <li>
            <button id=${kindEvent.Name} class="answerQuestion${location} question-button">
                <img class="question-image" src=${kindEvent.linkImage}>
                <p>${kindEvent.vieName}</p>
            </button>
        </li>`
        document.getElementById("gallery-ques-" + location).innerHTML += newlist
    })
}

//---------------------------------------------------------------------------------

function hiddingSomeQuestion(answer, array) {
    array.forEach(function (foundItem) {
        if (!(foundItem.prvAnswer === "all")) {
            if (!foundItem.prvAnswer.includes(answer)) {
                document.getElementById(foundItem.Name).parentElement.hidden = true
            }
        }
    })
}

function showAllQuestion(array) {
    array.forEach(function (foundItem) {
        document.getElementById(foundItem.Name).parentElement.hidden = false
    })
}

function checkAnswer(answers, gift) {
    console.log("Check ",gift.nameOfGift)
    let checkGender = (gift.genderSuits === "both") || (answers[0] === gift.genderSuits)
    console.log("Check gender result:",checkGender)
    let checkRelationShips = gift.relationShips.includes(answers[1]) 
    console.log("Check relationShips result:",checkRelationShips)
    let checkEvent = gift.situationSuits.includes(answers[2])|| (gift.situationSuits=="AllEvents")
    console.log("User answer is:",answers[2])
    console.log("Check answer is:",gift.situationSuits)
    console.log("Check check event result:",checkEvent)
    console.log(checkGender && checkRelationShips && checkEvent)
    if (checkGender && checkRelationShips && checkEvent) {
        return (true)
    } else {
        return (false)
    }
}