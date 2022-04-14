import "./styles.css";
import { Header } from "./components/Header/Header.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header count={count} />
      <button onClick={() => dispatch({ type: "increment" })}>Плюс</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Минус</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
