import React from 'react';
import ChildComponent from './childs/ChildComponent';
import ChildComponent2 from './childs/ChildComponent2';
import ChildComponent3 from './childs/ChildComponent2';
import funcHello from './childs/childs-of-child/funcHello';
import ChildOfChildComponent from './childs/childs-of-child/ChildOfChildComponent';
// import ChildOfChildComponent2 from '';
import ReactDOM from 'react-dom';
class MyComponent extends React.Component {
 
  state = {
    firstname: '',
    lastname: '',
    age: '',
    job: [
        {id: '01', title: 'dev', salary: '1000$'},
        {id: '02', title: 'dev level 1', salary: '1000$'},
        {id: '03', title: 'dev level 10', salary: '5000$'},
    ],
  }

   handleFirstName = (event) => {
      this.setState({
        firstname: event.target.value
      })
    }
    handleLastName = (event) => {
      this.setState({
        lastname: event.target.value
      })
    }
    handleLevel = (event) => {
      this.setState({
        job: event.target.value
      })
    }
    handleSubmit = (event) => {
      event.preventDefault()
      console.log('hello', this.state)
    }
  render() {
    return (
      <>
      <form >
        <label>
          First Name:
          <input type="text"  value={this.state.firstname}
           onChange={(event)=> this.handleFirstName(event)}/>
        </label><br />
        <label>
          Last Name:
          <input type="text"  value={this.state.lastname}
           onChange={(event)=> this.handleLastName(event)}/>
        </label><br />
        <input type="submit" value="Submit" onClick = {(event)=> this.handleSubmit(event)}/>
      </form>
      <ChildComponent 
        name={this.state.firstname} 
        age={this.state.lastname}
        job={this.state.job}
      />
      <ChildComponent2 />
      <ChildOfChildComponent />
      <ChildComponent3 />
      </>
    );
  }

}

export default MyComponent;