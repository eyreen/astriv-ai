import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to the Dispute Resolution App</h1>
      <Link href="/data-form/page">
        <button className='btn btn-primary'>
            Submit a Dispute
        </button>
      </Link>
    </div>
  );
};

export default HomePage;