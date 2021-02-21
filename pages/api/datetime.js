const fetch = require("node-fetch");

const fetchCharacters = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results = await res.json();

  // ADD ONE HERE
  console.log(results);
  return results;
};

export default async (req, res) => {
  try {
    const characters = await fetchCharacters();

    // ADD ONE HERE
    console.log(characters)
    res.status(200).json({ characters });
  } catch (error) {
    res.status(500).json({ error });
  }
};