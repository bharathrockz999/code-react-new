import React, { useState } from "react";
import '../components/css/style.css'
import '../project-css/signup.css'

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirm_password: '',
        agreeToTerms: false,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Combine firstName and lastName into a single name field
        const name = `${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ''}`;

        try {
            const response = await fetch(`/user/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    mobile: formData.mobile,
                    roles: ''
                    // roles: 'ROLE_ADMIN', // Default role
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                if (response.status === 400) {
                    const data = await response.json();
                    setError(data.error);
                } else {
                    setError('An error occurred while registering. Please try again later.');
                }
            }
        } catch (error) {
            console.error('Error registering user:', error);
            setError('An error occurred while registering. Please try again later.');
        }
    };
    return (
        <div className="modal-body" id="user-signup">
            <h2>Sign up now<span> Free!</span></h2>
            {isSubmitted ? (
                <p>Thank you for signing up!</p>
            ) : (
                <>
                    {error && <p className="error">{error}</p>}
                    <form className="contact-form form-validate3" noValidate="novalidate" onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6">
                                <div className="form-group form-outline">
                                    <label className="text-black-200 h6 font-weight-600 mb-2"
                                        htmlFor="firstName">
                                        First Name *
                                    </label>
                                    <input className="form-control"
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        required=""
                                        autoComplete="off"
                                        aria-required="true" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="form-group form-outline">
                                    <label className="text-black-200 h6 font-weight-600 mb-2"
                                        htmlFor="lastName">
                                        Last Name *
                                    </label>
                                    <input className="form-control"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        required=""
                                        autoComplete="off"
                                        aria-required="true" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="text-black-200 h6 font-weight-600 mb-2"
                                htmlFor="email">
                                Email Address*
                            </label>
                            <input className="form-control"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="E-mail"
                                required=""
                                autoComplete="off"
                                aria-required="true" />
                        </div>

                        <div class="row my-3">
                            <div class="col-md-6">
                                <div className="form-group">
                                    <label className="text-black-200 h6 font-weight-600 mb-2"
                                        htmlFor="password">
                                        Password*
                                    </label>
                                    <input type="password"
                                        name="password"
                                        className="form-control"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        required=""
                                        autoComplete="off"
                                        aria-required="true" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="form-group">
                                    <label className="text-black-200 h6 font-weight-600 mb-2"
                                        htmlFor="confirm_password">
                                        Confirm Password*
                                    </label>
                                    <input type="password"
                                        name="confirm_password"
                                        className="form-control"
                                        value={formData.confirm_password}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        required=""
                                        autoComplete="off"
                                        aria-required="true" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="text-black-200 h6 font-weight-600 mb-2"
                                htmlFor="mobile"
                            >Mobile*
                            </label>
                            <input type="tel"
                                name="mobile"
                                className="form-control"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile"
                                required=""
                                autoComplete="off"
                                aria-required="true" />
                        </div>
                        <div className="form-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    required
                                />
                                I agree to the <a href="/TermsAndConditions">Terms and Conditions</a>
                            </label>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-primary" value="signup" id="signupBTN" >Sign up</button>
                        </div>

                    </form>
                </>
            )}
        </div>
    );

}
export default Signup;