import sprite from '../../icons/sprite.svg';
import {
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
      <JobTitle>{job.name}</JobTitle>
      <Department>
        <Details>Department name</Details>
        <Dot></Dot>

        <Details>{job.categories[0].name}</Details>
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
