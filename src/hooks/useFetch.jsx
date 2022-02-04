import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch();
  }, [url]);

  return { loading, data, error };
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};
