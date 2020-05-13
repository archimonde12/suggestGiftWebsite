
function addResult(answerofQ) {
    //Add all result Gift
    let listGift = []
    document.getElementsByClassName("progress")[0].hidden = true
    document.getElementById("titleOfListGift").hidden = false

    listOfGift.forEach((gift) => {
        if (checkAnswer(answerofQ, gift)) {
            listGift.push(gift)
        }
    })

    
    let numberOfPage
    if(listGift.length % 3 != 0){
        numberOfPage=Math.floor(listGift.length / 3)
    } else {
        numberOfPage=Math.floor(listGift.length / 3)-1
    }
    if (listGift == 0) { console.log("Cannot find a gift") }
    //Create numbers of carousel indicator
    let listOfResult = document.getElementById("listOfResult")
    listOfResult.innerHTML = `<ol class="carousel-indicators"></ol>
    <div class="carousel-inner"></div>`
    let carouselIndicators = document.querySelectorAll("#listOfResult .carousel-indicators")[0]
    carouselIndicators.innerHTML = ""
    for (let i = 0; i <= numberOfPage; i++) {
        if (i == 0) {
            carouselIndicators.innerHTML += `<li data-target="#listOfResult" data-slide-to="0" class="active" style="background-color: red;">
            </li>`
        }
        else {
           
                carouselIndicators.innerHTML += `<li data-target="#listOfResult" data-slide-to="${i}" style="background-color: red;"></li>`

        } 
    }

    //Create numbers of carousel items
    let carouselInner = document.querySelectorAll("#listOfResult .carousel-inner")[0]
    carouselInner.innerHTM = ""
    for (let i = 0; i <= numberOfPage; i++) {
        if (i == 0) {
            carouselInner.innerHTML += ` 
            <div class="carousel-item active" style="background-image:none">
                <div class="container">
                    <div class="row">
                    </div>
                </div>
            </div>`
            let row = document.querySelectorAll(".carousel-item .container .row")[document.querySelectorAll(".carousel-item .container .row").length - 1]
            for (let j = 0; j < 3; j++) {
                if (listGift[i * 3 + j]) {
                    row.innerHTML += `
                        <div class="col-sm">
                            <div class="card">
                                <div class="hover-background"> <a href="${step[6]}"><button id="${listGift[i * 3 + j].nameOfGift}"><i class="fas fa-heart fa-2x"></i></button></a></div>
                                <img src=${listGift[i * 3 + j].imageLink} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">${listGift[i * 3 + j].vietnameseName}</p>
                                </div>
                            </div>
                        </div>`
                }
            }

        } else {
            carouselInner.innerHTML += `
            <div class="carousel-item" style="background-image:none">
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
                                <div class="hover-background"><a href="${step[6]}"><button id="${listGift[i * 3 + j].nameOfGift}"><i class="fas fa-heart fa-2x"></i></button></a></div>
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
    if (Math.floor(listGift.length / 3) > 0) { //Fix lỗi hiển thị carousel control khi chỉ có 1 trang
        listOfResult.innerHTML += `
        <a class="carousel-control-prev" href="#listOfResult" role="button" data-slide="prev" style="opacity:1;">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="opacity:1;width:40px;height:40px;border:5px solid white;border-radius:5px;padding:10px;background-color:salmon"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#listOfResult" role="button" data-slide="next" style="opacity:1;">
            <span class="carousel-control-next-icon"  aria-hidden="true" style="opacity:1;width:40px;height:40px;border:5px solid white;border-radius:5px;padding:10px;background-color:salmon"></span>
            <span class="sr-only">Next</span>
        </a>`
    } else {
        listOfResult.innerHTML += `
        <a class="carousel-control-prev" href="#listOfResult" role="button" data-slide="prev" style="opacity:1;">
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#listOfResult" role="button" data-slide="next" style="opacity:1;">
            
            <span class="sr-only">Next</span>
        </a>`
    }
    //Selector all resultGift
    let listGiftSelected = []
    listGift.forEach((value, index) => {
        listGiftSelected.push(document.getElementById(value.nameOfGift))
    })
    //Creater all result clickable
    for (i = 0; i < listGiftSelected.length; i++) {
        listGiftSelected[i].addEventListener("click", choiceResult)
        let selectordiv = listGiftSelected[i].parentElement.parentElement.parentElement
        selectordiv.addEventListener("mouseover", function () {
            console.log(this.children[1].src)
            console.log("Mouse Over")
            this.parentElement
            // this.parentElement.parentElement.style.backgroundImage=`url`
        })
    }
}


//---------------------------------------------------------------------------------
function choiceResult() {
    localStorage.setItem("choiceGift", this.id)
}
//---------------------------------------------------------------------------------
function LoadingchoicedResultPage(choiceGift) {
    listOfGift.forEach(function (gift) {
        if (gift.nameOfGift === choiceGift) {
            document.getElementById("namePd").innerHTML = gift.vietnameseName
            document.getElementById("imagePd").src = gift.imageLink
            document.getElementById("zoomImage").style.backgroundImage = `url(${gift.imageLink})`
            document.getElementById("map1").innerHTML = `<i class="fa fa-search"></i>${gift.shopInfo[0].name}`
            document.getElementById("map1").href=gift.shopInfo[0].link
            document.getElementById("map2").innerHTML = `<i class="fa fa-search"></i>${gift.shopInfo[1].name}`
            document.getElementById("map2").href=gift.shopInfo[1].link
            document.getElementById("map3").innerHTML = `<i class="fa fa-search"></i>${gift.shopInfo[2].name}`
            document.getElementById("map3").href=gift.shopInfo[2].link
            document.getElementById("adress1").innerHTML = gift.shopInfo[0].address
            document.getElementById("adress2").innerHTML = gift.shopInfo[1].address
            document.getElementById("adress3").innerHTML = gift.shopInfo[2].address
        }
    })
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
    // Show Question
    nameOfQuestions.forEach(function (kindEvent) {
        let questiondetails
        if (location == 4) {
            questiondetails = `
            <p>${kindEvent.vieName}</p>
            <p>${convertMoneyToMoreStyle(kindEvent.minValue)}-${convertMoneyToMoreStyle(kindEvent.maxValue)} VNĐ</p>`
        } else {
            questiondetails = `<p>${kindEvent.vieName}</p>`
        }

        let newlist = `  
        <a href="${step[location + 1]}">
            <button id=${kindEvent.Name} class="answerQuestion${location} question-button btn btn-info addstyle Answer">
                <img class="question-image" style="width:200px;height:200px" src=${kindEvent.linkImage}>
                ${questiondetails}
            </button>
        </a>`
        document.getElementById("allInAnswer" + location).innerHTML += newlist
    })
    //Save user answer
    nameOfQuestions.forEach(function (kindEvent) {
        document.getElementById(kindEvent.Name).addEventListener("click", function () {
            localStorage.setItem("answerOfQuestion" + location, this.id)
        })
    })
}

//---------------------------------------------------------------------------------

function hiddingSomeQuestion(lastAnswer, array) {
    array.forEach(function (foundItem) {
        if (!(foundItem.prvAnswer === "all")) {
            if (!foundItem.prvAnswer.includes(lastAnswer)) {
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
    //Kiểm tra giới tính
    let checkGender = (gift.genderSuits === "both") || (answers[0] === gift.genderSuits) || (answers[0] === "both")
    //Kiểm tra mối quan hệ
    let checkRelationShips = gift.relationShips.includes(answers[1])
    //Kiểm tra sự kiện
    let checkEvent = gift.situationSuits.includes(answers[2]) || (gift.situationSuits == "AllEvents")
    //Kiểm tra giá 
    let minPrice;
    let maxPrice;
    switch (answers[3]) {
        case "Budget":
            minPrice = 0;
            maxPrice = 200000;
            break;
        case "Medium":
            minPrice = 200000;
            maxPrice = 1000000;
            break;
        case "Expensive":
            minPrice = 1000000;
            maxPrice = 5000000;
            break;
        case "Luxury":
            minPrice = 5000000;
            maxPrice = 99999999;
            break;
        default:
        // code block
    }
    console.log(minPrice, maxPrice)
    let checkPrice = !((gift.minPrice > maxPrice) || (gift.maxPrice < minPrice))
    if (checkGender && checkRelationShips && checkEvent && checkPrice) {
        return (true)
    } else {
        return (false)
    }
}

function convertMoneyToMoreStyle(value) {
    if (value / 1000000 >= 1) { return (value / 1000000 + "M") } else {
        return (value / 1000 + "K")
    }

}