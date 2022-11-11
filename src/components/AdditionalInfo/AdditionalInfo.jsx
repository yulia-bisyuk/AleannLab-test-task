import { formatDistanceToNow } from 'date-fns';
import sprite from '../../icons/sprite.svg';
import {
  StarIcon,
  SaveIcon,
  DatePosted,
  InfoWrapper,
} from './additionalInfo.styled';

const AdditionalInfo = ({ job }) => {
  const parseDate = date => {
    return date
      .slice(0, 10)
      .split('-')
      .map(item => Number(item));
  };

  return (
    <InfoWrapper className="stars-date-save">
      <div>
        <SaveIcon>
          <use href={sprite + '#icon-bookmark'} />
        </SaveIcon>
        {[...Array(Math.floor(Math.random() * 5))].map((e, i) => (
          <StarIcon key={i}>
            <use href={sprite + '#icon-star'} />
          </StarIcon>
        ))}
      </div>
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
    </InfoWrapper>
  );
};

export default AdditionalInfo;
