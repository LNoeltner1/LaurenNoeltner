import React, { Component } from 'react';
import "../App.css";
import Header from "./Header";

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <br />
              <main className="container">
                <section className="row">
                    <div className="col-xs-5 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <h1>About Me</h1>
                    </div>
                    <div className="col-xs-7 col-sm-6 col-md-8 col-lg-8 col-xl-8"></div>
                </section>
                <hr />
                <section className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    
                    <br /><br />
                    <p>
                        I am a full-stack web developer in Atlanta,
                        Georgia and a graduate of Georgia Tech's Full-Stack Flex
                        Boot Camp. I have always had a wide range of interests, from fine
                        arts to the hard sciences, and I have been lucky to get a chance to
                        explore most of them at some point in my life.
                    </p>

                    <p>
                        I have continued to enjoy learning independently, and,
                        in my spare time, I am almost always researching whatever fascinates
                        me in that moment. I love learning about history, language, animals,
                        the arts, space, computers and technology. I am currently teaching
                        myself German after becoming mostly fluent in Spanish in college.
                        When I am not researching interesting information, you could find me
                        watching movies, playing games, playing with my dogs, or
                        painting/making something.
                    </p>
                    <p>
                        I am currently looking for work in the industry, and cannot wait to both learn and add my knowledge to any project. See my portfolio for some of my completed projects!
                    </p>
                    </div>
                </section>
                <section className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
                </section>
                <br />
                </main>
            </div>
        );
    }
}

export default About;