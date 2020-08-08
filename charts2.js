fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline", {
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
  document.querySelector('.india-progress').addEventListener('click', getMapping(rsp));
})
.catch(err => {
	console.log(err);
});

function getMapping(response){
  // var cap=document.getElementById('time');
  // var now=new Date(timeFrame);
  // cap.innerHTML=`Last Updated at: ${now}`;

  var table=document.querySelector('.table');

  response.forEach((data,index)=>{
    var row=table.insertRow(index);
    var testCell=row.insertCell(0);
    testCell.innerHTML=index+1;

    Object.keys(data).forEach((key,index)=>{
      var cell=row.insertCell(index+1);
      if(data[key]!==''){
        cell.innerHTML=`${data[key]}`;
      } else{
        cell.innerHTML='-';
      }
    });
    
    
  });

  var header=table.createTHead();
  var row=header.insertRow(0);
  
  var attr=['No.', 'Daily Confirmed', 'Daily Deceased', 'Daily Recovered', 'Date', 'Total Confirmed', 'Total Deceased', 'Total Recovered'];

  attr.forEach((attribute,index)=>{
    var cell=row.insertCell(index);
    cell.innerHTML=attribute;
  });


}