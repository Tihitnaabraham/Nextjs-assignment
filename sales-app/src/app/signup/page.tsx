
import Header from '../shared-components/Header';
import Navbar from '../shared-components/Navbar';
import Footer from '../shared-components/Footer';
import Image from 'next/image';

export default function SignupPage() {
  return (
    <>
      { }
      <Header />
      <Navbar />

      { }
      <div >
        <div className="flex md:flex-row pt-20 lg:gap-19 mb-24 ">
          { }
          { }
          <div style={{ height: '610px', width: 'auto' }}>
            <Image
              src="/signup-image.png"
              alt="Mobile Shopping"


              style={{ height: '100%', width: '88%' }}

            />
          </div>

          { }
          <div className="lg:w-1/2 max-w-md w-full mt-19">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Create an account</h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
              />
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
              <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-150"
            >
              Create Account
            </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:border-gray-400 transition-colors"
              >
                {}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    d="M22.56 12.25c0-.73-.06-1.44-.18-2.13H12v4.02h5.84c-.24 1.34-.93 2.46-2.03 3.21v2.68h3.26c1.9-1.75 2.98-4.25 2.98-7.16z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.26-2.68c-.93.64-2.15 1.03-3.52 1.03-2.7 0-4.94-1.81-5.76-4.18H4.33v2.69C6.09 21.02 8.85 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.23 14.18c-.18-.54-.28-1.12-.28-1.7 0-.58.1-1.16.28-1.7V7.1H4.33A8.07 8.07 0 0 0 4 12c0 1.33.31 2.6.86 3.71l2.9 2.29z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.43c1.32 0 2.51.46 3.45 1.35l2.54-2.54C16.46 3.03 14.3 2 12 2 8.85 2 6.09 3.98 4.33 7.1l2.9 2.29c.82-2.37 3.06-4.18 5.76-4.18z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6 text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-red-600 underline hover:text-red-600">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>

      { }
      <Footer />
    </>
  );
}