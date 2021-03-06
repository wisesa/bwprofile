import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteAppetizer} from '../../actions/menu';

const Appetizer = ({
  deleteAppetizer,
  appetizer: { _id, name, price, type, pic }
}) => (
    <div className="menu bg-white d-flex align-items-center">
      <div>
        <img className="img-menu" src={`http://localhost:5000/menu/${pic}`} />
      </div>
      <div className="price">
        <div>
          <h3>
            {name}
          </h3>
          <h3>
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)}
          </h3>
        </div>
      </div>
      <div className="center">
        <h3 className="my-1">
          <Link to={`/editmenu/${_id}`}>
            <div className="btn btn-danger mr-2">
                {<i className="fas fa-edit"></i>}
            </div>
          </Link>
          <button onClick={e => deleteAppetizer(_id)}
              type="button"
              className="btn btn-danger">
                  {<i className="fas fa-times"></i>}
          </button>
        </h3>
      </div>
    </div>
    );

Appetizer.defaultProps = {
  showActions: true
}


Appetizer.propTypes = {
  deleteAppetizer:propTypes.object.isRequired
}

const mapStateToProps= state => ({
    auth: state.auth
});

export default connect(
  mapStateToProps, 
  {deleteAppetizer}
)(Appetizer);