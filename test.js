const axios = require('axios')
axios({
    method: "get",
    url: "https://distributed-dsd08.herokuapp.com/api/task/listing",
    headers: {
        "api-token": "4c901bcdba9f440a2a7c31c0bcbd78ec",
        "project-type": "LUOI_DIEN",
    },
})
    .then(function (response) {
        // console.log(response);

    })
    .catch(function (err) {
        //handle error
        // console.log(err);

    });