import React from "react";
import logoImg from '../../assets/img/logoImg.png';
import './styles.css';



export class Navbar extends React.Component{
    render() {
        return (
        <header>
            <nav id="navbar">
              <div className="nav-brand">
      <img src={logoImg} alt="" />
      <h1>O poder do trabalho em equipe</h1>
              </div>
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/">Categories</a></li>
                <li><a href="/">Contats</a></li>
                <li><a href="/">About</a></li>
              </ul>
            </nav>
          </header>)
    }
}
export default Navbar