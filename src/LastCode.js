import React from 'react'
import ReactDom from 'react-dom'

class Clock extends React.Component{ 

  constructor(props)
  {
     super(props); // this.state = this.props
     this.state = {date: new Date(), message : 'We are done'}
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
  return (<div><h1>{this.state.date.toLocaleTimeString()}</h1> <p>{this.state.message}</p></div>)
  }

}

ReactDom.render(<Clock />, document.getElementById('root'))



<h3>
{this.state.Iscomplete ? 'You are very religious' : 'You are an Idol worshiper'}
</h3> 