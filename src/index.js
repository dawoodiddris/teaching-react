import React from 'react'
import ReactDom from 'react-dom'

class Message extends React.Component
{
  render()
  {
    return (

      <div>
          <p><b>{this.props.email}</b></p>
          <h3>{this.props.subject}</h3>
           <p>Dear {this.props.name}</p>
          <p>{this.props.body}</p>
      </div>

    )
  }
}

function Guess(props)
{
  return <h1>{props.greet}</h1>
}

// ReactDom.render(<Message 
//                  email='dawoodiddris@gmail.com' 
//                  subject='Greetings from the NIL' 
//                  name='Jane'
//                  body='I am a simple boy, you simplify the simplication...
//                  '/>, document.getElementById('root'))

ReactDom.render(<Guess greet='Good Bye'/>,document.getElementById('root'))

