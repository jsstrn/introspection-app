import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from 'react-testing-library';
import AdminPage from '../Pages/AdminPage/AdminPage.jsx';

describe('Admin Page', () => {
  describe('admin page', () => {
    test('renders dropzone and input elements with correct attribute', () => {
      const history = createMemoryHistory({ initialEntries: ['/'] });
      const { container, getByText } = render(
        <Router history={history}>
          <AdminPage />
        </Router>
      );
      const input = container.querySelector('input');
      expect(input).toHaveAttribute('accept', '.csv');
      expect(input).not.toHaveAttribute('multiple');
      expect(getByText(/or drag it here/i)).toBeInTheDocument();
    });
  });
});
