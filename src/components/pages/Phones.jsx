import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPhones } from '../../actions';

const Phones = (props) => {
  const { fetchPhonesData } = props;
  useEffect(() => {
    fetchPhonesData();
  }, [fetchPhonesData]);
  return <div>phones</div>;
};

const mapDispatchToProps = {
  fetchPhonesData: fetchPhones,
};

Phones.propTypes = {
  fetchPhonesData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Phones);
