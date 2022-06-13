/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
var form=document.querySelector("#form");
var reports=document.querySelector("#reports");

function display(data){
  var parent=document.createElement("div");
  parent.style.boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

  var name=document.createElement("h1");
  name.innerText=data.name;

  var batch=document.createElement("p");
  batch.textContent=data.batch;

  var type=document.createElement("p");
  type.textContent=data.type;

  var student_code=document.createElement("p");
  student_code.innerText=data.student_code;

  var unit=document.createElement("p");
  unit.textContent=data.unit;

  var sprint=document.createElement("p");
  sprint.textContent=data.sprint;

  var score=document.createElement("p");
  score.innerText=data.score;

 

  var obtainedMarks1=Number(data.score);

var td8 = document.createElement("h3");
if(obtainedMarks1<=3){
    td8.innerText="Learning";
    td8.style.color="red";
}else if(obtainedMarks1>=4 && obtainedMarks1<=7 ){
    td8.innerText="Achieving";
    td8.style.color="orange";
}
else if(obtainedMarks1>=8 && obtainedMarks1<=10 ){
    td8.innerText="Mastery";
    td8.style.color="green";
}


  var btn=document.createElement("button");
  btn.textContent="DELETE";
  btn.addEventListener("click",function(event){
    event.target.parentNode.remove();
  })

  parent.append(name,batch,type,student_code,unit,sprint,score,td8,btn)

  reports.append(parent);
}


form.addEventListener("submit",function(event){
  event.preventDefault();

  var data={
    email:form.email.value,
    type:form.type.value,
    student_code:form.student_code.value,
    unit:form.unit.value,
    name:form.name.value,
     sprint:form.sprint.value,
     
  }
  display(data);
  console.log(data);
})
