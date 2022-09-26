import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (difficulty, amount) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
        );
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
};
export default useFetch;
