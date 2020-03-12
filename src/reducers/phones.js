import keyBy from 'lodash.keyby';

const initialState = {};

const phones = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHONES_SUCCESS': {
      const data = keyBy(payload, 'id');
      return { ...state, ...data };
    }
    case 'FETCH_MORE_PHONES_SUCCESS': {
      const data = keyBy(payload, 'id');
      return { ...state, ...data };
    }
    default:
      return state;
  }
};

export default phones;
