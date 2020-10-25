## Question 1:

Explain what and why will be logged on the console if we run this code snippet?

Bonus: explain what and why will be logged on the console if we used let instead of var inside the for loop?

```js
const myFunction = () => {
  const arr = [10, 12, 15, 21];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log('Index: ' + i);
    }, 3000);
  }
};

myFunction();
```
Answer:
the output will be 
Index: 4
Index: 4
Index: 4 
Index: 4
with 3 seconds interval because runs after the loop reaches i = 4

## Question 2:

Explain what and why would be logged on the console?
```js
   function parent() {
     var hoisted = "I'm a variable";
     function hoisted() {
         return "I'm a function";
     }
     return hoisted(); 
   }
   console.log(parent());

   Answer :
   erro message will bi displayed on the console 'hoisted is not a function' because we have already declared
   hoisted as a variable and the variable hoisted is already hoisted before the return function.
   so when we call the return function hoisted Javascript already declared the variable with that name.
   
```

## Question 3:
Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Display the content of each book along with the book image
      - Returns true if it works, false if it doesn't
  
      Target the '#root' element in 'index.html'.
      Use the following object: 
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
## Question 4:
What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in? 
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
the explanation why is the important part)
```js
function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() { 
            console.log('five');
        }, 1000);c
    }, 0);
    console.log('six');
}
test();

Answer:
The function first dispplays 'one' 'six' 'four' because there is no delay interval for these three then after one second it displays 'four' and 'two' 'five' and 'three' because they all have the sme time delay(1 second). set interval API makes the function to run asynchronously.
```
