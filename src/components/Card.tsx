import * as React from 'react';
import './Card.css'
import { addGiftToCart, ConnectedReduxProps } from '../actions'
import { Gift } from '../types'
import * as types from '../types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

interface DispatchProps {
  addGiftToCart?: typeof addGiftToCart
}
const mapDispatchToProps = {
  addGiftToCart
}

export interface OwnProps {
  item?: types.Gift
}

const mapStateToProps = () => ({})

type Props = OwnProps & DispatchProps & ConnectedReduxProps

class Card extends React.Component<Props> {
  constructor(props: any) {
    super(props);

    this.handleClick = this.handleClick.bind(this);     

  }

  handleClick() {
    if (this.props.item && this.props.addGiftToCart) {
      const id: string = this.props.item.id
      this.props.addGiftToCart && this.props.addGiftToCart(id)
    }

  }

  public render() {

    if (!this.props.item) {
      return <div></div>
    }
    const item: Gift = this.props.item
    return (

      <div className='Card'>

        <div className='CardPicDiv'>
          <img className='MainPic' alt='main' src={item.image} />
          <img className='LogoPic' alt='charities_logo' src={item.charities_image} />
        </div>
        <div className='CardText'>
          <h2>{item.charities_name}</h2>
          <p><textarea className='CardDesc' value={item.desc} rows={4} cols={35} readOnly ></textarea></p>
        </div>
        <div className='CardBottom'>
          <p>${item.price}</p>
          <Button variant="contained" color="primary" size='small' onClick={this.handleClick} >
            Add to Cart
            </Button>
        </div>

      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
