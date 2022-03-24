import {ThemeProvider} from "styled-components"; // context API와 함께 사용, 다크모드인지 라이트모드인지 관리
import {useState, createContext, useContext, useCallback} from 'react';
import {DarkMode, LightMode} from "./../styles/modes";

const ModeContext = createContext({}); // context의 기본 형태

const ThemproviderModed = ({children}) => {
    // <>children<>
    const [isDarkMode, setIsDarkMode] = useState(false);

    const nowMode = isDarkMode
        ? DarkMode
        : LightMode;

    return (
        <ModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            <ThemeProvider theme={nowMode}>
                {children}
            </ThemeProvider>
        </ModeContext.Provider>
    )
}

const useMode = () => {
    const context = useContext(ModeContext);
    const {isDarkMode, setIsDarkMode} = context;

    const toggleMode = useCallback(() => {
        if (isDarkMode) {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
        }
    }, [isDarkMode, setIsDarkMode]); 
    // 에러 React Hook useCallback has a missing dependency: 'setIsDarkMode' -> 해결을 위해 useCallback 두 번째 인자 배열에 setIsDarkMode 추가

    return [isDarkMode, toggleMode];
}

export {
    ThemproviderModed,
    useMode
};