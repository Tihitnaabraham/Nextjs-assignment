
import { render, screen, fireEvent } from '@testing-library/react';
import SignupPage from '../page';

jest.mock('../shared-components/Header', () => () => <div data-testid="header">Header</div>);
jest.mock('../shared-components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('../shared-components/Footer', () => () => <div data-testid="footer">Footer</div>);

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe('SignupPage Component', () => {
  beforeEach(() => {
    render(<SignupPage />);
  });

  it('renders header, navbar, and footer components', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders signup form with heading and description', () => {
    expect(screen.getByText('Create an account')).toBeInTheDocument();
    expect(screen.getByText('Enter your details below')).toBeInTheDocument();
  });

  it('renders name input', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');
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

  it('renders create account button', () => {
    const createButton = screen.getByRole('button', { name: /create account/i });
    expect(createButton).toBeInTheDocument();
    expect(createButton).toHaveAttribute('type', 'submit');
  });

  it('renders sign up with Google button with SVG', () => {
    const googleButton = screen.getByRole('button', { name: /sign up with google/i });
    expect(googleButton).toBeInTheDocument();
    expect(googleButton).toHaveAttribute('type', 'button');
    expect(googleButton.querySelector('svg')).toBeInTheDocument();
  });

  it('renders login link', () => {
    const loginLink = screen.getByRole('link', { name: /log in/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('renders mobile shopping image', () => {
    const image = screen.getByAltText('Mobile Shopping');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/signup-image.png');
  });

  it('updates name input value on change', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');
  });

  it('updates email input value on change', () => {
    const emailInput = screen.getByPlaceholderText('Email or Phone Number');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('updates password input value on change', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });
});