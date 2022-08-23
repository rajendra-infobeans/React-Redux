import * as React from 'react';
import styled from 'styled-components';
import LogoSrc from './images/header-logo.png';

const HeaderConatainer = styled.div`
display: flex;
justify-content: space-between:
align-items: center;
padding:16px 64px;
border-bottom: 1px solid red;
`
const HeaderItemContainer = styled.div`
display: grid;
grid-auto-flow: column;
margin: 0px 12px;
grid-template-columns: 1fr 2fr 4fr;
// border-right: 1px solid green;
`
const HeaderLogo = styled.img`
margin-right: 25px;
margin-top: 13px;
`
const HeaderTitle = styled.div`
h1 {
    color: #0d0c22;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    font-family: initial;
    margin-bottom: 5px;
}
span {
    float: left;
    margin-right: 5px;
}
.author {
    color: #ea4c89;
}

`;
const HeaderSignUp = styled.div`
padding-top:15px;
`;

const HeaderSignUpButton = styled.button`
float: right;
color: #fff;
background-color: purple;
width: 100px;
height: 50px;
`

const Header = () => {
    return (
        <HeaderConatainer>
            <HeaderItemContainer>
            <HeaderLogo src={LogoSrc} alt={'Image here'}/>
            <HeaderTitle>
            <h1>My Stories Matter: Willow Agency Template</h1>
            <span>by</span><span className={'author'}> Raj Aryan</span>
            </HeaderTitle>
            
            <HeaderSignUp>
            <HeaderSignUpButton>Sign Up</HeaderSignUpButton>
            </HeaderSignUp>

            </HeaderItemContainer>

            <HeaderItemContainer>
            </HeaderItemContainer>
           
        </HeaderConatainer>
    )

}

export default Header;