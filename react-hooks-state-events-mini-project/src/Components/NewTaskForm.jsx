import React from 'react'

function NewTaskForm({ categories, onTaskFormSubmit }) {
    const [taskText, setTaskText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  
    const handleTextChange = (e) => setTaskText(e.target.value);
    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onTaskFormSubmit({ text: taskText, category: selectedCategory });
      setTaskText('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={taskText} onChange={handleTextChange} placeholder="Task" />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.filter((category) => category !== 'All').map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
    );
  }
  

export default NewTaskForm