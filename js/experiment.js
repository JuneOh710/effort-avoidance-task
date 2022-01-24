const RESULTS = {};
const isProduction = false;

function renderNextPage(nextPage) {
    const body = document.getElementsByTagName("body")[0];
    body.innerHTML = PAGES[nextPage];
    if (nextPage == "endingPage") {
        sendResults(RESULTS);
    }
}

function saveResultAndNext(trialNumber, dataType, nextPage) {
    const radioOptions = document.getElementsByClassName("form-check-input");
    let checkedOption;
    for (let i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].checked == true) {
            checkedOption = radioOptions[i].value;
        }
    }
    if (!RESULTS[trialNumber]) {
        RESULTS[trialNumber] = {};
    }

    if (dataType == "difficulty") {
        RESULTS[trialNumber].difficulty = checkedOption;
    } else if (dataType == "correctness") {
        RESULTS[trialNumber].correctness = checkedOption;
    }

    console.log(RESULTS);
    // renderNextPage(nextPage);
    renderQuestion(checkedOption);
}

function activateNext() {
    const btn = document.getElementsByClassName("btn")[0];
    btn.disabled = false;
}

function renderQuestion(difficulty) {
    const body = document.getElementsByTagName("body")[0];
    const questionType = { "easy": EASY_QUESTIONS, "hard": HARD_QUESTIONS }
    let questionHTML;
    let question;

    question = questionType[difficulty][Math.floor(Math.random() * questionType[difficulty].length)];
    // question = [[5, 8, 10, 11], [5, 8, 10, 9], [8, 9, 6, 5], [4, 6, 5, 8]]
    let currentIndex = question.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [question[currentIndex], question[randomIndex]] = [
            question[randomIndex], question[currentIndex]];
    }
    questionHTML = question.map(el => {

        return `
        <div class="form-check mb-5">
                <input class="form-check-input" type="radio" name="flexRadioDefault" value="${el}" id="easy" onclick="activateNext();"
                    required>
                <label class="form-check-label" for="${el}">
                    ${el.join(", ")}
                </label >
            </div >
            `;
    })
    body.innerHTML = questionHTML.join(" ");
}

// how to save final result, I think:
async function sendResults(results) {
    if (isProduction) {
        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }

        fetch("/save", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: results })
        })
            .then(handleErrors)
            .then(response => console.log("Request complete! response: ", response))
            .catch(error => console.log("We got an error: ", error));
    } else {
        console.log("===done===>", results);
    }

}

