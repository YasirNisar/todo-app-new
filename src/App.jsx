import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./pages/Todos.jsx"
import CreateTodo from "./pages/CreateTodo.jsx";
import TodoProvider from "./context/TodoProvider.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
  
    <TodoProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header/>

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/create" element={<CreateTodo />} />
            </Routes>
          </main>

          <Footer/>
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;
