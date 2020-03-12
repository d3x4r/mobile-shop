import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchPhones, fetchMorePhones } from '../../actions';
import { getPhones } from '../../selectors';

const Phones = (props) => {
  const { phones, fetchPhonesData, loadMorePhones } = props;
  useEffect(() => {
    fetchPhonesData();
  }, [fetchPhonesData]);

  const renderPhone = (phone) => {
    const { id, name, image, price } = phone;
    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={id}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={image} alt={name} />
        </div>
        <div className="caption">
          <h4 className="pull-right">{`$${price}`}</h4>
          {/* h4 Oo */}
          <h4>
            <Link to={`/phones/${id}`}>{name}</Link>
          </h4>

          {/* <p>{description}</p> */}
          <div className="itemButton">
            <button className="btn btn-primary" type="button">
              Buy now
            </button>
            <Link to={`/phones/${id}`} className="btn btn-default">
              More info
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="books row">{phones.map((phone) => renderPhone(phone))}</div>
      <div className="row">
        <div className="col-md=12">
          <button className="btn btn-primary pull-right" type="button" onClick={loadMorePhones}>
            Load
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phones: getPhones(state),
  };
};

const mapDispatchToProps = {
  fetchPhonesData: fetchPhones,
  loadMorePhones: fetchMorePhones,
};

Phones.propTypes = {
  phones: PropTypes.instanceOf(Array).isRequired,
  fetchPhonesData: PropTypes.func.isRequired,
  loadMorePhones: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
