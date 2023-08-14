/*
    where to write 
    display data
        innerHTML;
        document.write();
        window.alert();
        console.log();
    var userAge , userName , userMail;
    JavaScript Identifiers
    JavaScript is Case Sensitive
    Camel Case
    comments
    javascript semiColons
    datatypes 
        primitives 
            Boolean
            Null
            Undefinded
            Number
            String
        Object

    if condition
    switch case
    Comparison Operators ( == , === , !=  , !== ,  > , < , >= , <= )
    Logical Operators ( &&  , ||   )
    for loop
    while loop
    do while loop
    functions
    object
    string methods    

*/

function test()
{
    var userInp = document.getElementById("userInp").value;
    var result = 0;
   for(var i = 0 ; i < 12 ; i++)
   {
       result  += Number(userInp);
       console.log(result );
   }
    
}
//console.log(Math.max(10 , 12 , 20));




var userAge;


userAge = prompt("enter your Age :");

console.log(userAge);