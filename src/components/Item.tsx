interface File {
    name: string;
    isDir: boolean;
}

const Item = ({
    handleClick,
    file,
    children
}: {
    handleClick: (fileName: string) => void;
    file: File;
    children: React.ReactNode;
}): JSX.Element => (
    <div
        key={file.name}
        className={file.isDir ? "dir" : "file"}
        onClick={() => {
            if (!file.isDir) return;
            handleClick(file.name);
        }}
    >
        
        <p className="font-mononokiBold text-lg">
        {file.isDir ? "-" : "->"} {file.name}
        </p>
        <div className="ml-1">
            {children}
        </div>
    </div>
);

export default Item