import React from 'react'
import ReactDom from 'react-dom'


class Calculate extends React.Component{

    constructor(props)
    {
       super(props);
       this.state = {shoe:'', Iscomplte : false}
    }

    add()
    {
        this.state.Iscomplte = true
    }

    remove()
    {
        this.state.Iscomplte = false;
    }

   render()
   {
       return (<h2>Hi</h2>)
   }

}

ReactDom.render(<Calculate />, document.getElementById('root'))