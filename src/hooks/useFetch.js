import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(url)
      .then(res => {
        setIsLoading(false)
        return res.json()
      })
      .then(setData)
      .catch(err => {
        setError(true)
        console.log(err)
      })
  }, [])

  return { data, isLoading, error }
}

export default useFetch;