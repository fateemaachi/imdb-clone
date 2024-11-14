import Result from "@/components/Result";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  // Add a loading state with a timeout
  let loaderVisible = true;
  
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;
  console.log(results)

  // Hide the loader after a small delay
  setTimeout(() => {
    loaderVisible = false; // Hide loader after timeout
  }, 2000); // Set the timeout to hide the loader after 500ms (adjust as needed)

  return( 
  <div>
    <Result results={results}/>
  </div>
  )

};

export default Home;
