import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('Display component', () => {
  afterEach(() => cleanup());

  it('renders Display', () => {
    const { asFragment } = render(<Display
      displayJSON='string'
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});