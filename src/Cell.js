import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    onClickHandler = () => {
        this.setState({color: '#333'})
    }

  render() {
    return (
      <div className="cell" onClick={this.onClickHandler} style={{backgroundColor: this.state.color}}>
        
      </div>
    )
  }
}