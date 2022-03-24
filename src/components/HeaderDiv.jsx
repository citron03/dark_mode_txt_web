import { useMode } from "../context/ThemproviderModed";
import { IoIosCloudyNight } from 'react-icons/io';
import { BsSunrise } from 'react-icons/bs';

const HeaderDiv = () => {

    const [isDarkMode, toggleMode] = useMode();
    // console.log("다크 모드? : " + isDarkMode);

    return (
        <div>
            <h1>다크 모드 적용 확인</h1>
            {isDarkMode ? 
                <IoIosCloudyNight onClick={toggleMode} /> : 
                <BsSunrise onClick={toggleMode} /> }
        </div>
    );
}

export default HeaderDiv;