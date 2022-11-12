import styled from 'styled-components';

const JobTitle = styled.h1`
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;

  color: ${props => props.theme.titleColor};
`;

const LocationIcon = styled.svg`
  width: 14px;
  height: 18px;
  margin-right: 8px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;

const Details = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.56;
  color: ${props => props.theme.jobDetailsColor};
`;

const Department = styled.p`
  margin-top: 0px;
  margin-bottom: 7px;
`;

const Dot = styled.span`
  display: inline-block;
  height: 3px;
  width: 3px;
  margin-left: 6px;
  margin-right: 6px;
  vertical-align: middle;
  background-color: ${props => props.theme.jobDetailsColor};
  border-radius: 50%;
`;

export { Location, LocationIcon, JobTitle, Details, Department, Dot };
