import React, { Component } from 'react'
import Navigation from './components/scaffold/Navigation'
import Header from './components/scaffold/Header'
import Loading from './components/scaffold/Loading'
import Footer from './components/scaffold/Footer'
import "../public/css/style.css"


export default class App extends Component {
  constructor(){
    super()
      this.state = {
          loaded : false
      }
  }

  componentDidMount(){
      this.setState({
          loaded : true
      })
  }
  
  render(){
    return (
        <div className="main">
            <Navigation />

            {/* put all other components inside Header Component*/}

            <Header />
            {
                this.state.loaded === true ? (
                    <div id="loaded">
                    </div>
                  ) 
                  : ( <Loading /> )
            }
            <Footer />
        </div>
    )
  }
}
