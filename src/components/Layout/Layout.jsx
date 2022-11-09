import { Container } from './layout.styled';

const Layout = ({ children }) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
};
export default Layout;
