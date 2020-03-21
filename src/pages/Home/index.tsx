import React, { FunctionComponent } from 'react';

interface HomeProps {
  title?: string
}

const Home: FunctionComponent<HomeProps> = () => (
  <h1>Real Profit</h1>
);

export default Home;
