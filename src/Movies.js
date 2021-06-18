const fetchApi = async (url) => {
  try {
    const data = await fetch(url);
    return data.json();
  }catch(error) {
    throw new Error(error.message);
  }
}

fetchApi('https://api.themoviedb.org/3/search/movie?api_key=your_api_key&language=en-US&query=a&page=1&include_adult=false')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err.message)
  })