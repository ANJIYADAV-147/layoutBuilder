import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div className="app-container">
        <ConfigurationController
          showContent={showContent}
          showLeftNavbar={showLeftNavbar}
          showRightNavbar={showRightNavbar}
          onToggleShowContent={this.onToggleShowContent}
          onToggleShowLeftNavbar={this.onToggleShowLeftNavbar}
          onToggleShowRightNavbar={this.onToggleShowRightNavbar}
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
