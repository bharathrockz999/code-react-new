import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import './css/style.css'
// import icon from './assets/logo-hover.png'
import Signup from '../project-ui/signup';
import Login from '../project-ui/login';
import About from '../project-ui/About';
import logo from '../project-images/nwmsu-logo.png'


class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };




    render() {
        const { login, sign } = this.state;
        return (
            <>
                <header className="header header-animated opaque" style={{ "display": 'block', "paddingTop": "5px", "paddingBottom": "5px" }}>
                    <div className="container">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="navbar-header">
                                <a className="logo" href="#">
                                    <img className="img-responsive logo" style={{ "height": "auto", "width": "180px", "margin-right": "10px" }} src={logo} alt="" data-logo-alt={logo} />
                                </a>                               
                            </div>
                            <div>
                            <span className="logo-title" style={{ "font-size": "large", "margin-left": "auto" }}>Professional Based Learning</span>
                            </div>

                            {/* <div className="nav-toggle collapsed" data-toggle="collapse" data-target="#navbarMain" aria-expanded="false" style={{ "top": "15px" }}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="navbar-collapse collapse in" id="navbarMain" aria-expanded="true" style={{ top: "65px" }}>

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="/Home">Home</a>
                                    </li>

                                    <li>
                                        <a href="/About">About</a>
                                    </li>
                                    <li>
                                        <button className="btn btn-primary-outline" id="signup" onClick={this.onOpenModal}>SignUp</button>
                                    </li>
                                    <li>
                                        <button className="btn btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>Login</button>
                                    </li>
                                </ul>

                            </div>

                            {/* <!-- .navbar-collapse --> */}
                        </nav>
                    </div>

                </header>
                {/* Sign up model */}

                <Modal open={sign} onClose={this.onCloseModal}>                    
                    <Signup></Signup>
                </Modal>

                {/* <!-- signUp End -->
                  <!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalclose}>                    
                    <Login></Login>
                </Modal>
            </>

        );
    }
}




export default Header
