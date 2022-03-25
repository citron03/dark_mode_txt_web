import { useMode } from "../context/ThemproviderModed";
import { IoIosCloudyNight } from 'react-icons/io';
import { BsSunrise } from 'react-icons/bs';
import styled from 'styled-components';

const HeaderDivStyled = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    padding: 1rem;
`

const HeaderDiv = () => {

    const [isDarkMode, toggleMode] = useMode();
    // console.log("다크 모드? : " + isDarkMode);

    return (
        <HeaderDivStyled>
            <h1>더블 클릭 해보세요!</h1>
            {isDarkMode ? 
                <IoIosCloudyNight onClick={toggleMode} size="50" /> : 
                <BsSunrise onClick={toggleMode} size="50" /> }
        </HeaderDivStyled>
    );
}

export default HeaderDiv;