import {createGlobalStyle} from 'styled-components'; // 글로벌 스타일을 돕는 styled-components의 내장 메서드이다.
import reset from 'styled-reset'; // reset으로 스타일을 초기화한다.

// props 내부에 theme에 글로벌 스타일에 대한 정보가 담긴다.
// background-color: ${(props) => console.log(props)}; 로 확인 가능

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => (props.theme.textColor)};
        font-family: 'GangwonEdu_OTFBoldA';
    }
`;

export default GlobalStyle;
