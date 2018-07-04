export const reactArc = {
  // reducer name
  name: "giphy",
  uppercaseName: "GIPHY",
  modelProps: ["cityName"],
  collectionProps: [""],
  paths: {
    item:
      "https://api.giphy.com/v1/gifs/search?q={cityName}&api_key=wnDUsmzi8MTW69WrqBpm507aZsI6uO36",
    collection: ""
  }
};
