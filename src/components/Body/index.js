// Write your code here
import './index.css'

const Body = props => {
  const {showLeftNavbar, showContent, showRightNavbar} = props
  return (
    <div className="body-container">
      {showLeftNavbar ? (
        <div className="left-navbar-container">
          <h1 className="heading">Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      ) : null}
      {showContent ? (
        <div className="Content-container">
          <h1 className="heading">Content</h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna allqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      ) : null}
      {showRightNavbar ? (
        <div className="right-container">
          <h1 className="heading">Right Navbar</h1>
          <p className="ad">Ad 1</p>
          <p className="ad">Ad 2</p>
        </div>
      ) : null}
    </div>
  )
}
export default Body
