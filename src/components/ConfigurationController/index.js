// Write your code here
import './index.css'

const ConfigurationController = props => {
  const {
    showContent,
    showLeftNavbar,
    onToggleShowContent,
    showRightNavbar,
    onToggleShowLeftNavbar,
    onToggleShowRightNavbar,
  } = props

  const onChangeContent = () => {
    onToggleShowContent()
  }

  const onChangeLeftNavbar = () => {
    onToggleShowLeftNavbar()
  }

  const onChangeRightNavbar = () => {
    onToggleShowRightNavbar()
  }

  return (
    <div className="configuration-container">
      <h1 className="head">Layout</h1>
      <div className="checkBox-container">
        <input
          type="checkbox"
          className="checkbox"
          id="content"
          checked={showContent}
          onChange={onChangeContent}
        />
        <label className="label-text" htmlFor="content">
          Content
        </label>
      </div>
      <div className="checkBox-container">
        <input
          type="checkbox"
          id="left"
          className="checkbox"
          checked={showLeftNavbar}
          onChange={onChangeLeftNavbar}
        />
        <label className="label-text" htmlFor="left">
          Left Navbar
        </label>
      </div>
      <div className="checkBox-container">
        <input
          type="checkbox"
          id="right"
          className="checkbox"
          checked={showRightNavbar}
          onChange={onChangeRightNavbar}
        />
        <label className="label-text" htmlFor="right">
          Right Navbar
        </label>
      </div>
    </div>
  )
}
export default ConfigurationController
