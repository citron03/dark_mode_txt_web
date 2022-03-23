import { useMode } from "../context/ThemproviderModed";

const TextDivision = () => {

    const [isDarkMode, toggleMode] = useMode();
    console.log("다크 모드? : " + isDarkMode);
    return (
        <div>
            <h1>다크 모드 적용 확인</h1>
            <button onClick={toggleMode}>클릭</button>
        </div>
    );
}

export default TextDivision;