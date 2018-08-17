import * as React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.PureComponent {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}