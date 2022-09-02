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
            title="Foundations"
            description="The core of the design system. It contains the design tokens, the global styles, and the components."
            link="/docs/tokens/colors"
            icon={<FiBookmark />}
          />

          <CardFeatures
            title="Components"
            description="Library that contains a set of high quality components that defines our interfaces."
            link="/docs/components/forms/button"
            icon={<BsMenuButton />}
          />

          <CardFeatures
            title="System"
            description="The simpliest way to use our decisions on our options, and to create new components."
            link="/docs/system/css-prop"
            icon={<HiOutlineCog />}
          />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
