import { useEffect, useState } from 'react';
import axios from 'axios';
import { imagesPack } from 'images/images';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import JobDescription from 'components/JobDescription/JobDescription';
import { ListItem, Image, List, ContentWrapper } from './board.styled';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://www.themuse.com/api/public/jobs?page=1')
      .then(res => {
        // console.log('res.data', res.data.results);
        // console.log('imagesPack', imagesPack);
        const jobsWithImgs = res.data.results.map(data => {
          return {
            ...data,
            url: imagesPack,
          };
        });

        // console.log('jobsWithImgs', jobsWithImgs);

        setJobs(jobsWithImgs);
        setSuccess(true);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(true);
      });
  }, [success]);

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

              {/* <Image src={img1} width="66px" height="66px"></Image> */}

              <ContentWrapper>
                <AdditionalInfo job={job} />
                <JobDescription job={job} />
              </ContentWrapper>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default JobBoard;
