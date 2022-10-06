import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './commponents/Header';
import Note from "./pages/Note";
import NotesList from './pages/NotesList';

function App() {
  return (
      <div className="App">
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" element={ <NotesList/> } />
            <Route path="/:id" element={ <Note/> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
