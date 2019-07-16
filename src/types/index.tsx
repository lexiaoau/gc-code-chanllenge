export type Gift = {
    id: string,
    image: string,
    desc: string,
    charities_name: string,
    charities_image: string,
    price: number,
    score: number
}

export type GiftInCart = {
    itemId: string,
    itemCount: number
}

export interface GiftCartState {
    gifts: Gift[];
    cartItems: GiftInCart[];
    search: string;
    orderBy: string;
}

export enum ActionTypes {
    ADD_GIFT_TO_CART = 'ADD_GIFT_TO_CART',
    UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
}

// export interface CardOwnProps {
//     item?: Gift
//   }

// export  interface CardDispatchProps {
//     addGiftToCart?: () => void
// }

// export  type CardProps = CardOwnProps & CardDispatchProps

