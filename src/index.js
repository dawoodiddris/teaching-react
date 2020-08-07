import React from 'react'
import ReactDom from 'react-dom'

class Clock extends React.Component{ 

  constructor(props)
  {
     super(props); // this.state = this.props
     this.state = {date: new Date()}
  }

  componentDidMount(){

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  componentWillUnmount()
  {
     clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return <h1>{this.state.date.toLocaleTimeString()}</h1> 
  }

}

ReactDom.render(<Clock />, document.getElementById('root'))




