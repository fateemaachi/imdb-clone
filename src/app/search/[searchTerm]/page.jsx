import Result from "@/components/Result";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        {results && results.length === 0 ? (
          <h1 className="text-center pt-6">No results found</h1>
        ) : (
          <Result results={results} />
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center pt-6">
        <h1>Error loading results</h1>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default SearchPage;
