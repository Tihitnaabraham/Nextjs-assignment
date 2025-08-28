
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';
import '@testing-library/jest-dom';

jest.mock('react-icons/fa', () => ({
  FaFacebookF: () => <span data-testid="facebook-icon">Facebook</span>,
  FaTwitter: () => <span data-testid="twitter-icon">Twitter</span>,
  FaInstagram: () => <span data-testid="instagram-icon">Instagram</span>,
  FaLinkedinIn: () => <span data-testid="linkedin-icon">LinkedIn</span>,
}));


describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders all footer section headings', () => {
    expect(screen.getByText('Exclusive')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Quick Link')).toBeInTheDocument();
    expect(screen.getByText('Download App')).toBeInTheDocument();
  });

  it('renders email subscription section', () => {
    const emailInput = screen.getByPlaceholderText('Enter your email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    expect(subscribeButton).toBeInTheDocument();
  });

  it('renders support section details', () => {
    expect(
      screen.getByText('111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.')
    ).toBeInTheDocument();
    expect(screen.getByText('exclusive@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+88015-88888-9999')).toBeInTheDocument();
  });

  it('renders account section links', () => {
    expect(screen.getByText('My Account')).toBeInTheDocument();
    expect(screen.getByText('Login / Register')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Wishlist')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
  });

  it('renders quick links section', () => {
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms Of Use')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders download app section with images', () => {
    expect(screen.getByText('Save $3 with App New User Only')).toBeInTheDocument();
    expect(screen.getByAltText('QR Code')).toHaveAttribute('src', '/QR code.png');
    expect(screen.getByAltText('Google Play')).toHaveAttribute('src', '/google-play.png');
    expect(screen.getByAltText('App Store')).toHaveAttribute('src', '/app-store.png');
  });

  it('renders social media icons', () => {
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    expect(screen.getByText('© Copyright Rimel 2022. All right reserved')).toBeInTheDocument();
  });
});