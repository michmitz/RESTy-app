import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem'

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders history item', () => {
    const { asFragment } = render(<HistoryItem
      method="GET"
      url="test-url.com"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});