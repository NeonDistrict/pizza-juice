import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { FiBookmark } from 'react-icons/fi';
import { BsMenuButton } from 'react-icons/bs';
import { HiOutlineCog } from 'react-icons/hi';

import { Container, Grid, ToastContainer } from '@blockadegames/pizza-juice';

import { Hero } from '../components/hero/hero';
import { CardFeatures } from '../components/card-features/card-features';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <ToastContainer />

      <Hero />

      <Container as="section" css={{ my: '$5' }}>
        <Grid columns={{ '@initial': 1, '@lg': 3 }} gap={5}>
          <CardFeatures
            title="Guidelines"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            link="/docs/installation"
            icon={<FiBookmark />}
          />

          <CardFeatures
            title="Components"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            link="/docs/installation"
            icon={<BsMenuButton />}
          />

          <CardFeatures
            title="System"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            link="/docs/installation"
            icon={<HiOutlineCog />}
          />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
