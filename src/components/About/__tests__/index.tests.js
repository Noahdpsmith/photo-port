import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
describe('About component', () => {
    const { asFragment } = render(<About />);
    // First Test
    it('renders', () => {
      render(<About />);
    });
    expect(asFragment()).toMatchSnapshot();
    //render About
    // Second Test
  })
  
  afterEach(cleanup);
