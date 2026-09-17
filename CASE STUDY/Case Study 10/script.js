let students = [];

// Get HTML elements
const tableBody = document.getElementById("studentTableBody");
const searchBox = document.getElementById("searchBox");
const statusFilter = document.getElementById("statusFilter");
const message = document.getElementById("message");


// ----------------------------------------------------
// FUNCTION TO DISPLAY STUDENTS
// ----------------------------------------------------

function displayStudents(data) {

tableBody.innerHTML = "";

if (data.length === 0) {

message.textContent =
"No student matches the search/filter criteria.";

return;
}

message.textContent = "";

data.forEach(function(student) {

const row = document.createElement("tr");

let statusClass = "";

if (student.registrationStatus === "Registered") {
statusClass = "status-registered";
}
else if (student.registrationStatus === "Pending") {
statusClass = "status-pending";
}
else if (student.registrationStatus === "Cancelled") {
statusClass = "status-cancelled";
}

row.innerHTML = `
<td>${student.studentName}</td>
<td>${student.prn}</td>
<td>${student.department}</td>
<td>${student.year}</td>
<td>${student.eventName}</td>
<td class="${statusClass}">
${student.registrationStatus}
</td>
`;

tableBody.appendChild(row);
});
}


// ----------------------------------------------------
// SEARCH + FILTER FUNCTION
// ----------------------------------------------------

function filterStudents() {

const searchText =
searchBox.value.toLowerCase();

const selectedStatus =
statusFilter.value;

const filteredStudents = students.filter(function(student) {

const matchesSearch =
student.studentName
.toLowerCase()
.includes(searchText)

||

student.prn
.toLowerCase()
.includes(searchText);


const matchesStatus =
selectedStatus === "All"

||

student.registrationStatus === selectedStatus;


return matchesSearch && matchesStatus;

});

displayStudents(filteredStudents);
}


// ----------------------------------------------------
// JAVASCRIPT FETCH()
// ----------------------------------------------------

document.getElementById("fetchBtn").addEventListener(
"click",
function() {

fetch("students.json")

.then(function(response) {

if (!response.ok) {
throw new Error("JSON file could not be loaded.");
}

return response.json();

})

.then(function(data) {

students = data;

displayStudents(students);

message.textContent =
"Student data loaded successfully using Fetch().";

})

.catch(function(error) {

message.textContent =
"Error: JSON data could not be loaded.";

console.error(error);

});

}
);


// ----------------------------------------------------
// jQUERY $.getJSON()
// ----------------------------------------------------

document.getElementById("jqueryBtn").addEventListener(
"click",
function() {

$.getJSON("students.json")

.done(function(data) {

students = data;

displayStudents(students);

message.textContent =
"Student data loaded successfully using jQuery.";

})

.fail(function() {

message.textContent =
"Error: JSON data could not be loaded.";

});

}
);


// ----------------------------------------------------
// SEARCH EVENT
// ----------------------------------------------------

searchBox.addEventListener(
"input",
filterStudents
);


// ----------------------------------------------------
// FILTER EVENT
// ----------------------------------------------------

statusFilter.addEventListener(
"change",
filterStudents
);
