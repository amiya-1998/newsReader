import React, { Component } from 'react';

import NewsList from './NewsSection/NewsList';

class Landing extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12 text-center w-100">
            <h1 className="display-4">News Section</h1>
            <p className="lead">Select News To View</p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            {/* Display a list of news */}
            <NewsList />
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
