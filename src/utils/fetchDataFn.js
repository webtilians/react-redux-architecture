const fetchDataFn = (types, name, cb) => {
  const prefix = name.toUpperCase();

  return async dispatch => {
    await dispatch({ type: types[`${prefix}_FETCH_START`] });

    try {
      const data = await cb();
      await dispatch({
        type: types[`${prefix}_FETCH_COMPLETED`],
        payload: data
      });
    } catch (error) {
      await dispatch({
        type: types[`${prefix}_FETCH_REJECTED`],
        payload: error
      });
    }
  };
};

export default fetchDataFn;
