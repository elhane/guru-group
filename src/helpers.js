async function getData(url) {
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => data)
    .catch((err) => err);
}

export { getData };
