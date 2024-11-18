import Image from "next/image";


const moviePage = async ({ params }) => {
  const movieId = params.id;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch movie data');
    }

    const movie = await res.json();

    return (
      <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
          <Image
            src={
              movie.backdrop_path || movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`
                : '/placeholder.png' // Add a fallback placeholder image
            }
            alt={movie.title || movie.name || 'Movie Image'}
            width={500}
            height={300}
            className='rounded-lg'
            style={{ maxWidth: '100%', height: '100%' }}
          />
          <div className='p-2'>
            <h2 className='text-lg mb-3 font-bold'>
              {movie.title || movie.name || 'Title Not Available'}
            </h2>
            <p className='text-lg mb-3'>{movie.overview || 'Overview not available.'}</p>
            <p className='mb-3'>
              <span className='font-semibold mr-1'>Date Released:</span>
              {movie.release_date || movie.first_air_date || 'N/A'}
            </p>
            <p className='mb-3'>
              <span className='font-semibold mr-1'>Rating:</span>
              {movie.vote_count || 'No ratings yet'}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className='w-full text-center p-4'>
        <h2 className='text-xl font-bold'>Something went wrong</h2>
        <p>Please try again later.</p>
      </div>
    );
  }
};

export default moviePage;



