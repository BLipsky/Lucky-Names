const nameArray = [];

function addName() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();
  
  // Check if the input is empty
  if (name === "") {
    alert("Please enter a name!");
    return; // Exit the function if the input is empty
  }
  
  nameArray.push(name);
  displayNames();
  nameInput.value = "";
}

function displayNames() {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = "";
  for (let i = 0; i < nameArray.length; i++) {
    const name = nameArray[i];

    const li = document.createElement("li");
    li.className = "list-group-item";
    const span = document.createElement("span");
    span.textContent = name;

    li.appendChild(span);

    nameList.appendChild(li);
  }
}

// Function to pick a random name from the array
function pickRandomName() {
  // Get the element to display the random name
  const randomNameDiv = document.getElementById("randomName");
  // Clear the previous random name
  randomNameDiv.textContent = "";

  // Generate a random index within the range of the names array
  const randomNumber = Math.floor(Math.random() * nameArray.length);
  // Get the random name using the random index
  const randomName = nameArray[randomNumber];

  // Apply animation to list items
  const listItems = document.querySelectorAll('.list-group-item');
  listItems.forEach(item => {
    item.style.animation = 'none';
    item.offsetHeight; /* trigger reflow */
    item.style.animation = null;
  });

  // Display the random name with animation
  randomNameDiv.textContent = randomName;

  // Remove the picked name from the array
  nameArray.splice(randomNumber, 1);

  // Update the displayed names
  displayNames();
}


document.getElementById('addNameBtn').addEventListener("click", addName);
document
  .getElementById('pickRandomBtn')
  .addEventListener('click', pickRandomName);
document.getElementById('nameInput').addEventListener("keypress", function(event) {
  if (event.key === 'Enter') {
      if (document.getElementById("nameInput").value.trim() === "") {
          alert("Please enter a name!");
          return false; // Return false to prevent further processing
      } else {
          addName(); // Call the addName function when Enter is pressed
      }
  }
});
