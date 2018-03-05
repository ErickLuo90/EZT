import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class StockTicker extends React.Component {
  render () {
    return (
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{this.props.symbol}</h5>
          <small>{this.props.price}</small>
        </div>
      </a>
    )
  }
}

class StockList extends React.Component {
  render() {
    return (
      <div>
        <h1>Stock List</h1>
        <div class="list-group">
          <StockTicker symbol="AAPL" price="170" />
          <StockTicker symbol="GOOGL" price="200" />
          <StockTicker symbol="GOOGL" price="200" />
        </div>
      </div>
    )
  }
}

const element = <button class="btn btn-lg btn-success btn-block" type="submit">Sign in</button>;
ReactDOM.render(
  <StockList />,
  document.getElementById('root')
);
