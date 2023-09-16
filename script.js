const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession === "developer") {
console.log("Developer:",data[i].name);

}
}
}

// 2. Add Data
function addData() {
  const name = prompt("Enter the name:");
  const age = parseInt(prompt("Enter the age:"));
  const profession = prompt("Enter the profession:");

  if (name && !isNaN(age) && profession) {
    data.push({name, age, profession });
    console.log("Data added.");
    console.log(data);
  } else {
    console.log("Invalid input. Data not added.");
  }
}

// 3. Remove Admins
function removeAdmin() {
  const admins = data.filter(person => person.profession === "admin");
  const data1 = data.filter(person => person.profession !== "admin");
 console.log("Removed admin:",admins);
 console.log("After removing admin:" ,data1);
}

// 4. Concatenate Array
function concatenateArray() {
  const arr=[
    { name: "Sujan", age: 23, profession: "developer" },
  { name: "Devraj", age: 27, profession: "developer" },
  ];
  console.log("concatenated Array:", data.concat(arr));
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((initial, final) => initial + final.age, 0);
  const avgAge = totalAge / data.length;
  console.log("Average Age:", avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);
  console.log("Is there anyone above 25?", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(person => person.profession))];
  console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i=0;i<data.length;i++){
    if(data[i].name==="john"){
         data[i].profession="manager";
         console.log("Updated Johns Profession:",data[i]);
    }
}
}

// 10. Profession Count
function getTotalProfessions() {
  const developersCount = data.filter(person => person.profession === "developer").length;
  const adminsCount = data.filter(person => person.profession === "admin").length;
  console.log(`Total Developers: ${developersCount}, Total Admins: ${adminsCount}`);
}
