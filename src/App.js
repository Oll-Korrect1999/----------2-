import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Note from "./components/Note";
import Reference from "./components/Reference";

function App() {
  return (
    /* 画面遷移させるために全体を囲い指定 */
    /* ルーティングしたものを「Routes」囲む */
    /* URLを適用するために「Route」で囲む */
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Referernce" element={<Reference />} />
          <Route path="/Note" element={<Note />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
