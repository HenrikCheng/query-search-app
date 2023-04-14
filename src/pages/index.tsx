import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  // Initializing with a default value
  const [keyword, setKeyword] = useState("The alchemist");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    const options = {
      method: "GET",
      url: `https://hapi-books.p.rapidapi.com/search/${keyword}`,
      headers: {
        "X-RapidAPI-Key": "5e4bdb2efamsh3e4f1e67fcd88c2p12b0a1jsn98db42285104",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        <span className="text-active">Books</span> Search
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
        Search for any book using the Books API
      </h2>
      <form
        className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          // allow enter key to submit
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter the book's title"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            type="submit"
            // Setting a default value
            defaultValue={keyword}
            onClick={(e) => {
              // Store input in state
              onSubmit();
              // Remove previous results
              setSearchResults(null);
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
