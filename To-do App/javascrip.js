const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// function to create todo item
function createTodoItem(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox">
    <span>${text}</span>
    <button>Delete</button>
  `;
  ul.appendChild(li);
}

// add todo item on form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    createTodoItem(text);
    input.value = '';
  }
});

// delete todo item on button click
ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentNode;
    ul.removeChild(li);
  }
});
