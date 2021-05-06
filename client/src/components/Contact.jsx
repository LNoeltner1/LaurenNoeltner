import React, { Component } from 'react';
import "../App.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <main className="container">
                    <section className="row">
                        <div className="col-xs-5 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                        <h1>Contact Me</h1>
                        </div>
                        <br />
                        <div className="col-xs-7 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                        
                        </div>
                    </section>
                    <hr />
                    <container>
                        <a href="https://www.linkedin.com/in/lauren-noeltner-102b731a0/">
                            <button className="linkedinlink">LinkedIn Profile</button>
                        </a>
                        <a href="https://github.com/LNoeltner1">
                            <button className="githublink">GitHub Profile</button>
                        </a>
                    </container>
                    <form
                        action="mailto:laurennoeltner@gmail.com"
                        method="post"
                        enctype="multipart/form-data"
                        name="EmailForm"
                        id="emailCard"
                    >
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                            <label for="inputName">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder="Your name..."
                                required
                            />
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                        <label for="inputEmail">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Your email address..."
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label for="inputMessage">Message</label>
                        <textarea
                            className="form-control"
                            id="inputMessage"
                            rows="5"
                            placeholder="Your message..."
                            required
                        ></textarea>
                        </div>
                        <input type="submit" className="btn_btn-primary" value="Submit" href="" />
                    </form>
                    <br /><br />
                    </main>
            </div>
        );
    }
}

export default Contact;