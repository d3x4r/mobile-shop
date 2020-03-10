const initialState = {
  ids: [],
};

const phonesPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHONES_SUCCESS': {
      const phonesIds = Object.keys(payload);
      return { ...state, ...{ ids: phonesIds } };
    }
    default: {
      return state;
    }
  }
};

export default phonesPage;
