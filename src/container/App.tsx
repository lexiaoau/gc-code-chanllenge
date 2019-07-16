import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';

import GiftsPage from '../components/GiftsPage'
import CartPage from '../components/CartPage'

type AppState = {
  isHomePage: boolean
}

class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = { isHomePage: true };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const type: string = event.currentTarget.title;
    const res = type === "home" ? true : false;

    this.setState({ isHomePage: res });
  };


  public render() {
    return (

      <div className="App">
        <div className="HeaderBar">
          <Button variant="contained" title="home" href="#" onClick={this.handleClick}  >
            Home
            </Button>
          <Button variant="contained" title="cart" href="#" onClick={this.handleClick}  >
            Cart
            </Button>
        </div>
        <div className="Content">
          {this.state.isHomePage
            ?
            <div>
              <GiftsPage />
            </div>
            :
            <div>
              <CartPage />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
