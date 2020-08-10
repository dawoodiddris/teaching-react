import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

class Person extends React.Component
{

  state = { Persons: [] }

  componentDidMount()
  {

      axios.get(`https://jsonplaceholder.typicode.com/users`)
           .then(res => {
               const Persons = res.data

              console.log(Persons)

               this.setState({Persons})
           })
           .catch(error => {}) 
  }



   render()
   {
     return (
       <div>
           <ul className="list-group">
     { this.state.Persons.map(person => <li className="list-group-item">{person.name}</li>) }
           </ul>
       </div>
     )
   }
}

ReactDom.render(<Person />, document.getElementById('root'))