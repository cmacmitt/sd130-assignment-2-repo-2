const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 

function addToList(list){
  list.insertAdjacentHTML(`afterbegin`, `
  <li>Johnny</li>
  <li>Creston</li>
  <li>Chet</li>
  `);
  addName.disabled = true;
}

addName.addEventListener('click', function(){addToList(nameList)});