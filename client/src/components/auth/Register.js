import React, {Fragment, useState} from "react";
import {connect} from 'react-redux';

const Register=()=>{

    return (<Fragment>
        <section>
            <div className="container">
                <div className="row content mt-5 card-project">
                    <div className="col-lg-6 center">
                        <div className="d-flex flex-column align-items-center">
                        <h2 className="black">Workshop</h2>
                        <p className="black left">
                            Workshop that has sparepart management, service, sparepart sales. On this application we can track our staff whether its a goods entry or outcome transaction.  So its easier for us to track where the staff is real time. We can see income and outcome simultanously.  This app has 3 user (administrator, warehouse admin, cashier)
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 center">
                        <img className="img-project" src="http://localhost:5000/img/Batam-Workshop3.png" />
                    </div>
                </div>
                <div className="row content mt-5 card-project">
                    <div className="col-lg-6 center">
                        <div className="d-flex flex-column align-items-center">
                        <h2 className="black">Workshop</h2>
                        <p className="black left">
                            Workshop that has sparepart management, service, sparepart sales. On this application we can track our staff whether its a goods entry or outcome transaction.  So its easier for us to track where the staff is real time. We can see income and outcome simultanously.  This app has 3 user (administrator, warehouse admin, cashier)
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 center">
                        <img className="img-project" src="http://localhost:5000/img/Batam-Workshop3.png" />
                    </div>
                </div>
                <div className="row content mt-5 card-project">
                    <div className="col-lg-6 center">
                        <div className="d-flex flex-column align-items-center">
                        <h2 className="black">Workshop</h2>
                        <p className="black left">
                            Workshop that has sparepart management, service, sparepart sales. On this application we can track our staff whether its a goods entry or outcome transaction.  So its easier for us to track where the staff is real time. We can see income and outcome simultanously.  This app has 3 user (administrator, warehouse admin, cashier)
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 center">
                        <img className="img-project" src="http://localhost:5000/img/Batam-Workshop3.png" />
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    );
};

export default connect()(Register);