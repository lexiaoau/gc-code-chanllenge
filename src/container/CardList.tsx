// import React from 'react';
// import Card from '../container/Card';
// import * as actions from '../actions';
// import { connect } from 'react-redux';
// import CardList from '../components/CardList';

export function mapStateToProps() {
  return {}
}

export function mapDispatchToProps(dispatch : any) {
  console.log('ConnectedCardList')
  // console.log(actions.addGiftToCart())
  return {
      // addGiftToCart: () => dispatch(actions.addGiftToCart())
  };
}

// const ConnectedCardList = connect(mapStateToProps, mapDispatchToProps)(CardList)
// export default ConnectedCardList;