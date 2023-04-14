// pages/api/search.js
import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: `https://hapi-books.p.rapidapi.com/search/${req.query.title}`,
    headers: {
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      // "X-RapidAPI-Key": NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Key": "5e4bdb2efamsh3e4f1e67fcd88c2p12b0a1jsn98db42285104",
    },
  };
  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
  //   const options = {
  //     method: "GET",
  //     url: "https://hapi-books.p.rapidapi.com/search/the+walking+dead",
  //     headers: {
  //       "X-RapidAPI-Key": "5e4bdb2efamsh3e4f1e67fcd88c2p12b0a1jsn98db42285104",
  //       "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function(response) {
  //       console.log(response.data);
  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
}
