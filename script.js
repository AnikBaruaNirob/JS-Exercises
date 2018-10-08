console.log("external")

function sumArray(arr){
    
    var sum = 0;
    arr.forEach(function(value,index){
        
        sum = sum + value;
        
    });
    return sum;
    
}
console.log(sumArray([2,4,5,6,7]))

function checkEmail(emailstring){
    var emailformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var match = emailformat.test(emailstring);
    return match;
}
console.log(checkEmail("jhon@smith.com "));
console.log(checkEmail("jhonsmith.com"));

