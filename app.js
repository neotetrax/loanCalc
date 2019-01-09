//Get UI varibles
const amount = document.getElementById("amount");
const years = document.getElementById("years");
const interest = document.getElementById("interest");
const Monthlypay = document.getElementById("MonthPay");
const TotalPay = document.getElementById("TotalPay");
const TotalInt = document.getElementById("TotalInt");
//Listen for submit

document.getElementById("loan-form").addEventListener('submit',function(e){
  //hide loader
 document.getElementById("results").style.display ="none";

  //show loader
  document.getElementById("loading").style.display ="block";
  setTimeout(calculateResults,700)
  e.preventDefault();
});


function calculateResults(){
console.log("calculating");
const prin = parseFloat(amount.value);
const calculatedP = parseFloat(interest.value) / 100 / 12;
const calculatedPay = parseFloat(years.value) * 12;
//compute monthly Payment
const x = Math.pow(1 + calculatedP,calculatedPay);
const monthly = (prin*x*calculatedP)/(x-1);


if(isFinite(monthly)){
  Monthlypay.innerHTML = `<i class="fa fa-inr" aria-hidden="true"></i> ${monthly.toFixed()}`;
  TotalPay.innerHTML = `<i class="fa fa-inr" aria-hidden="true"></i> ${(monthly * calculatedPay)
.toFixed()}`;
  TotalInt.innerHTML = `<i class="fa fa-inr" aria-hidden="true"></i> ${((monthly * calculatedPay) - prin).toFixed()}`;
 //show  result
 document.getElementById("results").style.display ="block";

  //hide loader
  document.getElementById("loading").style.display ="none";
}else{
    showError(" Please Check the Numbers!");
}
  amount.value = "";
  years.value = "";
  interest.value ="";

}


//Show Error
function showError(error){

///Get Elements

const card = document.querySelector(".card-content");
const head = document.querySelector("#heading");

  //hide result
  document.getElementById("results").style.display ="none";

  //hide loader
  document.getElementById("loading").style.display ="none";
 const divc = document.createElement("div");
 divc.className = "notification is-danger";
 divc.innerHTML ='<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>'
 divc.appendChild(document.createTextNode(error));
  console.log(divc);
  card.insertBefore(divc, head);

setTimeout(clearError, 1100);
}


function clearError(){
  document.querySelector(".notification").remove();
}



