 let create = document.getElementById('create');
 create.addEventListener('click', createList);

 let count = 0;

 function createList() {
     let id = +document.getElementById("id").value;
     if (typeof(id) !== 'number' || id === undefined || isNaN(id)) {
         alert('ID is not a number');
     }
     let firstName = document.getElementById("firstName").value;
     let lastName = document.getElementById("lastName").value
     let age = +document.getElementById("age").value;
     if (typeof(age) !== 'number' || age === undefined || isNaN(age)) {
         alert('Age is not a number');
     }
     let table = document.getElementsByClassName('table');
     let div = document.createElement('div');
     div.classList.add("row");
     count += 1;

     if (typeof(age) !== 'number' || age === undefined || isNaN(age) || typeof(id) !== 'number' || id === undefined || isNaN(id)) {
         return;

     } else table[0].append(div);
     table += div;

     div.id += count;
     let div1 = document.createElement('div');
     div1.innerHTML = div.id;
     let div2 = document.createElement('div');
     div2.classList.add("fname" + div.id);
     div2.innerHTML = firstName;
     let div3 = document.createElement('div');
     div3.classList.add("sname" + div.id);
     div3.innerHTML = lastName;
     let div4 = document.createElement('div');
     div4.classList.add("age" + div.id);

     if (typeof(age) !== 'number' || age === undefined || isNaN(age)) {
         age === null;
         alert('Age is not a number');
     } else div4.innerHTML = age;

     div.append(div1);
     div.append(div2);
     div.append(div3);
     div.append(div4);

 }

 let del = document.getElementById('delete');
 del.addEventListener('click', deleteEl);

 function deleteEl() {
     let id = document.getElementById("id").value;
     if (confirm('Are you sure to delete this record ?')) {
         let el = document.getElementById(id);
         console.log(el);
         el.remove();
     }
 }

 let update = document.getElementById('update');
 console.log(update);
 update.addEventListener('click', updateEl);

 function updateEl() {
     let id = document.getElementById("id").value;

     let el = document.getElementById(id);

     console.log(el);
     if (el) {
         let fname = document.querySelector('.fname' + id);
         let sname = document.querySelector('.sname' + id);
         let ag = document.querySelector('.age' + id);
         let firstName = document.getElementById("firstName").value;
         let lastName = document.getElementById("lastName").value;
         let age = +document.getElementById("age").value;
         fname.innerHTML = firstName;
         sname.innerHTML = lastName;
         if (typeof(age) !== 'number' || age === undefined || isNaN(age)) {
             age === null;
             alert('Age is not a number');
         } else ag.innerHTML = age;

     }
 }