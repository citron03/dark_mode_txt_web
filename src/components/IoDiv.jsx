import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useMode } from "../context/ThemproviderModed";

const DownloadLink = styled.a`
    font-family: "GangwonEdu_OTFBoldA";
    text-decoration: none;
    font-size: 1rem;
    color: ${(props) => props.isDark ? "white" : "black"};
    border: 0.1rem solid ${(props) => props.isDark ? "white" : "black"};
    padding: 0.3rem;
    border-radius: 1rem;
`;

const ReadInput = styled.input`
    font-family: "GangwonEdu_OTFBoldA";
    font-size: 1rem;
`;

// React에서 Fs 모듈을 지원하지 않는다.
const IoDiv = ({setTexts, texts}) => {

    const [url, setUrl] = useState("");
    const [isDarkMode] = useMode();

    useEffect(() => {
        const blob = new Blob([texts], {type: "text/plain"});
        const file = new File([blob], "your_text.txt");
        const url = URL.createObjectURL(file);
        setUrl(url);
    }, [texts]);

    const inputFileHandler = (e) => {
        const file = e
            .target
            .files[0];

        const fileReader = new FileReader();
        fileReader.readAsText(file);
        
        fileReader.onload = () => {
            // console.log(fileReader.result);
            setTexts(texts + "\n" + fileReader.result); // 기존 텍스트에 읽은 파일의 텍스트 추가
        };        
    }

    return (<div>
        <ReadInput type="file" onChange={inputFileHandler}/>
        <DownloadLink href={url} download="your_text.txt" isDark={isDarkMode}>다운로드</DownloadLink>
    </div>)
}

export default IoDiv;