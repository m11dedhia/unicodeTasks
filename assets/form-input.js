// document.querySelector('#submit').addEventListener('click', function(e){
//   const firstName=document.querySelector('#firstName').value;

//   const lastName=document.querySelector('#lastName').value;

//   const math=document.querySelector('#math-score').value;

//   const english=document.querySelector('#english-score').value;

//   var feedInput=firstName+' '+lastName+' '+math+' '+english;

//   console.log(feedInput);

//   var local=JSON.parse(window.localStorage.getItem('student-form'));
//   if(local===null){
//     var data=[];
//     data.push(feedInput);
//     window.localStorage.setItem('student-form', JSON.stringify(data));
//   } else{
//     var data=local;
//     data.push(feedInput);
//     data=sorter(JSON.parsedata);
//     window.localStorage.setItem('student-form', JSON.stringify(data));
//   }

//   var html1=`<div class="text-center"           id="sub-container">
//   <a href="student-form-display" class="btn btn-lg btn-info m-auto btn1" id="submit">Submit!</a>
// </div>`;
//   document.querySelector('#sub-container').innerHTML=html1;
//   var html2='<p class="text-success">Submitted</p>';
//   target.innerHTML=html2;
//   e.preventDefault();
// });
