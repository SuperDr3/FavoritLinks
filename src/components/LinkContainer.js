import React from 'react'
 import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO -  Create a state object in our LinkContainer to hold an array called favLinks */
    this.state = {favLinks:[]}
  }

  handleRemove = (index) => {
          //  TODO - Create logic for setting the state to filter array and remove favLink at index
       
        this.state.favLinks.splice(index, 1); // remove 1 item at index from the current state
        this.setState ({favLinks:this.state.favLinks }); //set the new changes to the state
  }

  handleSubmit = (favLinks) => {
           // TODO - Create logic to setState and add new favLink to favLinks array in state
            this.setState({favLinks: [...this.state.favLinks,favLinks]}); 

       //this.setState({favLinks:this.state.favlinks.concat(favLinks)}); 
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table linkData={this.state.favLinks} removeLink={(index) => this.handleRemove(index)} />  
       
        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form newLink= {(favLinks) => this.handleSubmit(favLinks)} />
      </div>
    )
  }
}

export default LinkContainer
