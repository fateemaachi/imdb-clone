import React from "react";

const Result = ({ results }) => {
  return (
    <div>
       {results.map((result) => (
        <div key={result.id} style={{ marginBottom: "20px" }}>
          <h2>{result.original_title || result.name}</h2>
          <p>{result.overview}</p>
          <p>Release Date: {result.release_date || result.first_air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Result;
