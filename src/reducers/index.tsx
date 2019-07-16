import { Reducer } from 'redux'
import { Gift, GiftInCart, GiftCartState } from '../types/index';
import jsonData from "../gifts.json";
import { ActionTypes } from '../types'

let dataArray = jsonData.products;

    let giftArray: Gift[] = [];

    for (let i of dataArray) {
      const aGift : Gift = {
        id : i._id,
        score : i._score,
        charities_name  : i._source.charities[0].name,
        charities_image : i._source.charities[0].image,
        price : i._source.giftprice,
        desc : i._source.description,
        image : i._source.image
      }
      giftArray.push(aGift);
    }

export const initialState : GiftCartState = {
    gifts: giftArray,
    cartItems: [],
    search: '',
    orderBy: ''
  }


export const changeCart: Reducer<GiftCartState> = (state = initialState, action) => {    
    const { cartItems } = state;
    
    switch ( action.type ) {
        case ActionTypes.ADD_GIFT_TO_CART:
            const giftId = action.payload

            // check if this gift already in cart
            const allCartItemIds = cartItems.map(a => a.itemId)
            const isItemExist : boolean = allCartItemIds.includes(giftId)

            // if in cart, increment its counter by 1
            let newCartItems = cartItems.map( (item : GiftInCart) => {
                    if(item.itemId === giftId) {
                        return {
                            itemId : giftId,
                            itemCount : (item.itemCount+1)
                        }
                    }
                    return item;
                }
            )

            // if not in cart , add it to cart
            if(!isItemExist)
            {
                newCartItems.push({
                    itemId : giftId,
                    itemCount : 1
                })
            }
            return {...state, cartItems: newCartItems};
            
        case ActionTypes.UPDATE_CART_ITEM:
            const newItems = action.payload

            return {...state, cartItems:newItems}
        default:
            return state;
    }
}
