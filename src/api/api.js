const API_KEY = "5ad857a9-ef34-42cf-81e8-0266bfeb4c0d";
const url = "https://api.thecatapi.com/v1/";

const doRequest = async (endpoint) => {
  let response = await fetch(url + endpoint, {
    headers: {
      "x-api-key": API_KEY,
    },
  });
  return response.json();
};

export default doRequest;
