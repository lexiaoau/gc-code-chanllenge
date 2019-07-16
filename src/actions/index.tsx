import { action } from 'typesafe-actions'
import { Dispatch, Action, AnyAction } from 'redux'
import { ActionTypes , GiftInCart} from '../types'

export const updateCartItem = (newItems: GiftInCart[]) => action(ActionTypes.UPDATE_CART_ITEM, newItems)
export const addGiftToCart = (giftId: string) => action(ActionTypes.ADD_GIFT_TO_CART, giftId)

export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch?: Dispatch<A>
}  
