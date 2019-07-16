import { Dispatch } from 'redux';
// import Card from '../components/Card';
// import {GiftCartState, Gift} from '../types';
// import * as constants from '../constants';
// import * as actions from '../actions';
// import * as types from '../types';
// import { connect } from 'react-redux';
// import { Gift } from '../types';
// import GiftsPage from '../components/GiftsPage';

interface DispatchProps {
  // addGiftToCart: () => void
}

export interface OwnProps {
  propFromParent: number
}

export function mapStateToProps() {
    return {}
}

// type Props = DispatchProps & OwnProps



// export function mapDispatchToProps(dispatch : any) {
// const mapDispatchToProps = (dispatch: Dispatch<types.GiftCartState>, ownProps: types.CardOwnProps): types.CardDispatchProps => {    
//     return {
//         // addFruit: (fruit: Fruit) => dispatch(actions.addFruit(fruit))
//         addGiftToCart: () => dispatch(actions.addGiftToCart()),
//     };
// }

//   type AllProps = CardProps & PropsFromDispatch
export function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps  {
    console.log('dds')
    return {
        // addGiftToCart: () => dispatch(actions.addGiftToCart())
    };
}

  //  v1    //--------------------------------------------------------------
//   function mapDispatchToProps(dispatch: Dispatch<any>) : types.CardProps  {
//     // const gift = {} as types.Gift;
//     return dispatch({ 
//         type: constants.ADD_GIFT_TO_CART,
//         // item: gift,
//         addGiftToCart: () => dispatch(actions.addGiftToCart())
        
//      });
//   }

  // --------------------------------------------------------------
// const ConnectedCard = connect(mapStateToProps, mapDispatchToProps)(Card)
// export default ConnectedCard;

// export default connect<void, DispatchProps, OwnProps>
//   (mapStateToProps, mapDispatchToProps)(Card)
