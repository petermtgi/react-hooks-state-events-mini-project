import React from 'react'

function App() {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Learn React', category: 'Work' },
      { id: 2, text: 'Buy groceries', category: 'Personal' },
      { id: 3, text: 'Read a book', category: 'Leisure' },
    ]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Work', 'Personal', 'Leisure'];
  
    const handleCategoryClick = (category) => setSelectedCategory(category);
  
    const handleTaskFormSubmit = (newTask) => {
      const updatedTasks = [...tasks, { ...newTask, id: tasks.length + 1 }];
      setTasks(updatedTasks);
    };
  
    const handleTaskDelete = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };
  
    const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);
  
    return (
      <div>
        <CategoryFilter
          categories={categories}
          onCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
        />
        <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
        <NewTaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      </div>
    );
  }

export default App