// rce
// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

// export class ParentComp extends Component {
// after Component » PureComponent
// no repeat
// behaviour passed down to children components »
// that is why » child RegularComp doesn't repeat
// though it's a regular component...
export class ParentComp extends PureComponent {
  // rconst » new constructor
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Gergo"
    }
  }

  componentDidMount() {
    // 2 parameter: arrow function, interval
    // after 2 seconds the setState called
    // and the page re-renders
    // PureComponent class never re-renders just the regular
    // Regular - Pure pairs 2x in the console » Gergo - HOHOHOOO »
    // Than just Regular component repeats
    // pure components implement the shouldComponentupdate lifecyle method »
    // shallow comparison on the props and state of the component
    // Reg vs Pure components
    // check the console!!!
    // So: PURE COMPONENTS AVOID UNNECESSARY RENDERS! » performance
    setInterval(() => {
      this.setState({
        name: "HOHOHOOOOO"
      })
    }, 2000)
  }
  
  render() {
    console.log('* * * Parent Component render * * *')
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
