import React from 'react';
import { useGlobal } from '../../providers/Global';
import { HomeLink, Error, ErrorTitle } from './NotFound.styled';

function NotFoundPage() {
  const { state } = useGlobal();
  const { darkTheme } = state;

  return (
    <section className="not-found" data-testid="Not Found">
      <HomeLink dark={darkTheme ? 1 : 0} to="/" className="home-link">
        home
      </HomeLink>
      <Error dark={darkTheme}>404</Error>
      <ErrorTitle dark={darkTheme}>Page not found</ErrorTitle>
    </section>
  );
}

export default NotFoundPage;
