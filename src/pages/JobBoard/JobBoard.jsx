import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import sprite from '../../icons/sprite.svg';
import image from '../../images/hospital-1.jpg';
import {
  StarIcon,
  DatePosted,
  ListItem,
  Image,
  LocationIcon,
  List,
} from './board.styled';

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
        setJobs(res.data);
        setSuccess(true);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(true);
      });
  }, [success]);

  console.log('jobs', jobs);

  const parseDate = date => {
    return date
      .slice(0, 10)
      .split('-')
      .map(item => Number(item));
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Oops... Something went wrong</div>}
      <List>
        {success &&
          jobs &&
          jobs.results.map(job => (
            <ListItem key={job.id}>
              <Image src={image} width="66px" height="66px"></Image>
              <div className="content">
                {[...Array(5)].map((e, i) => (
                  <StarIcon key={i}>
                    <use href={sprite + '#icon-star'} />
                  </StarIcon>
                ))}
                <DatePosted>
                  {'Posted ' +
                    formatDistanceToNow(
                      new Date(
                        parseDate(job.publication_date)[0],
                        parseDate(job.publication_date)[1],
                        parseDate(job.publication_date)[2]
                      )
                    ) +
                    ' ago'}
                </DatePosted>
                <h1>{job.name}</h1>
                <span>
                  Department name <span>.</span>
                </span>
                <span>{job.categories[0].name}</span>
                <LocationIcon>
                  <use href={sprite + '#icon-location'} />
                </LocationIcon>
                <span>{job.locations[0].name}</span>
              </div>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default JobBoard;
