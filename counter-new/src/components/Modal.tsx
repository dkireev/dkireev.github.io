import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled('div')`
    position: absolute;
    background-color: blue;
`;

export default class Modal extends React.PureComponent {
    render () {
        return (
            <ModalContainer>ss</ModalContainer>
        )
    }
}