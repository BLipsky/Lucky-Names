const nameArray = []; //Create a list to store names

function addName() {
  const nameInput = getElementById('nameInput');
  const name = document.getElementById('nameInput').value.trim(); //Get a trimmed value
  nameArray.push(name);
  displayNames();
  nameInput.value = ''
}

function displayNames() {
  const nameList = document.getElementById('nameList');
  nameList.innerHTML = ''

  for (let i = 0; i < nameArray.length; i++){
    const name = nameArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)

  }
}

document.getElementById('addNameBtn').addEventListener('click', addName);
