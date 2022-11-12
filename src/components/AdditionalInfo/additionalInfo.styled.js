import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`;

const SaveIcon = styled.svg`
  display: none;
  width: 16px;
  height: 20px;
`;

const StarIcon = styled.svg`
  width: 10px;
  height: 10px;
`;

const DatePosted = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.206667px;
  color: ${props => props.theme.jobDetailsColor};
`;

export { StarIcon, SaveIcon, DatePosted, InfoWrapper };
