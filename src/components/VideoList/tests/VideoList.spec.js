import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from '../VideoList.component';
import mockedData from '../../../youtube-videos-mock.json';

describe('The Video List rendering', () => {
  it('Shows the title of the fist mock video', () => {
    render(<VideoList items={mockedData.items} />);
    expect(
      screen.findByText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeTruthy();
  });

  it('Shows the title of the last mock video', () => {
    render(<VideoList items={mockedData.items} />);
    expect(screen.findByText('Why Wizeline?')).toBeTruthy();
  });

  it('Shows the amount of videos provided', () => {
    const itemCount = mockedData.items.length();
    render(<VideoList items={mockedData.items} />);
    expect(screen.findByRole('img')).toBe(itemCount);
  });

  it('Fills non description videos with Loret ipsum ...', () => {
    render(<VideoList items={mockedData.items} />);
    expect(screen.findByText('Lorem ipsum')).toBeTruthy();
  });
});
