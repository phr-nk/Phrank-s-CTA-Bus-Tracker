import axios from "axios";

var northBoundStopID = 17266;
var southBoundStopID = 1837;

var baseUrl =
  "http://ctabustracker.com/bustime/api/v3/getpredictions?key=" +
  process.env.REACT_APP_CTA_KEY +
  "&format=json&top=5";

export const getBusTime = async (routeNumber, direction) => {
  try {
    var directionID;
    if (direction === "North") {
      directionID = northBoundStopID;
    } else {
      directionID = southBoundStopID;
    }
    var config = {
      method: "get",
      url: baseUrl + "&rt=" + routeNumber + "&stpid=" + directionID,
      headers: {},
    };

    return await axios(config)
      .then(function (response) {
        return JSON.stringify(response.data["bustime-response"].prd[0].prdctdn);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }

  const getDirec = async () => {};
};
