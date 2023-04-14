import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const options = {
  //   method: "GET",
  //   url: "https://hapi-books.p.rapidapi.com/nominees/romance/2020",
  //   headers: {
  //     "X-RapidAPI-Key": "5e4bdb2efamsh3e4f1e67fcd88c2p12b0a1jsn98db42285104",
  //     "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function(response) {
  //     console.log(response.data);
  //   })
  //   .catch(function(error) {
  //     console.error(error);
  //   });

  return (
    <main className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        <span className="text-active">Books</span> Search
      </h1>
      <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
        Search for any book using the Books API
      </h2>
    </main>
  );
}
