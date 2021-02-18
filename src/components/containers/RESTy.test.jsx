import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RESTy from './RESTy';
import { getResponse } from '../../services/getResponse-api';

jest.mock('../../services/getResponse-api');

describe('RESTy container', () => {
  it('returns a response and stores in history', async() => {
    getResponse.mockResolvedValue([
      { 'response': 'json' }
    ]);

    render(<RESTy />);

    const button = screen.getByTestId('button');

    await fireEvent.click(button)

    const jsondisplay = await screen.findByTestId('display') 

    expect(jsondisplay).not.toBeEmptyDOMElement();
  });
});