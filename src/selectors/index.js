const getPhone = (state, id) => state.phones[id];

const getPhones = (state) => {
  const {
    phones,
    phonesPage: { ids },
  } = state;
  return ids.map((id) => phones[id]);
};

export { getPhone, getPhones };
