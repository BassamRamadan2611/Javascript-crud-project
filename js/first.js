
var productsContainer;
var inps=document.getElementsByClassName("form-control");

if(localStorage.getItem("productsData")== null){
  productsContainer=[];
}
else{
  productsContainer=  JSON.parse (localStorage.getItem("productsData"));
  displayData();

}

function addProuduct() {



var productName = document.getElementById("productNameInp").value;
var productPrice = document.getElementById("productPriceInp").value;
var productCategory = document.getElementById("productCategoryInp").value;
var productDesc = document.getElementById("productDescInp").value;




var product= {
  name: productName,
  price:productPrice,
  category:productCategory ,
  desc:productDesc,




}


productsContainer.push(product);


localStorage.setItem("productsData",JSON.stringify(productsContainer));
displayData();

clearForm();
 

 
}

function displayData(){

  var temp="";
for (var i=0; i<productsContainer.length;i++){
  temp+= ` <div class="col-md-3 mt-3">
  <div class="product">
   <img class="img-fluid" id="myImage" src="images/2.jpg">
   <h4> `+productsContainer[i].name+`<span class=" ml-3 badge badge-primary">`+productsContainer[i].category+`</span></h2>
   <p>`+productsContainer[i].desc+`</p>

<div class="price">
`+productsContainer[i].price+`
</div>
  </div>
  <button onclick="delateData(`+i+`)" class="btn btn-outline-danger mb-3 "> Delate</button>
  <button onclick="update()" class="btn btn-outline-warning mb-3">Update</button>

</div>`
}
document.getElementById("rowBody").innerHTML=temp;



}
function clearForm(){
  for(var i=0; i<inps.length;i++){
    inps[i].value = "";
  }
}
function delateData(index){

  var delated = productsContainer.splice(index,1);
 
localStorage.setItem("productsData",JSON.stringify(productsContainer));
displayData();
  
  

}
  function searchProducts(term){
    var temp="";
    for(var i=0;i<productsContainer.length ;i++){

    if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())){
    
        temp+= ` <div class="col-md-3 mt-3">
        <div class="product">
         <img class="img-fluid" id="myImage" src="images/2.jpg">
         <h4> `+productsContainer[i].name+`<span class=" ml-3 badge badge-primary">`+productsContainer[i].category+`</span></h2>
         <p>`+productsContainer[i].desc+`</p>
   
      <div class="price">
      `+productsContainer[i].price+`
      </div>
        </div>
        <button onclick="delateData(`+i+`)" class="btn btn-outline-danger mb-3 "> Delate</button>
        <button  onclick="update()" class="btn btn-outline-warning mb-3">Update</button>
   
      </div>`
    }
    document.getElementById("rowBody").innerHTML=temp;
  }

  }

  function validateName(userName){

    var userNameRegx =/^[A-Z][a-z]{3,8}/;
    var poductPrice= /^[1-9]{3,8}/;


    if( userNameRegx.test(userName) == false){

      document.getElementById("addBtn").disabled= "True";

    }
    else{
      document.getElementById("addBtn").removeAttribute("disabled");
    }
  }
  function validatePrice(userName){

    var userNameRegx =/^[1-9][A-Z]?/;


    if( userNameRegx.test(userName) == false){

      document.getElementById("addBtn").disabled= "True";

    }
    else{
      document.getElementById("addBtn").removeAttribute("disabled");
    }
  }
  function update(){
 
 
  
     
  }
