import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { getName } from '../../../utils/token';

test('loads and displays greeting', async () => {
  render(<Header />);

  expect(screen.getByRole('title')).toHaveTextContent('COURSES');
  expect(screen.getByRole('username')).toHaveTextContent(getName());
});
