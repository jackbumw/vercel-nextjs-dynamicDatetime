const fetch = require("node-fetch");

const fetchCharacters = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results = await res.json();
  // ADD ONE HERE
  return results;
};

export default async (req, res) => {
  try {
    const characters = await fetchCharacters();
    // ADD ONE HERE
    console.log(characters.time.updatedISO);
    res.send(`<?xml version="1.0" encoding="utf-8"?><datetime>${characters.time.updatedISO}</datetime>`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};