
/// declaring general variables

var productsContainer;
var myIndex ;
var addproduct = true 
var inps=document.getElementsByClassName("form-control");
var productName = document.getElementById("productNameInp")
var productPrice = document.getElementById("productPriceInp")
var productCategory = document.getElementById("productCategoryInp")
var productDesc = document.getElementById("productDescInp")

if(localStorage.getItem("productsData")== null){
  productsContainer=[];
}
else{
  productsContainer=  JSON.parse (localStorage.getItem("productsData"));
  displayData();

}
hideEdit()

/// function add products to productscontainer array 
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
// save data in locall storage 
localStorage.setItem("productsData",JSON.stringify(productsContainer));
displayData();

clearForm();
 
}


// function to display data in boxes 
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
  <button onclick="editMode(`+i+`)" class="btn btn-outline-warning mb-3">Update</button>

</div>`
}
document.getElementById("rowBody").innerHTML=temp;

}

// function to clear form data after add product 
function clearForm(){
  for(var i=0; i<inps.length;i++){
    inps[i].value = "";
  }
}

// function to delte selected product 
function delateData(index){

  var delated = productsContainer.splice(index,1);
 
localStorage.setItem("productsData",JSON.stringify(productsContainer));
displayData();
  

}
// function to search about specific product 
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
        <button  onclick="editMode(`+i+`)" class="btn btn-outline-warning mb-3">Update</button>
   
      </div>`
    }
    document.getElementById("rowBody").innerHTML=temp;
  }

  }

  // function to set valadation on input name 

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
    // function to set valadation on input price 
  function validatePrice(userName){

    var userNameRegx =/^[1-9][A-Z]?/;


    if( userNameRegx.test(userName) == false){

      document.getElementById("addBtn").disabled= "True";

    }
    else{
      document.getElementById("addBtn").removeAttribute("disabled");
    }
  }

// function to edit product 
function editProduct(){

  var productName = document.getElementById("productNameInp").value;
  var productPrice = document.getElementById("productPriceInp").value;
  var productCategory = document.getElementById("productCategoryInp").value;
  var productDesc = document.getElementById("productDescInp").value;

 let updatedProduct  = {
  name: productName,
  price:productPrice,
  category:productCategory ,
  desc:productDesc,

}
productsContainer[myIndex] = updatedProduct

 localStorage.setItem("productsData",JSON.stringify(productsContainer));
 console.log("product updated " + updatedProduct)
clearForm()
displayData()

}

  function  editMode(index) {
    showEdit()
    myIndex = index
  document.getElementById("productNameInp").value =  productsContainer[index].name
  document.getElementById("productPriceInp").value =  productsContainer[index].price
  document.getElementById("productCategoryInp").value = productsContainer[index].category
  document.getElementById("productDescInp").value = productsContainer[index].desc

  }

  // get data of products from local storage 

  (() => {

    data = JSON.parse(localStorage.getItem("productsData")) || []
     console.log(data)
    
  })();




   function hideEdit(){
    document.getElementById('edit').style.display ='none'
    
  }
  function showEdit() {
    document.getElementById('edit').style.display ='inline'
  }
