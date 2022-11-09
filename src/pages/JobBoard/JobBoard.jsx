import { useEffect, useState } from 'react';
import axios from 'axios';

const JobBoard = () => {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://www.themuse.com/api/public/jobs?page=1')
      .then(res => {
        console.log(res.data.results[0].contents);
        setLoading(false);
        setJobs(res);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(true);
      });
  }, []);
  return <div>This is the Job Board</div>;
};

export default JobBoard;
