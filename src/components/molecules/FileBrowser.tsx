import { useEffect, useState } from "react";
import { readDir } from "@tauri-apps/api/fs";
import Item from "../atoms/Item";
import { hideInutilFiles } from "../../util/files";

interface File {
  name: string;
  isDir: boolean;
  children?: {
    name?: string,
    path?: string
  }[]
}

const FileBrowser = (): JSX.Element => {
  const [files, setFiles] = useState<File[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("/Users/caracol/Baul/Obsidian Vault/Novela");
  const [childrens, setChildrens] = useState<string | boolean>(false)

  useEffect(() => {
    async function getFiles() {
      const contents = await readDir(currentPath, { recursive: true });
      const entries = [
        ...contents,
      ];
      const names = entries.map((entry) => ({
        name: entry.name || "",
        isDir: !!entry.children,
        children: entry.children,
      }));
      setFiles(names);
    }
    getFiles();
  }, [currentPath]);

  async function handleClick(name: string) {
    setChildrens(name)
  }

  function setNewPath(path:string){
    setCurrentPath(path)
  }

  return (
    <div className="border-r-2 rounded-tl-md h-full p-1 min-w-[12rem] overflow-scroll">
      {
        files.map((file: File) => {
          if (hideInutilFiles(file.name)) return null
          return (
            <Item key={file.name} handleClick={handleClick} file={file} >
              {file.children && childrens == file.name && (
                file.children.map((child) => {
                  if (hideInutilFiles(child.name)) return null
                  return (
                    <div className="ml-4">
                      <div>{child.name}</div>
                    </div>
                  )
                })
              )}
            </Item>
          )
        })
      }
    </div>
  );
};
export default FileBrowser;