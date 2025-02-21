import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;

/* import FileBrowser from "./components/molecules/FileBrowser";
import Folders from "./components/organisms/Folders";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="flex rounded-md bg-white flex-col h-screen justify-between items-center ">
      <div className="flex justify-between w-full h-full">
    <div className="border-r-2 rounded-tl-md h-full p-1">
            <h2>Folders</h2>
            <ul>
                <li><a href="/Users/caracol/Baul/Coding Proyects/Hojas/src">Hojas</a></li>
                <li><a href="/Users/caracol/Baul/Coding Proyects">Coding Projects</a></li>
                <li><a href="/Users/caracol/Baul">Baul</a></li>
                <li><a href="/Users/caracol">Home</a></li>
            </ul>
        </div>
        <FileBrowser />
        <div className="w-full rounded-md overflow-scroll ">
          <TextEditor />
        </div>
      </div>
      <div className="flex fixed rounded-b-md bg-green bottom-0 justify-between px-4 h-6 text-xs w-screen">
        <div className="flex items-center">
          <p>Folders</p>
        </div>
        <div className="flex items-center gap-2">
          <span>Ln 17, Col 1</span>
          <span>51 words</span>
          <div className="ml-4">
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 */
