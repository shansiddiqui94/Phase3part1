// Data Structures and Algorithms:


// Split up the string into individual strings and then loop thru them.
// Then see how many times that word is repeated

// let text = "Is your favorite car brand BMW? Mine is Toyota";

// let text2 = "I like to eat Apples and Watermelon"
function cars(){

    let wordCounts = { };
    let words = text.split(" ");
    
  // now we have the words isolated,
  //Check how many times the words are repeated. 

    for(let i = 0; i < words.length; i++)
        wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
        return wordCounts
    }
    console.log(cars())
   
//_______________________________________________

//1. SQL 
// SELECT ord_no, ord_date, purch_amt
// FROM orders
// WHERE salesman_id=5001;

// //2. 
// SELECT salesman.name, customer.cust_name, customer.city
// FROM salesman
// INNER JOIN customer
// ON salesman.city=customer.city;