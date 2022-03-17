import React from "react";
import Styled from 'styled-components';

const Footer = Styled.footer`
    padding: 10px 100px;
    text-align: center;
    font-size: 12px;
    color: #aaa;
`;

function Component() {
    return (
        <Footer>
            <p>Footer</p>
        </Footer>
    );
}

export default Component;