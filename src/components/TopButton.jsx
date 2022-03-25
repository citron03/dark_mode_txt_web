import styled from 'styled-components';
import {useState, useEffect} from "react";
import { useMode } from '../context/ThemproviderModed';

const TopButtonStyled = styled.button`
      opacity: ${({isVisible}) => isVisible ? 1 : 0};
      position: fixed;
      right: 3rem;
      bottom: 3rem;
      border-radius: 2rem;
      padding: 1rem;
      background-color: ${(props) => props.isDark ? "#2f3542" : "#f1f2f6"};
      color: ${(props) => props.isDark ? "white" : "black"};
      font-size: 1.2rem;
      font-family: "GangwonEdu_OTFBoldA";
      border-color: ${(props) => props.isDark ? "white" : "black"};
`;

const TopButton = () => {

    const [coordinateY, setCoordinateY] = useState(0);
    const [isVisibleBtn, setIsVisibleBtn] = useState(false);
    const [isDarkMode] = useMode();

    const handleFollow = () => {
        setCoordinateY(window.pageYOffset);
        if (coordinateY > 220) {
            setIsVisibleBtn(true);
        } else {
            setIsVisibleBtn(false);
        }
    }

    const handleToTop = () => { 
        window.scroll({top: 0, behavior: "smooth"});
        // setCoordinateY(0);
        setIsVisibleBtn(false);
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        watch();
        return() => {
            window.removeEventListener('scroll', handleFollow)
        }
    })

    return (
        <TopButtonStyled onClick={handleToTop} 
            isVisible={isVisibleBtn}
            isDark={isDarkMode}>
            위로
        </TopButtonStyled>
    )
}

export default TopButton;