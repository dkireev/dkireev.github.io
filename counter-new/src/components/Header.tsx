import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const HeaderContainer = styled('div')`
    background-color: #282c34;
    height: 48px;
    padding: 0 16px;
    color: #fff;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    grid-column-gap: 32px;
    span {
        line-height: 1;
    }
`;

export default class Header extends React.PureComponent {
    render () {
        return (
            <HeaderContainer>
                <Icon source={'menu'} size={24}/>
                <span>Personal goals</span>
            </HeaderContainer>
        )
    }
}