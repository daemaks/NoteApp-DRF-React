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
            <Route path="/notes" element={ <NotesList/> } />
            <Route path="/notes/:id" element={ <Note/> } />
          </Routes>
        </div>
      </div>
  );
}

export default App;
