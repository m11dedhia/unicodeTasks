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
  dataListArr=[];
  list_inputs.forEach(function(list_input){
    let data=[];
    data=list_input.split(' ');
    dataItem=new listData(data[0],data[1],parseInt(data[2]),parseInt(data[3]));
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
  dataOutput=[];
  for(let item of dataListArr){
    dataOutput.push(item.createList(item.firstName,item.lastName,item.math,item.eng));
  }
  return dataOutput;
}

sorter(['Rashmil Panchani 99 97', 'Parag Vaid 95 93', 'Siddharth Sanghavi 98 100']);