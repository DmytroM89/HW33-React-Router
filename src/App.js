import './App.css';
import ToDo from "./components/ToDo/ToDo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ToDoDetails from "./components/ToDo/ToDoDetails/ToDoDetails";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<ToDo />} />
            <Route path="todo/:id" element={<ToDoDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
