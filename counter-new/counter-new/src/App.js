import React from 'react';
import styled from 'styled-components';
import { AddGoal } from './ui/AddGoal';

const AppContainer = styled('div')`
  height: 100vh;
  display: grid;
  grid-auto-flow: row;
`;
const Header = styled('div')`
  background-color: #282c34;
  height: 48px;
  padding: 0 16px;
  color: #fff;
  display: grid;
  align-items: center;
  justify-content: space-between;
`;
const Section = styled('div')`
  height: calc(100vh - 48px);
  padding: 16px;
  display: grid;
  align-items: center;
  text-align: center;
`;

export default class App extends React.PureComponent {
  render() {
    return (
      <AppContainer>
        <Header>
          <span>Personal goals</span>
        </Header>
        <Section>
          <span>You have no any goals yet...</span>
        </Section>
        <AddGoal />
      </AppContainer>
    );
  }
}
