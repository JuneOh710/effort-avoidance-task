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
    renderNextPage(nextPage);
}

function activateNext() {
    const btn = document.getElementsByClassName("btn")[0];
    btn.disabled = false;
}


function generateQuestion(difficulty) {

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getDigit(position) {
    return getRandomInt(0, 10) * position;
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

