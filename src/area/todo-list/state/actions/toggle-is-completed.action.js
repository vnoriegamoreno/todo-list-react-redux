const toggleIsCompletedAction = (id: number) => {
  return {
    type: 'TOGGLE_IS_COMPLETED',
    payload: id,
  };
};

export default toggleIsCompletedAction;