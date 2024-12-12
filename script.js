const inputfield = document.querySelector(".input-field").firstElementChild
const todoList = document.querySelector(".todoLists")
const pendingNum = document.querySelector(".pending-num")
const clearButton = document.querySelector(".clear-button")

function allTasks(){
  let tasks = document.querySelectorAll(".pending")
  pendingNum.innerHTML = tasks.length==0?"no":tasks.length;
}

inputfield.addEventListener("keyup",(e) =>{
  let inputVal = inputfield.value.trim()
    
  if(e.key === "Enter" && inputVal.length>0){
    let liTag = `<li class="list pending " >
      <input type="checkbox"  onclick="handleStatus(this)">
      <span class="task">${inputVal}</span>
      <i class="uil uil-trash trash" onclick= "handleRemove(this)"></i>
    </li>`
    todoList.insertAdjacentHTML("beforeend", liTag);
    inputfield.value = ""
    document.querySelectorAll("pending")
  }
  allTasks()
})

function handleStatus(e){
 const checkbox = e
 checkboxChecked = checkbox.checked ? true : false
 e.parentElement.classList.toggle("pending")
 allTasks()
}

function handleRemove(e){
  e.parentElement.remove()
  allTasks()
}

clearButton.addEventListener("click", (e) =>{
  let tasks = document.querySelectorAll(".list") 
  if(tasks.length>0){
   tasks.forEach(item => item.remove())
  }
  allTasks()
})

