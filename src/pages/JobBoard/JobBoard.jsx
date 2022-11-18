import { useMemo, useState } from 'react';
import axios from 'axios';
import { imagesPack } from 'images/images';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import JobDescription from 'components/JobDescription/JobDescription';
import Pagination from 'components/Pagination/Pagination';
import { ListItem, Image, List, ContentWrapper } from './jobBoard.styled';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useMemo(() => {
    setLoading(true);
    axios
      // .get(
      //   'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
      // )
      .get(`https://www.themuse.com/api/public/jobs?page=${page}`)
      .then(res => {
        // console.log('res', res.data);

        const jobsWithImgs = res.data.results.map(data => {
          return {
            ...data,
            url: imagesPack,
          };
        });

        setJobs(jobsWithImgs);
        setSuccess(true);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(true);
      });
  }, [page]);

  console.log('jobs', jobs);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Oops... Something went wrong</div>}
      <List>
        {success &&
          jobs &&
          jobs.map((job, index) => (
            <ListItem key={job.id}>
              <Image src={job.url[index]} width="66px" height="66px" />

              <ContentWrapper>
                <AdditionalInfo job={job} />
                <JobDescription job={job} />
              </ContentWrapper>
            </ListItem>
          ))}
      </List>
      <Pagination setCurrentPage={setPage} />
    </>
  );
};

export default JobBoard;
