import { cleanup, screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'
import store from '../../../store/index';
import Header from '../Header';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByRole('title')).toHaveTextContent('COURSES');

});
