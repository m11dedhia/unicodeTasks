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
  document.querySelector('.world-stats').addEventListener('click', getMapping(rsp.countries_stat,rsp.statistic_taken_at,rsp.world_total));
})
.catch(err => {
	console.log(err);
});

function getMapping(countryData,timeFrame,worldTotal){
  var cap=document.getElementById('time');
  var now=new Date(timeFrame);
  cap.innerHTML=`Last Updated at: ${now}`;

  var table=document.querySelector('.table');

  countryData.forEach((data,index)=>{
    var row=table.insertRow(index);
    var testCell=row.insertCell(0);
    testCell.innerHTML=index+1;

    Object.keys(data).forEach((key,index)=>{
      if(index<10){
        var cell=row.insertCell(index+1);
        if(data[key]!==''){
          cell.innerHTML=`${data[key]}`;
        } else{
          cell.innerHTML='-';
        }
      }
    });
    
    
  });

  var header=table.createTHead();
  var row=header.insertRow(0);
  
  var attr=['No.','Country', 'Total Cases', 'Total Deaths', 'Region', 'Total Recovered', 'New Deaths', 'New Cases', 'Critical', 'Active', 'Cases per million'];

  attr.forEach((attribute,index)=>{
    var cell=row.insertCell(index);
    cell.innerHTML=attribute;
  });
}