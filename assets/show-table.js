class listData{
  constructor(firstName,lastName,math,eng){
    this.firstName=firstName;
    this.lastName=lastName;
    this.math=math;
    this.eng=eng;
  }
  getAvg(math,eng){
    this.avg=(math+eng)/2;
  }
  createList(firstName,lastName,math,eng){
    let listItem={
      Name:`${firstName} ${lastName}`,
      Score:{
        Math:math,
        English:eng
      }
    }
    return listItem;
  }
}

function sorter(list_inputs){
  var dataListArr=[];
  list_inputs.forEach(function(list_input){
    var data=[];
    data=list_input.split(' ');
    var dataItem=new listData(data[0],data[1],parseInt(data[2]),parseInt(data[3]));
    dataItem.getAvg(dataItem.math,dataItem.eng);
    dataListArr.push(dataItem);
  });
  for(let i=0;i<dataListArr.length;i++){
    for(let j=0;j<dataListArr.length-i-1;j++){
      if(dataListArr[j].avg<dataListArr[j+1].avg){
        let temp=dataListArr[j];
        dataListArr[j]=dataListArr[j+1];
        dataListArr[j+1]=temp;
      }
    }
  }
  var dataOutput=[];
  for(let item of dataListArr){
    dataOutput.push(item.createList(item.firstName,item.lastName,item.math,item.eng));
  }
  return dataOutput;
}
