import React, {Fragment, useState, useEffect} from "react";
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {login} from '../../actions/auth';

const Landing=({login,isAuthenticated})=>{

    return <Fragment>
            <main id="transcroller-body" className="aos-all" >
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-down">
                            <img src="http://localhost:5000/img/robot.gif" className="img-hero img-fluid animated" alt="" />
                        </div>
                        <div className="col-lg-12 mt-3 d-flex center flex-column justify-content-center mb-5" data-aos="fade-up">
                            <h1>Brad Wisesa</h1>
                            <h2>Im a fullstack programmer</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-shrimp"></div>
            <section id="skills" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">SKILLS</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 center-sm right-md container" data-aos="fade-right">
                            <img className="img-subhero" src="http://localhost:5000/img/hero_sesa_full.png" />
                        </div>

                        <div className="col-lg-6 card-purple">
                            <div className="member d-flex flex-column align-items-center" data-aos="fade-up">
                                <div className=" d-flex justify-content-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <img src="http://localhost:5000/img/ci.png" className="img-fluid img-skills" alt="" />
                                        <h3>CI</h3>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src="http://localhost:5000/img/mongo.png" className="img-fluid img-skills" alt="" />
                                        <h3>M</h3>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src="http://localhost:5000/img/express.png" className="img-fluid img-skills" alt="" />
                                        <h3>E</h3>
                                    </div>
                                </div>
                                <div className="card-purple d-flex justify-content-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <img src="http://localhost:5000/img/react.png" className="img-fluid img-skills" alt="" />
                                        <h3>R</h3>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src="http://localhost:5000/img/node.png" className="img-fluid img-skills" alt="" />
                                        <h3>N</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="" className="services section-bg sm">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">EDUCATION</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 left-sm d-flex align-items-center">
                            <div data-aos="fade-right">
                                <div className="card-black p-3">
                                    <p className="white">
                                        <strong>A. Bachelor Information Technology</strong> - STIKI Malang (2010-2014)
                                    </p>
                                </div>
                                <div className="card-black p-3 mt-3">
                                    <p className="white">
                                        <strong>B. SMK Telkom Malang</strong> (2007-2010)
                                    </p>
                                </div>
                                <div className="card-black p-3 mt-3">
                                    <p className="white">
                                        <strong>C. SMP Negeri 8 Malang</strong> (2004-2007)
                                    </p>
                                </div>
                                <div className="card-black p-3 mt-3">
                                    <p className="white">
                                        <strong>D. SDN Kasin Malang</strong> (1998-2004)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                            <img className="img-subhero" src="http://localhost:5000/img/graduation.png" />
                        </div>
                    </div>
                </div> 
            </section>

            <section id="education" className="services section-bg md">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">EDUCATION</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 left-sm d-flex align-items-center">
                            <div data-aos="fade-right">
                                <div className="card-black p-3">
                                    <p className="white">
                                        <strong>A. Bachelor Information Technology</strong> - STIKI Malang (2010-2014)
                                    </p>
                                </div>
                                <div className="card-black p-3 mt-3">
                                    <p className="white">
                                        <strong>B. SMK Telkom Malang</strong> (2007-2010)
                                    </p>
                                </div>
                                <div className="card-black p-3 mt-3">
                                    <p className="white">
                                        <strong>C. SMP Negeri 8 Malang</strong> (2004-2007)
                                    </p>
                                </div>
                                <div className="card-black p-3 mt-3">
                                    <p className="white">
                                        <strong>D. SDN Kasin Malang</strong> (1998-2004)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                            <img className="img-subhero" src="http://localhost:5000/img/graduation.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="cta">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold white">PROJECTS</h2>
                    </div>

                    <div className="row content card-project card-project-blue">
                        <div className="col-lg-6 center">
                            <div className="d-flex flex-column align-items-center">
                            <h2>Workshop</h2>
                            <p className="left">
                                Workshop that has sparepart management, service, sparepart sales. On this application we can track our staff whether its a goods entry or outcome transaction.  So its easier for us to track where the staff is real time. We can see income and outcome simultanously.  This app has 3 user (administrator, warehouse admin, cashier)
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-6 center">
                            <img className="img-project" src="http://localhost:5000/img/Batam-Workshop3.png" />
                        </div>
                    </div>
                    <div className="row my-5">
                    </div>
                    <div className="row content mt-5 card-project card-project-orange">
                        <div className="col-lg-6 center">
                            <img className="img-project" src="http://localhost:5000/img/Archipelagos.png" />
                        </div>
                        <div className="col-lg-6 center">
                            <div className="d-flex flex-column align-items-center">
                            <h2>Archipelago's for Desktop</h2>
                            <p className="left">
                                Archipelago's is a an app for resto.  There are appetizer, main course and dessert to be dishes type.  You can add each dishes on cart, decrease it, and add it more.  After that, you can print lists of dishes in transaction.  You can also create, read, update, delete dishes as user.  But first you have to register first.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                    </div>
                    <div className="row content mt-5 card-project card-project-black">
                        <div className="col-lg-3 center">
                            <div className="d-flex flex-column align-items-center">
                            <h2>Archipelago's for Mobile</h2>
                            <p className="left">
                                On mobille app you can order the menu from different dishes.  You can add it in cart, decrease it also.  You can choose location of order to be delivered to you.  And also you can see history of your transaction.
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 center">
                            <img className="img-mobile" src="http://localhost:5000/img/Archipelagos1.png" />
                        </div>
                        <div className="col-lg-3 col-sm-4 center">
                            <img className="img-mobile" src="http://localhost:5000/img/Archipelagos2.png" />
                        </div>
                        <div className="col-lg-3 col-sm-4 center">
                            <img className="img-mobile" src="http://localhost:5000/img/Archipelagos3.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="certificate" className="team section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>CERTIFICATE</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 mb-3">
                            <div className="member d-flex flex-column align-items-center" data-aos="fade-up">
                                <div className="card"><img src="http://localhost:5000/img/INAICTA.jpg" className="img-certificate" alt="" /></div>
                                <div className="member-info mt-4 center">
                                    <h4>INAICTA 2012</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                            <div className="member d-flex flex-column align-items-center" data-aos="fade-up">
                                <div className="card"><img src="http://localhost:5000/img/PKM.jpg" className="img-certificate" alt="" /></div>
                                <div className="member-info mt-4 center">
                                    <h4>PKM</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                            <div className="member d-flex flex-column align-items-center" data-aos="fade-up">
                                <div className="card"><img src="http://localhost:5000/img/PKM GT.jpg" className="img-certificate" alt="" /></div>
                                <div className="member-info mt-4 center">
                                    <h4>PKM GT</h4>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </main>

        <footer id="footer">
            <div className="container footer-bottom clearfix center">
                <div className="copyright">
                    © Copyright 2021 Archipelago's Team All Rights Reserved
                </div>
            </div>
        </footer>

    </Fragment>
}

Landing.propTypes={
    login:propTypes.func.isRequired,
    isAuthenticated:propTypes.bool
};

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    {login})
    (Landing);