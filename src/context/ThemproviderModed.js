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
    }, [isDarkMode]);

    return [isDarkMode, toggleMode];
}

export {
    ThemproviderModed,
    useMode
};