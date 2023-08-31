import React from 'react';
import {FooterStyled, Row} from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyled>
            <p><span style={{color: '#4799eb'}}>created by</span> Григорий Гермашев</p>
            <Row>
                <a href={'https://t.me/g_grm'} target={'_blank'}>Telegram</a>
                <a href={'https://github.com/ggermashev?tab=repositories'} target={'_blank'}>GitHub</a>
                <a href={'https://pyatigorsk.hh.ru/resume/e3780d9eff0bf059ae0039ed1f587a6c487079'} target={'_blank'}>CV</a>
                <a href={'https://www.freetogame.com/'} target={'_blank'}>Source</a>
            </Row>
        </FooterStyled>
    );
};

export default Footer;