import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getDate(),
  },
  {
    id: 1,
    isDone: false,
    content: "청소하기",
    date: new Date().getDate(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getDate(),
  },
];

function App() {
  const [todos, setTodos] = useState([mockData]);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
