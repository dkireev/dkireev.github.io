import React from 'react';
import styled from 'styled-components';
import { AddGoal } from './components/AddGoal';
import Header from './components/Header';
import Modal from './components/Modal';

const AppContainer = styled('div')`
  height: 100vh;
  display: grid;
  grid-auto-flow: row;
  position: relative;
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
        <Header />
        <Section>
          <span>You have no any goals yet...</span>
        </Section>
        <AddGoal />
        <Modal />
      </AppContainer>
    );
  }
}
