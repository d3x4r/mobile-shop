/* eslint-disable import/prefer-default-export */
import { fetchPhones as fetchPhonesFromApi } from '../services';

const fetchPhonesRequest = () => ({
  type: 'FETCH_PHONES_REQUEST',
});

const fetchPhonesSuccess = (phones) => ({
  type: 'FETCH_PHONES_SUCCESS',
  payload: phones,
});

const fetchPhonesFailure = (err) => ({
  type: 'FETCH_PHONES_FAILURE',
  payload: err,
  error: true,
});

const fetchPhones = () => async (dispatch) => {
  dispatch(fetchPhonesRequest());
  try {
    const phones = await fetchPhonesFromApi();
    console.log(phones);
    dispatch(fetchPhonesSuccess(phones));
  } catch (err) {
    dispatch(fetchPhonesFailure(err));
  }
};

export { fetchPhones };
