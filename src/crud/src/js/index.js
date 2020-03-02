let id = document.getElementById("id");
const firstName = document.getElementById("firstName").value;

const lastName = document.getElementById("lastName").value;
const age = +document.getElementById("age").value;
const table = document.getElementsByClassName('table');
let create = document.getElementById('create');
let update = document.getElementById('update');
let del = document.getElementById('delete');
let read = document.getElementById('read');
let row = document.getElementsByClassName('row')
let allArr = document.querySelectorAll('.data');
let state = [];
let idArr = [];
let newRow;





function createList() {

    if (allArr[0].value == 0 || allArr[0].value == '') return alert('ID is not anumber');
    for (let j = 0; j <= 3; j++) {
        if (allArr[j].value == 0 || allArr[j].value == '') return alert('Some fields are empty!');
    }
    for (let iter = 1; iter <= table[0].childNodes.length - 1; iter++) {

        if (allArr[0].value == table[0].childNodes[iter].childNodes[0].innerText) {

            return alert('Such Id exists!');

        }

    }
    let div = document.createElement('div');
    div.className = "row";

    for (let i = 0; i < 4; i++) {

        let div1 = document.createElement('div');



        div1.append(allArr[i].value);

        div.append(div1);


        table[0].append(div);

    }
    
}

function createUpdate() {

    for (let iter = 1; iter <= table[0].childNodes.length - 1; iter++) {

        if (allArr[0].value == table[0].childNodes[iter].childNodes[0].innerText) {

            table[0].childNodes[iter].childNodes[1].innerText = allArr[1].value;

            table[0].childNodes[iter].childNodes[2].innerText = allArr[2].value;

            table[0].childNodes[iter].childNodes[3].innerText = allArr[3].value;

        }

    }

  

}

function deleteList() {

    for (let iter = 1; iter <= table[0].childNodes.length - 1; iter++) {

        if (allArr[0].value == table[0].childNodes[iter].childNodes[0].innerText) {

            table[0].childNodes[iter].remove();

        }

    }
    clear();
}

function createPerson() {

    const person = {

        id: allArr[0].value,

        firstName: allArr[1].value,

        lastName: allArr[2].value,

        age: allArr[3].value

    }

    for (let iter = 1; iter <= table[0].childNodes.length - 1; iter++) {

        if (allArr[0].value == table[0].childNodes[iter].childNodes[0].innerText) {

            return;

        }

    }
    state.push(person);

    localStorage.setItem('person_state', JSON.stringify(state));

    return person;

}

function createListFromState(stateObj) {

    let div = document.createElement('div');
    div.className = 'row';



    for (let i of['id', 'firstName', 'lastName', 'age']) {

        let div1 = document.createElement('div');



        div1.append(stateObj[i]);

        div.append(div1);
        table[0].append(div);

    }
}

function readState() {

    state = JSON.parse(localStorage.getItem('person_state'));

    for (let iter in state) createListFromState(state[iter]);

}

function deleteStateUser(s) {

    for (let i in s) {

        if (s[i].id == allArr[0].value) s.splice(i, 1)

    }

    localStorage.setItem('person_state', JSON.stringify(s));

}

function updateStateUser(s) {

    for (let i in s) {

        console.log(s[i]);

        if (s[i].id == allArr[0].value) {

            s[i].firstName = allArr[1].value;

            s[i].lastName = allArr[2].value;

            s[i].age = allArr[3].value;

        }

    }

    localStorage.setItem('person_state', JSON.stringify(s));

}




create.addEventListener('click', () => {

    newRow = createPerson();

    createList(newRow);
});

update.addEventListener('click', () => {

    if (state != []) updateStateUser(state);

    createUpdate()
});

del.addEventListener('click', () => {

    if (state != []) deleteStateUser(state);

    deleteList();

});

read.addEventListener('click', readState);