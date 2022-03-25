import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {useMode} from './../context/ThemproviderModed';
import IoDiv from './IoDiv';

const TextArea = styled.textarea `
    border: 1px solid #c44569;
    font-size: 2.2rem;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 75vw;
    height: 75vh;
    font-family: 'GangwonEdu_OTFBoldA';
    background-color: ${({isDark}) => isDark ? '#4b4b4b' : 'white'};
    color: ${({isDark}) => isDark ? 'white' : 'black'};
`;

const TextView = styled.div`
    border: 1px solid #2c2c54;
    font-size: 2.2rem;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 75vw;
    min-height: 75vh;
    height: auto;
`;

const ParagraphEdit = styled.p`
    margin: 0.2rem;
`;

const TextDiv = () => {

    const [editMode, setEditMode] = useState(false);
    const [texts, setTexts] = useState("입력 하세요!");
    const [isDarkMode] = useMode(); // 전역 상태를 가져온다.    
      
    const onEditMode = () => {
        // 더블클릭 이벤트는 모바일 환경에서는 안된다?
        setEditMode(!editMode);
    }

    const onViewMode = () => {
        // 줄바꿈 X
        // if(event.key === 'Enter'){
        //     setEditMode(!editMode);
        // }
        setEditMode(!editMode);
    }

    const changeTexts = (event) => {
        setTexts(event.target.value);
    }

    useEffect(() => {
        const tmpData = localStorage.getItem("texts");
        // 기존 초기값이 아닌 저장된 데이터가 있으면 불러온다.
        if(tmpData || tmpData !== '입력 하세요!'){
            setTexts(tmpData);
        }
    }, []);

    useEffect(() => {
        // 텍스트 저장
        localStorage.setItem("texts", texts);
    }, [texts])

    return (
    <div>
        <ParagraphEdit>{editMode ? "수정 하세요!" : "당신의 텍스트 입니다."}</ParagraphEdit>
        {editMode ? 
            <TextArea onDoubleClick={onViewMode} onChange={(e) => changeTexts(e)} value={texts} isDark={isDarkMode}/> : 
            <pre><TextView onDoubleClick={onEditMode}>{texts}</TextView></pre>}
        <IoDiv setTexts={setTexts} texts={texts}/>
    </div>
    );
}

export default TextDiv;