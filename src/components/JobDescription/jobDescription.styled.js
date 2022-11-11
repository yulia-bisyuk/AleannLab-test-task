import styled from 'styled-components';

const JobTitle = styled.h1`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;

  color: ${props => props.theme.titleColor};
`;

const LocationIcon = styled.svg`
  width: 13px;
  height: 18px;
`;

export { LocationIcon, JobTitle };
