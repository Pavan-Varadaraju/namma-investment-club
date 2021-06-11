export const getLatestNavs = (SchemeCode) => {
  const fetchedData = fetch("https://api.mfapi.in/mf/" + SchemeCode)
    .then((res) => res.json())
    .then(
      (result) => {
        return Number(result.data[0].nav);
      },
      (error) => {
        console.error("Error", error);
      }
    );
    return fetchedData;
};
