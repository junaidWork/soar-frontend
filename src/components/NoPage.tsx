import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 rounded-3xl">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="w-full flex justify-center items-center md:w-[190px] h-[50px] font-semibold px-6 py-2 bg-[#232323] text-white rounded-2xl hover:opacity-90 transition-opacity">
            Home
          </Link>

          <button
            type="button"
            className="w-full flex text-xs sm:text-base justify-center items-center md:w-[190px] h-[50px] font-semibold px-6 py-2 bg-transparent text-[#232323] border border-[#232323] rounded-2xl hover:opacity-90 transition-opacity">
            Contact support <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NoPage;
