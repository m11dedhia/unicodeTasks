fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "280f01bafbmsh16410b801436c8ap1cd97djsne49875e3f8fe"
	}
})
.then(response => {
  return response.json();
})
.then(rsp =>{
  getMapping(rsp.countries_stat,rsp.statistic_taken_at,rsp.world_total);
})
.catch(err => {
	console.log(err);
});

function getMapping(countryData,timeFrame,worldTotal){
  console.log(timeFrame);
  console.log(countryData);
  console.log(worldTotal);
  console.log(worldTotal.total_cases);
}