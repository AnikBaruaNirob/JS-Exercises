console.log("external")

function sumArray(arr){
    
    var sum = 0;
    arr.forEach(function(value,index){
        
        sum = sum + value;
        
    });
    return sum;
    
}
console.log(sumArray([2,4,5,6,7]))


//task - 3

function checkEmail(emailstring){
    var emailformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    var match = emailformat.test(emailstring);
    return match;
}
console.log(checkEmail("jhon@smith.com"));
console.log(checkEmail("jhonsmith.com"));

//task-4

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

 function getReadingStatus(index){
     var book = library[index];
     return book.readingStatus;
 }
 console.log(getReadingStatus(1));
 console.log(getReadingStatus(0));
 console.log(getReadingStatus(2));

