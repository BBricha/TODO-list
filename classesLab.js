// Create a TODO list with a text input and button to submit new items
// Allow users to add and delete items from the list
// Use JavaScript classes to manage the TODO list items
// Steps:

// Create an HTML file with a text input and button to add new TODO items. Also, add an empty unordered list to the page to hold the TODO items.
// Create a JavaScript file and link it to the HTML file.
// Create a class called "TodoList" with an array property to hold the list items and methods to add and delete items from the list.
// Create a new instance of the TodoList class and store it in a variable.
// Add an event listener to the form submit button that calls the add() method on the TodoList instance with the value of the text input.
// Implement the add() method on the TodoList class to add a new item to the list.
// Implement the delete() method on the TodoList class to remove an item from the list.
// Add an event listener to each item in the list that calls the delete() method on the TodoList instance with the clicked item.
// Test the application by adding and deleting items from the TODO list.
// The render() method is then called to define the React component that should be rendered.

class TodoList {
    
    constructor() {
      this.items = []
    }


    render() {
        const list = document.getElementById('todo-list')
        list.innerHTML = '';
        this.items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => {
                this.delete(index)})
            list.appendChild(li)
        })
    }   
    delete(index) {
        this.items.splice(index, 1);
        this.render()
      }
    add(item) {
      this.items.push(item);
      this.render()
    }
  
   
}
  
const todoList = new TodoList()
  
const form = document.querySelector('form')
const input = document.getElementById('todo-input')
const button = document.getElementById('todo-button')
  
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.trim()
    if (value !== '') {
      todoList.add(value);
      input.value = ''
    }
})
  
