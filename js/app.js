const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

const createLi = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  // Edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  li.appendChild(editButton);
  // Remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  li.appendChild(removeButton);
  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();             
  const text = input.value;
  input.value = '';
  const li = createLi(text);
  ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  if (checked) {
    listItem.className += 'responded';
  } else {
    listItem.className = '';
  }
});

ul.addEventListener('click', (e) => {
  if (e.target.textContent === 'Remove') {
    e.target.parentNode.remove();
  }
});
