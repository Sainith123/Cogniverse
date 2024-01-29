import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import '../src/index.css';  
import { ToastContainer } from 'react-toastify';    
import React from 'react';
import ReactDOM from 'react-dom/client';    


test('renders HomePage by default', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Assert that the HomePage component is rendered
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});

test('navigates to AddBlog page when clicking link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Click the link to AddBlog page
  userEvent.click(screen.getByText(/Add Blog/i));

  // Assert that the AddBlog component is rendered
  expect(screen.getByText(/Add Blog Page/i)).toBeInTheDocument();
});

test('navigates to DetailsPage when clicking link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Click the link to DetailsPage
  userEvent.click(screen.getByText(/Details Page/i));

  // Assert that the DetailsPage component is rendered
  expect(screen.getByText(/Details Page/i)).toBeInTheDocument();
});
