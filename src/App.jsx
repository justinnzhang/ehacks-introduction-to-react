import { useState } from 'react';

import './App.css';

const EXAMPLE_DATA = [
  {
    name: 'Item 1',
    description: 'This is item 1',
    completed: false,
  },
  {
    name: 'Item 2',
    description: 'This is item 2',
    completed: false,
  },
  {
    name: 'Item 3',
    description: 'This is item 3',
    completed: true,
  },
];

function App() {
  const [items, setItems] = useState(EXAMPLE_DATA);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function updateCompletion(index) {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;

    setItems(newItems);
  }

  function addItem() {
    const newItems = [...items];
    newItems.push({
      name,
      description,
      completed: false,
    });

    setItems(newItems);

    setName('');
    setDescription('');
  }

  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className='App'>
      <header className='App-header'>My Todo App</header>
      <div className='body'>
        <div className='add-new-bar'>
          <label style={{ paddingRight: '1rem' }}>
            Name:{' '}
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label style={{ paddingRight: '1rem' }}>
            Description:{' '}
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button onClick={addItem}>Add Item</button>
        </div>
        {items.map(({ name, description, completed }, index) => (
          <div
            className='item'
            key={index}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            <button className='delete-button' onClick={() => deleteItem(index)}>
              Delete
            </button>
            <h3>{name}</h3>
            <p>{description}</p>
            <button onClick={() => updateCompletion(index)}>
              {completed ? 'Uncomplete' : 'Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
