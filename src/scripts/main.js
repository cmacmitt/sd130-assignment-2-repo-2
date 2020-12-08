const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 

let names = ['Johnny', 'Creston', 'Chet'];

addName.addEventListener('click', event => {
  for (let i = 0; i < names.length; i++) {
    const addLi = document.createElement('LI');
    const classmatesNames = document.createTextNode(names[i]);

    addLi.appendChild(classmatesNames);
    nameList.appendChild(addLi);

    event.preventDefault();
  }
})

attendanceContainerEle.body.appendChild(nameList);