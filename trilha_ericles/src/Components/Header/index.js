import './index.css'
import logo from '../../images/logo.webp'

const Header = () => (
    <div className="container">
        {/* <a className="header-link" href="">Home</a> */}
        <a className="header-link" href="">Sobre</a>
        <img src={logo} className="logo" alt="logo" />
        <a className="header-link" href="">Contato</a>
    </div>
)

export default Header;



{/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
></a> */}