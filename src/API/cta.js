import axios from "axios";

var baseUrl =
  "http://ctabustracker.com/bustime/api/v3/getpredictions?key=" +
  process.env.REACT_APP_CTA_KEY +
  "&rt=22&stpid=17266&format=json&top=5";

export const getBusTime = async () => {
  try {
    var config = {
      method: "get",
      url: baseUrl,
      headers: {},
    };

    return await axios(config)
      .then(function (response) {
        return JSON.stringify(response.data["bustime-response"].prd[0].dstp);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
};
