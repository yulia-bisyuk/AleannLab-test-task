import sprite from '../../icons/sprite.svg';
import {
  LinkToDetails,
  JobTitle,
  LocationIcon,
  Details,
  Department,
  Dot,
  Location,
} from './jobDescription.styled';

const JobDescription = ({ job }) => {
  return (
    <div className="allcontent-except-image">
      <LinkToDetails to="details" title={job.name}>
        <JobTitle>{job.name}</JobTitle>
      </LinkToDetails>
      <Department>
        <Details>Department name</Details>
        <Dot></Dot>

        <Details>
          {job.categories.length !== 0 ? job.categories[0].name : 'Unknown'}
        </Details>
      </Department>
      <Location>
        <LocationIcon>
          <use href={sprite + '#icon-location'} />
        </LocationIcon>
        <Details>
          {job.locations.length !== 0
            ? job.locations[0].name
            : 'Location hidden'}
        </Details>
      </Location>
    </div>
  );
};

export default JobDescription;
