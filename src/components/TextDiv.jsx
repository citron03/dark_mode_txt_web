import styled from 'styled-components';
import {useState} from 'react';

const TextArea = styled.textarea `
    border: 1px solid red;
`;

const TextView = styled.div `
    border: 1px solid blue;
`;

const TextDiv = () => {

    const [editMode, setEditMode] = useState(false);
    const [texts, setTexts] = useState("입력 하세요!");

    const onEditMode = () => {
        // 더블클릭 이벤트는 모바일 환경에서는 안된다?
        setEditMode(!editMode);
    }

    const onViewMode = (event) => {
        if(event.key === 'Enter'){
            setEditMode(!editMode);
        }
    }

    const changeTexts = (event) => {
        setTexts(event.target.value);
    }

    return (<div>
        {editMode ? 
            <TextArea onKeyDown={e => onViewMode(e)} onChange={(e) => changeTexts(e)} value={texts}/> : 
            <TextView onDoubleClick={onEditMode}>{texts}</TextView>}
    </div>);
}

export default TextDiv;