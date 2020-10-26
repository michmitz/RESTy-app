import React, { Component } from 'react'
import Header from '../app/Header/Header'
import Controls from '../app/Controls/Controls'
import Display from '../app/Display/Display'
import HistoryList from '../app/HistoryList/HistoryList'
import { getResponse } from '../../services/getResponse-api'

export default class RESTy extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    historyList: [],
    displayJSON: '' 
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  
  handleSubmit = async(event) => {
    const { url, method, historyList } = this.state;
    event.preventDefault();

    const response = await this.handleResponse();

    console.log(response)
    
    return this.setState({
      historyList: [...historyList, {
        url: url,
        method: method
      }] 
    })
  }

  handleResponse = () => {
    const { url, method, body } = this.state;
    return getResponse(url, method, body)
      .then(res => JSON.stringify(res))
      .then(json => this.setState({ displayJSON: json }));
  }

  render() {
    const { historyList, url, method, body, displayJSON } = this.state;
    return (
      <div>
        <Header />
        
        <section>
          <Controls 
            url={url} 
            method={method} 
            body={body} 
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit} />

          <Display 
            displayJSON={displayJSON} />

          <HistoryList 
            history={historyList} />

        </section>
      </div>
    )
  }
}