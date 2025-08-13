// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-3">
      <div className="flex gap-2 items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img
            className="h-7 w-8 "
            src="public/Tailwind_CSS_Logo.png"
            alt="Tailwind Logo"
          />{" "}
        </a>
      </div>
      <div className="card  text-2xl text-center ">
        <h1 className="">Vite + React + Tailwind</h1>
        <p className="">
          It's a React Template, No need to create project and setup tailwind
        </p>
      </div>
    </div>
  );
}

export default App;
