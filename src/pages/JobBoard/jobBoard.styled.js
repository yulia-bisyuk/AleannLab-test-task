import styled from 'styled-components';

const List = styled.ul`
  margin-top: 9px;
  margin-bottom: 26px;
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  height: 206px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  padding: 13px 16px 27px 16px;
  background-color: ${props => props.theme.secondaryBgColor};
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Image = styled.img`
  position: absolute;
  top: 50px;
  width: 66px;
  height: 66px;
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  margin-left: auto;
  width: 278px;
`;

export { List, ListItem, Image, ContentWrapper };
