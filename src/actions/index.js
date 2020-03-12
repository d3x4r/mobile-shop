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

const fetchMorePhonesRequest = () => ({
  type: 'FETCH_MORE_PHONES_REQUEST',
});

const fetchMorePhonesSuccess = (phones) => ({
  type: 'FETCH_MORE_PHONES_SUCCESS',
  payload: phones,
});

const fetchMorePhonesFailure = (err) => ({
  type: 'FETCH_MORE_PHONES_FAILURE',
  payload: err,
  error: true,
});

const fetchMorePhones = () => async (dispatch) => {
  dispatch(fetchMorePhonesRequest());
  try {
    const phones = await fetchPhonesFromApi();
    dispatch(fetchMorePhonesSuccess(phones));
  } catch (err) {
    dispatch(fetchMorePhonesFailure(err));
  }
};

const fetchPhones = () => async (dispatch) => {
  dispatch(fetchPhonesRequest());
  try {
    const phones = await fetchPhonesFromApi();
    dispatch(fetchPhonesSuccess(phones));
  } catch (err) {
    dispatch(fetchPhonesFailure(err));
  }
};

export { fetchPhones, fetchMorePhones };
