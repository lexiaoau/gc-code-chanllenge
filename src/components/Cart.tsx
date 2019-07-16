import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/css/Cart.css'
import { updateCartItem, ConnectedReduxProps } from '../actions'
import { Gift, GiftInCart, GiftCartState } from '../types/index';
import CartItem from './CartItem'
import Button from '@material-ui/core/Button';

interface PropsFromDispatch {
  updateCartItem?: typeof updateCartItem
}

const mapDispatchToProps = {
  updateCartItem
}

interface PropsFromState {
  cartItems?: GiftInCart[];
  gifts?: Gift[];
}

const mapStateToProps = ({ cartItems, gifts }: GiftCartState) => ({
  cartItems: cartItems,
  gifts: gifts
})

type Props = PropsFromDispatch & PropsFromState & ConnectedReduxProps

interface ClassState {
  curCartItems: GiftInCart[]
}

class Cart extends React.Component<Props, ClassState> {
  constructor(props: any) {
    super(props);
    if (this.props.cartItems) {
      this.state = { curCartItems: this.props.cartItems }
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const validItems = this.state.curCartItems.filter(g => g.itemCount > 0)
    this.props.updateCartItem && this.props.updateCartItem(validItems)

  }

  handleChange(itemId: string, curCnt: number) {
    const newItems = this.state.curCartItems.map((i: GiftInCart) => {
      if (i.itemId === itemId) {
        return {
          itemId: i.itemId,
          itemCount: curCnt
        }
      }
      return { ...i }
    })
    this.setState({ curCartItems: newItems })
  }

  public render() {
    const { cartItems, gifts } = this.props

    if (!cartItems || !gifts) {
      return <div>Empty cart</div>
    }

    let totalPrcie: number = 0

    this.state.curCartItems.map((i) => {
      const gift: Gift[] = gifts.filter(g => g.id === i.itemId)
      const price: number = gift[0].price
      const cnt: number = i.itemCount
      totalPrcie = totalPrcie + price * cnt
      return totalPrcie
    }
    )

    return (
      <div className='Cart'>
        <p><Button variant="contained" color="primary" size='small' onClick={this.handleClick} >Update Cart</Button></p>
        <h1>Gift Cart</h1>
        <div className='column-labels'>
          <span className="product-image">Image</span>
          <span className="product-details">Product</span>
          <span className="product-price">Price</span>
          <span className="product-quantity">Quantity</span>
          <span className="product-line-price">Total</span>
        </div>
        {
          cartItems.map((i) => {
            const { itemId, itemCount } = i
            const gift = gifts.filter(g => g.id === itemId)


            return (
              <div>
                <CartItem
                  key={itemId}
                  item={gift[0]}
                  count={itemCount}
                  handleChange={this.handleChange}
                />

              </div>
            );
          })
        }
        <div className="totals">
          <div className="totals-item">

            Grand Total:
                              <div className="totals-value" id="cart-subtotal">
              {totalPrcie}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
