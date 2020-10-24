import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  afterEach(() => cleanup());
  it('renders History List', () => {
    const { asFragment } = render(<HistoryList
      history={[
        {
          url: "test-url.com",
          method: "GET"
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});