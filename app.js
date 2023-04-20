const taskEl = document.getElementById("task");
console.log(taskEl);
const listsEl = document.querySelector(".lists");
console.log(listsEl);
const deleteEl = document.getElementById("delete-Btn");
console.log(deleteEl);

function clicked() {
  //
  if (taskEl.value === "") {
    // If it is empty, an alert is displayed informing the user that the input is empty.
    alert("it's empty");
    // else the input is not empty, the function creates a new li element
  } else {
    // creates a new li element
    let li = document.createElement("li");
    // sets its inner HTML to the current value of an input element (taskEl)
    li.innerHTML = taskEl.value;
    // appends this new li element to an existing listsEl element,
    listsEl.appendChild(li);
    // taskEl input element to an empty string, effectively clearing the input field.
    taskEl.value = "";
    //  creates a new span element
    let span = document.createElement("span");
    // sets its inner HTML to the Unicode character "\u00d7" (which is the multiplication sign '×')
    span.innerHTML = " \u00d7";
    // appends it as a child element to the previously created li element.
    li.appendChild(span);
  }
  // The function also calls a saveData() function, which is presumably used to save the new data to a backend database or to local storage.
  saveData();
}

listsEl.addEventListener("click", (e) => {
  if (e.target.tagName === "li") {
    e.target.classlist.toggle("checked");
  } else if (e.target.tagName === "span") {
    e.target.parentElement.remove();
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", listsEl.innerHTML);
}

function getData() {
  listsEl.innerHTML = localStorage.getItem("data");
}
getData();

deleteEl.addEventListener("click", function () {
  console.log("delete");
  const lastTask = listsEl.lastElementChild;
  if (lastTask) {
    lastTask.remove();
  }
});
