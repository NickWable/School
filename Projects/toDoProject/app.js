document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("task").value;
  
      // Create the remove button
      let removeButton = createRemoveButton();
      
      todoList.appendChild(newTodo);
      newTodo.appendChild(removeButton);
      todoForm.reset();
  
      // Save to localStorage
      savedTodos.push({ task: newTodo.innerText, isCompleted: false });
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    });
  
    todoList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        const currentStyle = event.target.style.textDecoration;
        if (currentStyle === "line-through") {
          event.target.style.textDecoration = "none";
        } else {
          event.target.style.textDecoration = "line-through";
        }
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
  
        // Remove the corresponding item from savedTodos
        const taskText = event.target.parentNode.innerText;
        savedTodos = savedTodos.filter(item => item.task !== taskText);
        localStorage.setItem("todos", JSON.stringify(savedTodos));
      }
    });
  
    // Retrieve from localStorage and create list items
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < savedTodos.length; i++) {
      let newTodo = document.createElement("li");
      newTodo.innerText = savedTodos[i].task;
      if (savedTodos[i].isCompleted) {
        newTodo.style.textDecoration = "line-through";
      }
      
      // Create the remove button
      let removeButton = createRemoveButton();
      newTodo.appendChild(removeButton);
      
      todoList.appendChild(newTodo);
    }
  
    // Function to create a remove button
    function createRemoveButton() {
      let removeButton = document.createElement("button");
      removeButton.innerText = "X";
      removeButton.addEventListener("click", function(event) {
        event.target.parentNode.remove();
        const taskText = event.target.parentNode.innerText;
        savedTodos = savedTodos.filter(item => item.task !== taskText);
        localStorage.setItem("todos", JSON.stringify(savedTodos));
      });
      return removeButton;
    }
  });