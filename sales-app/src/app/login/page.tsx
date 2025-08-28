
import Link from 'next/link'; 
import Header from '../shared-components/Header';
import Navbar from '../shared-components/Navbar';
import Footer from '../shared-components/Footer';

export default function LoginPage() {
  return (
    <>
      {}
      <Header />
      <Navbar />

      {}
      <div >
        <div className="flex md:flex-row pt-20 lg:gap-19 mb-24 ">
          { }
          { }
          <div style={{ height: '610px', width: 'auto' }}>
            <img
              src="/signup-image.png"
              alt="Mobile Shopping"


              style={{ height: '100%', width: '88%' }}

            />
          </div>

          <div className="lg:w-1/2 max-w-md w-full mt-35">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
            />

            {}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-1 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-150"
              >
                Log in
              </button>

              <Link
                href="/forgot-password"
                className="text-sm text-red-600 underline hover:text-red-700 whitespace-nowrap"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
        </div>
      </div>

      {}
      <Footer />
    </>
  );
}

      