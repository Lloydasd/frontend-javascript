interface Student {
  firstName : string;
  lastName : string;
  age : number;
  location : string;
}

let student1 : Student = {
  firstName : 'Lloyd',
  lastName : 'Asiedu',
  age : 20,
  location : 'Greater Accra'
};

let student2 : Student = {
  firstName : 'Daniel',
  lastName : 'Rogers',
  age : 24,
  location : 'Greater Accra'
}

let studentsList: Student[] = [student1, student2]

let studenthtml = `
                    <tr>
                    <th>Firstname</th>
                    <th>Location</th>
                    </tr>`;

studentsList.forEach((students)=>{
  studenthtml = studenthtml + `
                  <tr>
                    <td>${students.firstName}</td>
                    <td>${students.location}</td>
                  </tr>`
});

const body = document.body;

const tableElement = document.createElement('table');


tableElement.innerHTML = studenthtml;

body.appendChild(tableElement);

