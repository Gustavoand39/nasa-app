const fetchData = async (urlParams?: string) => {
  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        urlParams && urlParams?.length > 0 ? urlParams : ""
      }`
    );

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchData;
