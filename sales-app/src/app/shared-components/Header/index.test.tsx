
// import { render, screen } from '@testing-library/react';
// import Header from './index';

// describe('Header Component', () => {
//   beforeEach(() => {
//     render(<Header />);
//   });

//   it('renders the header with promotional message', () => {
//     const promoText = screen.getByText(
//       /Summer Sale For All Swim Suits And Free Express Delivery – OFF 50!/i
//     );
//     expect(promoText).toBeInTheDocument();
//   });

//   it('renders the ShopNow link', () => {
//     const shopNowLink = screen.getByRole('link', { name: /ShopNow/i });
//     expect(shopNowLink).toBeInTheDocument();
//     expect(shopNowLink).toHaveAttribute('href', '#');
//   });

//   it('renders the language selector', () => {
//     const languageText = screen.getByText('English');
//     expect(languageText).toBeInTheDocument();
//     expect(screen.getByText('▼')).toBeInTheDocument();
//   });

//   it('applies correct styles to the header', () => {
//     const header = screen.getByRole('banner');
//     expect(header).toHaveStyle({
//       background: '#222',
//       color: '#fff',
//       fontSize: '0.95rem',
//       padding: '0.4rem 0',
//     });
//   });

//   it('applies correct styles to the container div', () => {
//     const container = screen.getByText(/Summer Sale/i).parentElement?.parentElement;
//     expect(container).toHaveStyle({
//       maxWidth: '1100px',
//       marginLeft: '29%',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     });
//   });
// });