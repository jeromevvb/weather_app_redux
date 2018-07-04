export const reactArc = {
  name: "cityWeather",
  uppercaseName: "CITY_WEATHER",
  modelProps: ["cityName"],
  collectionProps: [""],
  paths: {
    item:
      "http://api.openweathermap.org/data/2.5/forecast?q={cityName}&APPID=5fc47362925abcb0b8417e49c8cc59e0&units=metric",
    collection: ""
  }
};
