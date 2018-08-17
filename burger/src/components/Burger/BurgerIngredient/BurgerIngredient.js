import * as React from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

export default class BurgerIngredient extends React.PureComponent {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
            <div className={classes.BreadTop}>
              <div className={classes.Seeds1}></div>
              <div className={classes.Seeds2}></div>
            </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('beacon'):
        ingredient = <div className={classes.Beacon}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      default: 
        ingredient = null;
    }
    return ingredient;
  }
};
BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};