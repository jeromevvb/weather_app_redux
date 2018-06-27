const config = {
  // reducer name
  name: "viewWeather", // will be used to decorate every action (singular prefered)
  uppercaseName: "VIEW_WEATHER", // useful to map objects in collection
  modelProps: ["city"], // can be an empty list (might be usefull if you need paging...)
  collectionProps: [""], // path to your rest server
  paths: {
    item:
      "http://api.openweathermap.org/data/2.5/weather?q={city}&APPID=5fc47362925abcb0b8417e49c8cc59e0&units=metric",
    collection: ""
  }
};

export default config;
