const initialState = {
  ids: [],
};

const phonesPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHONES_SUCCESS': {
      const phonesIds = payload.map(({ id }) => id);
      return { ...state, ...{ ids: phonesIds } };
    }
    case 'FETCH_MORE_PHONES_SUCCESS': {
      const { ids } = state;
      const loadedPhonesIds = payload.map(({ id }) => id);
      const updatedPhonesIds = [...ids, ...loadedPhonesIds];
      return { ...state, ...{ ids: updatedPhonesIds } };
    }
    default: {
      return state;
    }
  }
};

export default phonesPage;
