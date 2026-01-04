import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<TaskPage />} />
    </Routes>
  );
}

export default App;
