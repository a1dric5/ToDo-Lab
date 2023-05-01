const TodoList = () => {
    this.items = [];
  
    this.add = (item) => {
      this.items.push(item);
    }
  
    this.delete = (item) => {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
  
  const todoList = new TodoList();
  const form = document.getElementById("todo-form");
  const input = form.querySelector("input");
  const list = document.getElementById("todo-list");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
      todoList.add(text);
      input.value = "";
      renderList();
    }
  });
  
  const renderList = () => {
    list.innerHTML = "";
    for (const item of todoList.items) {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => {
        todoList.delete(item);
        renderList();
      });
      list.appendChild(li);
    }
  }
  