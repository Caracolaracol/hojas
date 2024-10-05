import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="flex rounded-md bg-white flex-col h-screen justify-between items-center pt-[30px]">
      <div className="w-full rounded-md overflow-scroll ">
        <TextEditor />
      </div>
      <div className="flex fixed rounded-b-md bg-white bottom-0 justify-between px-4 border-[1px] h-6 text-xs w-screen">
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
