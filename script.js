
let entry = document.querySelector("#entry");
let form = document.querySelector("#entryForm");
let saveBtn = document.querySelector("#saveBtn");
let allEntries = document.querySelector("#allEntries");
let EntriesArray = JSON.parse(localStorage.getItem("Enteries")) || [];
let editIndex = null;
form.addEventListener("submit", (e) => {
 e.preventDefault();

 AddEntry();
  Display();

});


function Display() {

    allEntries.innerHTML = "";

    EntriesArray.forEach((item, index) => {

        let div = document.createElement("div");
        div.innerHTML = `
   <p>${item}</p>
     <button onclick="Edit(${index})">Edit</button>
  <button onclick="Delete(${index})">Delete</button>  `;

        allEntries.appendChild(div);
    });
}

function AddEntry() {

    let value = entry.value.trim();

    if (value === "") {
        alert("Please enter your entry");
        return;
    }
if (editIndex === null) {
        EntriesArray.push(value);
    } else {
        EntriesArray[editIndex] = value;
        editIndex = null;
        saveBtn.innerText = "Save";
    }
localStorage.setItem("Enteries", JSON.stringify(EntriesArray));
   entry.value = "";
}
function Edit(index) {
    entry.value = EntriesArray[index];
    editIndex = index;
    saveBtn.innerText = "Update";
}
function Delete(index) {
 EntriesArray.splice(index, 1);
 localStorage.setItem("Enteries", JSON.stringify(EntriesArray));
Display();

}


Display();
