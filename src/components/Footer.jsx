import styled from 'styled-components';

const FooterStyled = styled.footer`
    font-size: 0.8rem;
    position: relative;  
    bottom: 0;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
`;

const Footer = () => {
    return <FooterStyled>강원도교육청X헤움디자인이 제작한 강원교육모두체 Bold를 사용하고 있습니다.</FooterStyled>;
}

export default Footer;