import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import jsonData from "./gifts.json";
import './index.css';
import App from './container/App';
// import { Gift } from './types';
import { changeCart, initialState } from './reducers/index';
import * as serviceWorker from './serviceWorker';











// import { shop } from './reducers/index';
// import { ShoppingCartState } from './types/index';

// let dataArray = jsonData.products;

//     let giftArray: Gift[] = [];

//     for (let i of dataArray) {
//       const aGift : Gift = {
//         id : i._id,
//         score : i._score,
//         charities_name  : i._source.charities[0].name,
//         charities_image : i._source.charities[0].image,
//         price : i._source.giftprice,
//         desc : i._source.description,
//         image : i._source.image
//       }
//       giftArray.push(aGift);
//     }
    // console.log(giftArray)

    const store = createStore(changeCart, initialState);

ReactDOM.render(
    <Provider store={store}>
      <div>        
        <App  /> 
      </div>           
    </Provider>,
    document.getElementById('root') as HTMLElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
