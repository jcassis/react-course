import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {clickButton} from './redux/actions/actions';

class App extends Component{
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render(){
    const {clickButton, value} = this.props;
    const {inputValue} = this.state;
    return(
      <div>
        <input type='text' onChange={this.inputChange} value={inputValue}/>
          <button onClick={() => clickButton(inputValue)}>Click me</button>
          <h1>{value}</h1>
      </div>
    );
  }
}

const mapStateToProps = store =>({
  value: store.clickReducer.value
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (App);
