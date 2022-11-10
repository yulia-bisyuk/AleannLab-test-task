import styled from 'styled-components';

const Container = styled.div`
  height: fit-content;
  max-width: 414px;
  padding-top: 9px;
  padding-bottom: 17px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid black;

  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    /* forBoard */
    padding-left: 260px;
    padding-right: 260px;
    /* forDetails */
    /* padding-left: 328px;
    padding-right: 328px; */
  }
`;

export { Container };
