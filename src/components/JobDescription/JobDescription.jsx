import sprite from '../../icons/sprite.svg';
import { JobTitle, LocationIcon } from './jobDescription.styled';

const JobDescription = ({ job }) => {
  return (
    <div className="allcontent-except-image">
      <JobTitle>{job.name}</JobTitle>
      <span>
        Department name <span>.</span>
      </span>
      <span>{job.categories[0].name}</span>
      <LocationIcon>
        <use href={sprite + '#icon-location'} />
      </LocationIcon>
      <span>{job.locations[0].name}</span>
    </div>
  );
};

export default JobDescription;
