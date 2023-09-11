import React, { Component } from "react";
import '../css/style.css'
import '../css/signup.css'

class Signup extends Component {

    render() {
        return (
            <div className="modal-body" id="user-signup">
                <h2>Sign up now<span> Free!</span></h2>
                <form className="contact-form form-validate3" noValidate="novalidate">                    
                    <div class="row">
                        <div class="col-md-6">
                            <div className="form-group form-outline">
                                <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="fname">First Name *</label>
                                <input className="form-control" type="text" name="fname" id="fname" placeholder="First Name" required="" autoComplete="off" aria-required="true" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="form-group form-outline">
                                <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="lname">Last Name *</label>
                                <input className="form-control" type="text" name="lname" id="lname" placeholder="Last Name" required="" autoComplete="off" aria-required="true" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="email">Email Address*</label>
                        <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autoComplete="off" aria-required="true" />
                    </div>

                    <div class="row my-3">
                        <div class="col-md-6">
                            <div className="form-group">
                                <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="password">Password*</label>
                                <input type="password" name="password" className="form-control" placeholder="Password" required="" autoComplete="off" aria-required="true" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div className="form-group">
                                <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="confirm-password">Confirm Password*</label>
                                <input type="password" name="confirm-password" className="form-control" placeholder="Confirm Password" required="" autoComplete="off" aria-required="true" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="text-black-200 h6 font-weight-600 mb-2" htmlFor="mobile">Mobile*</label>
                        <input type="tel" name="mobile" className="form-control" placeholder="Mobile" required="" autoComplete="off" aria-required="true" />
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-primary" value="signup" id="signupBTN" >Sign up</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Signup;