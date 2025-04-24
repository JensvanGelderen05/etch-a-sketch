const container = document.querySelector(".container");
const button = document.querySelector("#change")

//INITIALIZE 16x16 grid

for(let i = 0; i<16; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.display = "flex"
    container.appendChild(row);
}

const rows = document.querySelectorAll(".row");

rows.forEach((row)=>{
    for(let i = 0; i<16; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    }
})

//Coloring 

container.addEventListener("mouseover", (e)=>{
    if(e.target.classList.contains("box")){
        e.target.classList.add("touchedBox");
    }
})

//Change amount of pixels
button.addEventListener("click", ()=>{
    let choice = Number(prompt("Give the size of the new grid (e.g. 20)"));
    while(!validChoice(choice)){
        alert("That is not a valid input, try again");
        choice = Number(prompt("Give the size of the new grid (e.g. 20)"));
    }
    changeGrid(choice);
})

function validChoice(choice){
    if(!Number.isInteger(choice)){
        return false;
    }
    else if(choice<=0 || choice >100){
        return false;
    }
    return true;
}

function changeGrid(choice) {
    container.replaceChildren();

    for(let i = 0; i<choice; i++){
        const row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j<choice; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }

        container.appendChild(row);
    }
}

