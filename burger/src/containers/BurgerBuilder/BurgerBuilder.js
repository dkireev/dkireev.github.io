import * as React from 'react';
import Aux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.PureComponent {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}