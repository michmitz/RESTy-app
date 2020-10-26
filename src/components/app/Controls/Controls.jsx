import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, method, body, onChange, onSubmit }) => (
  <div className="controls-div">

      <form onSubmit={onSubmit} className="method-form">
        <div className="radio">
          <label>
            <input 
              type="radio" 
              name="method" 
              value="GET" 
              onChange={onChange} 
              checked={method === 'GET'} />
            GET
          </label>
        </div>

        <div className="radio">
          <label>
            <input 
              type="radio" 
              name="method" 
              value="POST" 
              onChange={onChange} 
              checked={method === 'POST'} />
            POST
          </label>
        </div>

        <div className="radio">
          <label>
            <input 
              type="radio" 
              name="method" 
              value="PUT" 
              onChange={onChange} 
              checked={method === 'PUT'} />
            PUT
          </label>
        </div>

        <div className="radio">
          <label>
            <input 
              type="radio" 
              name="method" 
              value="DELETE" 
              onChange={onChange} 
              checked={method === 'DELETE'} />
            DELETE
          </label>
        </div>

        <div className="url-box">
          <label>
            <input 
              type="text" 
              name="url" 
              placeholder="Enter url" 
              value={url} 
              onChange={onChange} />
          </label>
        </div>

        <div className="json-entry-box">
          <label>
            <input 
              type="text" 
              name="body" 
              placeholder="Enter raw JSON" 
              value={body} 
              onChange={onChange} />
          </label>
        </div>

        <button data-testid="button">Submit</button>
      </form>

  </div>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;