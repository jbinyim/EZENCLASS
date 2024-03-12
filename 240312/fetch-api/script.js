// API
// application programming interface

// const xhr = new XMLHttpRequest();

// const renderHTML = (contents) => {
//   let output = "";
//   for (let content of contents) {
//     output += `
//     <h2>${content.name}</h2>
//     <ul>
//       <li>전공 : ${content.major}</li>
//       <li>학년 : ${content.grade}</li>
//     </ul>
//     <hr/>
//     `;
//   }
//   document.querySelector("#result").innerHTML = output;
// };

// xhr.open("GET", "student-2.json", true);
// xhr.send();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);

//     renderHTML(students);
//   }
// };

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";

    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
      <ul>
          <li>전공 : ${student.major}</li>
          <li>학년 : ${student.grade}</li>
      </ul>
      <hr/>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  });
