const nameArray = []; // CREATE A LIST TO STORE NAMES

function addName() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim(); //GET A TRIMMED VERSION OF THE NAME FROM THE INPUT BOX
  nameArray.push(name);
  displayNames();
  nameInput.value = "";
}

function displayNames() {
  const nameList = document.getElementById("nameList"); //GET UL ELEMENT
  nameList.innerHTML = ""; //CLEARS THE LIST

  for (let i = 0; i < nameArray.length; i++) {
    //0 IS THE FIRST TIME THROUGH THE LOOP
    const name = nameArray[i]; //GET THE CURRENT NAME FROM THE ARRAY

    const li = document.createElement("li");
    li.className = "list-group-item";
    const span = document.createElement("span");
    span.textContent = name;

    li.appendChild(span); //PUTS SPAN TAG INSIDE OF LI

    nameList.appendChild(li);
  }
}

document.getElementById("addNameBtn").addEventListener("click", addName);
