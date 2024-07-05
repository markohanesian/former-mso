import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExportButton from './ExportButton';
import { ThemeProvider } from '../../theme/ThemeContext'; 

// Mocking the modules used in ExportButton
jest.mock('html2canvas');
jest.mock('jspdf');

describe('ExportButton', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <ExportButton />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});