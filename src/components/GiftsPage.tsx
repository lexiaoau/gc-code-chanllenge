import React from 'react';
import { connect } from 'react-redux';
import './GiftsPage.css'
import { Gift, GiftCartState } from '../types';
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from './SearchBox';

type ClassState = {
  searchWord: string
}

interface StateProps {
  search: string,
  gifts: Gift[]

}


function mapStateToProps({ gifts, search }: GiftCartState) {
  return {
    gifts,
    search
  };
}

class GiftsPage extends React.Component<StateProps, ClassState> {

  constructor(props: any) {
    super(props);
    this.state = { searchWord: '' };

    this.onChange = this.onChange.bind(this);

  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchWord: e.target.value });
  }

  public render() {
    const filteredGifts = this.props.gifts.filter(gift => {
      return gift.charities_name.toLowerCase().includes(this.state.searchWord.toLowerCase());
    })
    return (
      <div>
        <div className="SearchBox">
          <SearchBox searchChange={this.onChange} />
        </div>
        <div>
          <Scroll>
            <CardList gifts={filteredGifts} />
          </Scroll>
        </div>
      </div>

    );
  }

}

export default connect(mapStateToProps, {})(GiftsPage);
