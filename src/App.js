import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: false,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <div className="app-container">
        <ConfigurationController
          onToggleShowContent={this.onToggleShowContent}
          onToggleShowLeftNavbar={this.onToggleShowLeftNavbar}
          onToggleShowRightNavbar={this.onToggleShowRightNavbar}
          showContent={showContent}
          showLeftNavbar={showRightNavbar}
          showRightNavbar={showRightNavbar}
        />
        <Layout
          showContent={showContent}
          showLeftNavbar={showLeftNavbar}
          showRightNavbar={showRightNavbar}
        />
      </div>
    )
  }
}

export default App
