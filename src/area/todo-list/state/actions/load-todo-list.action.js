import axios from 'axios';

const loadTodoListAction = (dispatch) => {
  const endpoint = 'https://jsonplaceholder.typicode.com/todos';
  const limit = '?_limit=5';
  axios.get(`${endpoint}${limit}`)
    .then((response) => {
      dispatch({
        type: 'LOAD_TODO_LIST',
        payload: response.data,
      });
    })
    .catch((error) => error);
};

export default loadTodoListAction;