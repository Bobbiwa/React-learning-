import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseCard from '../CourseCard'
import { getName } from '../../../utils/token';

test('loads and displays greeting', async () => {
  render(<CourseCard />);

  expect(screen.getByRole('title')).toHaveTextContent('COURSES');
  expect(screen.getByRole('desc')).toHaveTextContent('description');
  expect(screen.getByRole('author')).toHaveTextContent('authors');
});
