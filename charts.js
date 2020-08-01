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

  // var cell0=row.insertCell(0);
  // cell0.innerHTML='Country';

  // var cell1=row.insertCell(1);
  // cell1.innerHTML='Total Cases';

  // var cell2=row.insertCell(2);
  // cell2.innerHTML='Total Deaths';

  // var cell3=row.insertCell(3);
  // cell3.innerHTML='Region';

  // var cell4=row.insertCell(4);
  // cell4.innerHTML='';
}





// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'pie',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });