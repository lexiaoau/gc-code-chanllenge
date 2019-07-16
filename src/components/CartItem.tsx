import React from 'react';
import { Gift } from '../types/index';

interface ClassState {
    cnt: number
}

interface Props {
    item: Gift,
    count: number,
    handleChange: (itemId: string, cnt: number) => void
}


class CartItem extends React.Component<Props, ClassState> {
    constructor(props: any) {
        super(props);
        this.state = { cnt: this.props.count };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        const curValue = parseInt(e.currentTarget.value, 10)
        this.setState({ cnt: curValue })
        this.props.handleChange(this.props.item.id, curValue)
    }

    public render() {
        const { item } = this.props

        return (
            <div className="product">
                <div className="product-image">
                    <img src={item.image} alt="product"></img>
                </div>
                <div className="product-details">
                    {item.desc}
                </div>
                <div className="product-price">{item.price}</div>
                <div className="product-quantity">
                    <input type="number" value={this.state.cnt} onChange={this.handleChange} min="0" />
                </div>
                <div className="product-line-price">{item.price * this.state.cnt}</div>
            </div>
        )

    }
}

export default CartItem
