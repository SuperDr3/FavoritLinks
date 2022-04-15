import React, { Component } from 'react'
import Stylesheet from './stylesheet'
class Form extends Component {
  constructor(props) {
    super(props)

          //  TODO - set initial state for link name and URL 
          this.state = {linkName:"", url:""} //Both forms will be blank initially 
  }

  handleURLChange = (event) => {
    //TODO - Logic for changing state based on form change
    this.setState({url:event.target.value});  //updated form value with new input
  }
  handleLinkChange = (event) => {
    this.setState({linkName:event.target.value}) //updated with new inputs now we need to add it to the table
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

            //TODO - Logic for calling props to handle submission and setting state changes
            this.props.newLink(this.state); //add current state to the prop 
            this.setState({linkName:"", url:""}); //Change back to default settings
  }

  render() {
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Link Name :</label>

                  <input type="text" value={this.state.linkName} onChange={this.handleLinkChange}/>      

                <label>URL :</label>

                  <input type ="text" value={this.state.url} onChange={this.handleURLChange}/>

                <button type ="submit" onClick={this.onFormSubmit}>Submit</button> 
      </form>
    )
  }
}

export default Form
