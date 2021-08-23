import React from 'react';
import { Button } from './components/Button';

export const App = () => (
  <div
    style={{
      padding: '2rem',
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start',
      flexDirection: 'column'
    }}
  >
    <Button label="primary" size="large" fullWidth />
    <Button label="primary" size="medium" />
    <Button label="primary" size="large" />
  </div>
);
