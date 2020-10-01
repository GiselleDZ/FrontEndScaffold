import React, { Component } from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/projects/Projects'
import Loading from './components/Loading'
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
        <div className="body">
            <Navigation />

            {
                this.state.loaded === true ? (
                    <div id="loaded">
                        <Header />
                        <Intro />
                        <Projects />
                    </div>
                  ) 
                  : ( <Loading /> )
            }
            <Footer />
        </div>
    )
  }
}
