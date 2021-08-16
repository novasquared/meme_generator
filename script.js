function createMeme(img, topText, bottomText) {
    // find section for meme and create elements
    let section = document.getElementById("memeDisplay");
    let newDiv = document.createElement("div");
    let image = document.createElement('img');
    let top_text = document.createElement('p');
    let bottom_text = document.createElement('p');

    // append elements to the correct sections
    section.appendChild(newDiv);
    newDiv.appendChild(top_text);
    newDiv.appendChild(bottom_text);

    // add classes to each element
    newDiv.classList.add("meme");

    newDiv.style.backgroundImage = `url('${img}')`;

    // add paragraph text
    top_text.innerText = topText;
    bottom_text.innerHTML = bottomText;
}

function getMemeInfo(e) {
    e.preventDefault();
    let memeInfo = document.getElementsByClassName('memeInfo');
    let tempArr = [];
    for (let i = 0; i < memeInfo.length; i++) {
        tempArr.push(memeInfo[i].value);
    }
    // clear form data
    memeInfo[0].parentElement.reset();

    createMeme(...tempArr);
}

function deletePrompt(e) {
    if (e.target.classList.contains("meme") || e.target.parentElement.classList.contains("meme")) {
        let result = confirm("Do you really want to delete this meme?", "Yes", "No");
        if (result === true) {
            if (e.target.classList.contains("meme")) {
                e.target.remove();
            }
            else {
                e.target.parentElement.remove();
            }
        } 
    }
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", getMemeInfo);

let section = document.getElementById("memeDisplay");
section.addEventListener("click", deletePrompt);