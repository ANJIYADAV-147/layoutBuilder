// Write your code here
import './index.css'

const ConfigurationController = props => {
  const {
    onToggleShowContent,
    onToggleShowLeftNavBar,
    onToggleShowRightNavBar,
    showContent,
    showLeftNavbar,
    showRightNavbar,
  } = props

  const onChangeShowContent = () => {
    onToggleShowContent()
  }

  const onChangeShowLeftNavBar = () => {
    onToggleShowLeftNavBar()
  }

  const onChangeShowRightNavBar = () => {
    onToggleShowRightNavBar()
  }

  return (
    <div className="configuration-container">
      <h1 className="head">Layout</h1>
      <div className="checkBox-container">
        <input
          type="checkbox"
          className="checkbox"
          onChange={onChangeShowContent}
          checked={showContent}
        />
        <p className="label">Content</p>
      </div>
      <div className="checkBox-container">
        <input
          type="checkbox"
          className="checkbox"
          onChange={onChangeShowLeftNavBar}
          checked={showLeftNavbar}
        />
        <p className="label">Left Navbar</p>
      </div>
      <div className="checkBox-container">
        <input
          type="checkbox"
          className="checkbox"
          onChange={onChangeShowRightNavBar}
          checked={showRightNavbar}
        />
        <p className="label">Right Navbar</p>
      </div>
    </div>
  )
}
export default ConfigurationController
