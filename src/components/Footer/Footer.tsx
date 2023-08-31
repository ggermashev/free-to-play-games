import React from 'react';
import {FooterStyled, Row} from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyled>
            <p><span style={{color: '#4799eb'}}>created by</span> Григорий Гермашев</p>
            <Row>
                <p>Telegram</p>
                <p>GitHub</p>
                <p>CV</p>
                <p>Source</p>
            </Row>
        </FooterStyled>
    );
};

export default Footer;