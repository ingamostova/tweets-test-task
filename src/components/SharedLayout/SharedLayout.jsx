import {
  Container,
  Header,
  Link,
  //   Layout,
} from 'components/SharedLayout/SharedLayout.styled';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
// import { RotatingLines } from 'react-loader-spinner';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/tweets" state={{ from: location }}>
            Tweets
          </Link>
        </nav>
      </Header>
      <Container>
        <Suspense
        // fallback={
        // //   <Layout>
        // //     <RotatingLines strokeColor="grey" strokeWidth="3" width="77" />
        // //   </Layout>
        // }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
