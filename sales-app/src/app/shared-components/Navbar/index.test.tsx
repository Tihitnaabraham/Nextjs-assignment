import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './index';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('renders the logo text', () => {
    expect(screen.getByText('Exclusive')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const homeLink = screen.getByRole('link', { name: /home/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const signUpLink = screen.getByRole('link', { name: /sign up/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/home');

    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');

    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute('href', '/signup');
  });

  it('renders search input with SVG icon', () => {
    const searchInput = screen.getByPlaceholderText('What are you looking for?');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');

    const svgIcon = searchInput.parentElement?.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });

  it('updates search input value on change', () => {
    const searchInput = screen.getByPlaceholderText('What are you looking for?');
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    expect(searchInput).toHaveValue('test search');
  });

  it('applies correct styles to the nav element', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveStyle({
      background: '#fff',
      borderBottom: '1px solid #eee',
      padding: '0.9rem 0',
      width: '100%',
    });
  });

  it('applies correct styles to the container div', () => {
    const container = screen.getByText('Exclusive').parentElement?.parentElement;
    expect(container).toHaveStyle({
      maxWidth: '1100px',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    });
  });
});