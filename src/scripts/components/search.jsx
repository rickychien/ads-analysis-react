'use strict';

import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <div className="well">
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label className="col-sm-2 control-label">Search</label>
            <div className="col-sm-6">
              <input
                id="query"
                className="form-control"
                type="text"
                placeholder="Enter a content keyword or leave empty" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Start Time</label>
            <div className="col-sm-4">
              <input
                id="start-time"
                type="text"
                className="form-control"
                placeholder="Specify a time or leave empty" />
            </div>
            <label className="col-sm-2 control-label">End Time</label>
            <div className="col-sm-4">
              <input
                id="end-time"
                type="text"
                className="form-control"
                placeholder="Specify a time or leave empty" />
            </div>
          </div>
          <input
            id="search-btn"
            className="btn btn-primary"
            type="button"
            defaultValue="Search" />
        </form>
      </div>
    );
  }

}
