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
            <section id="about" className="about">
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

            <section id="services" className="services section-bg sm">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">TOP DISHES</h2>
                    </div>

                    <div className="row content d-flex flex-row-reverse">
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                            <img className="img-subhero" src="http://localhost:5000/img/hero_bapak.png" />
                        </div>
                        <div className="col-lg-6 left-sm d-flex align-items-center card">
                            <div data-aos="fade-right">
                                <p className="black">
                                    <strong>Bachelor Degree Information Technology</strong> - STIKI Malang (2010-2014)
                                </p>
                                <p className="black">
                                    <strong>SMK Telkom Malang</strong> (2007-2010)
                                </p>
                                <p className="black">
                                    <strong>SMP Negeri 8 Malang</strong> (2004-2007)
                                </p>
                                <p className="black">
                                    <strong>SDN Kasin Malang</strong> (1998-2004)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services section-bg md">
                <div className="container">
                    <div className="section-title">
                        <h2 className="bold">EDUCATION</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6 left-sm d-flex align-items-center">
                            <div data-aos="fade-right">
                                <div className="card-black p-3">
                                    <p className="white">
                                        <strong>Bachelor Information Technology</strong> - STIKI Malang (2010-2014)
                                    </p>
                                    <p className="white">
                                        <strong>SMK Telkom Malang</strong> (2007-2010)
                                    </p>
                                    <p className="white">
                                        <strong>SMP Negeri 8 Malang</strong> (2004-2007)
                                    </p>
                                    <p className="white">
                                        <strong>SDN Kasin Malang</strong> (1998-2004)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 center-sm left" data-aos="fade-left">
                            <img className="img-subhero" src="http://localhost:5000/img/hero_bapak.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>Catalog Projects</h3>
                            <p>My Projects can be viewed here</p>
                            <a target="_blank" href="http://localhost:1000" className="btn-get-started scrollto">Catalog Projects</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="team" className="team section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>CERTIFICATE</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="member d-flex flex-column align-items-center" data-aos="fade-up">
                                <div className="card"><img src="http://localhost:5000/img/INAICTA.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info mt-4 center">
                                    <h4>INAICTA 2012</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="member d-flex flex-column align-items-center" data-aos="fade-up">
                                <div className="card"><img src="http://localhost:5000/img/PKM.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info mt-4 center">
                                    <h4>PKM</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="member d-flex flex-column align-items-center" data-aos="fade-up">
                                <div className="card"><img src="http://localhost:5000/img/PKM GT.jpg" className="img-fluid" alt="" /></div>
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