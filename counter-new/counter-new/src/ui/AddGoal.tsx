import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const AddGoalContainer = styled('div')`
    width: 48px;
    height: 48px;
    background-color: green;
    position: fixed;
    right: 16px;
    bottom: 32px;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-items: center;
`;

export const AddGoal = () => {
        return (
            <AddGoalContainer>
                <Icon source={'plus'} size={32} />
            </AddGoalContainer>
        )
}
