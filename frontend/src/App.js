import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>

  //   <div>
  //   <h1>Task Manager</h1>
  //   <TaskList />
  // </div>
  );
}

export default App;
