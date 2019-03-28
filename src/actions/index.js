import axios from 'axios';
import { FETCH_NEWS } from './types';

// fetch all news dispatch the action to the reducer.
export const fetchNews = () => async dispatch => {
  const response = await axios.get(
    'https://hn.algolia.com/api/v1/search_by_date?tags=story'
  );

  dispatch({
    type: FETCH_NEWS,
    payload: response.data.hits
  });
};
