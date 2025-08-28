
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../page';
import Link from 'next/link';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid="mock-link">
      {children}
    </a>
  );
  MockLink.displayName = 'Link';
  return MockLink;
});

jest.mock('../shared-components/Header', () => () => <div data-testid="header">Header</div>);
jest.mock('../shared-components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('../shared-components/Footer', () => () => <div data-testid="footer">Footer</div>);

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe('LoginPage Component', () => {
  beforeEach(() => {
    render(<LoginPage />);
  });

  it('renders header, navbar, and footer components', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders login form with heading and description', () => {
    expect(screen.getByText('Log in to Exclusive')).toBeInTheDocument();
    expect(screen.getByText('Enter your details below')).toBeInTheDocument();
  });

  it('renders email or phone number input', () => {
    const emailInput = screen.getByPlaceholderText('Email or Phone Number');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'text');
  });

  it('renders password input', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('renders login button', () => {
    const loginButton = screen.getByRole('button', { name: /log in/i });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('type', 'submit');
  });

  it('renders forgot password link', () => {
    const forgotPasswordLink = screen.getByRole('link', { name: /forgot password/i });
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink).toHaveAttribute('href', '/forgot-password');
  });

  it('renders mobile shopping image', () => {
    const image = screen.getByAltText('Mobile Shopping');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/signup-image.png');
  });

  it('updates email input value on change', () => {
    const emailInput = screen.getByPlaceholderText('Email or Phone Number');
    fireEvent.change(emailInput, { target: { value: 'titi@yohannes.com' } });
    expect(emailInput).toHaveValue('titi@yohannes.com');
  });

  it('updates password input value on change', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });
});