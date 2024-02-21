const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
function   mybox(){
    document.getElementById('error').innerHTML=''
     let enter = document.getElementById('enter').value;
     if(enter==''){
        document.getElementById('error').innerHTML="please enter a value";
     }
     else{
        let Box=document.getElementById('Box');
         let li =document.createElement('li');
         li.textContent=enter;
         let a = document.createElement('a');
         a.textContent="x";
         a.href = "javascript:void(0)";
         a.className="remove";
         li.appendChild(a)
         Box.appendChild(li);

     }
     document.getElementById("enter").value='';
 }
let f=document.querySelector('ul');
 f.addEventListener('click',function(e){
    let Box = document.getElementById('Box');
     let li =e.target.parentNode;
     Box.removeChild(li)

 })
 function my(){
    document.getElementById("etr").value='';
    if(etr==''){
        document.getElementById('btn').innerHTML='please anter your email id '
    }
}
// function submitform(){
//     document.contract-form.submit();
//             document.contract-form.reset();
// }
// let x=function(){
//     document.contract-form.submit();
//     document.contract-form.reset();
// }
// btn.addEventListener('click',x)
// let b=document.getElementsByClassName("btn1");
// btn12.addEventListener('click',wr)
//  let wr=function(e){
//     let write= confirm("you want to submited you email")
//     if(write){
//     document.write();
// }
// else{
//    alert("please rechecked your email")
// }
//  }


document.addEventListener('DOMContentLoaded', function() {
    var counterSpan = document.getElementById('counter');
    var incrementButtons = document.querySelectorAll('.incrementButton');
    var counterValue = sessionStorage.getItem('counterValue') || 0;
    
    counterSpan.textContent = counterValue;

    incrementButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent page refresh
            counterValue++;
            sessionStorage.setItem('counterValue', counterValue);
            counterSpan.textContent = counterValue;
        });
    });
});

// Get the modal
// Handle form submission
// document.addEventListener('DOMContentLoaded', function() {
//     var modal = document.getElementById("myModal");
//     var btn = document.getElementById("openModalBtn");
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks the button, open the modal 
//     btn.onclick = function() {
//       modal.style.display = "block";
//     }

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//       modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     }

//     // Handle form submission
//     document.getElementById("addItemForm").addEventListener("submit", function(event) {
//       event.preventDefault();
//       // Get form data
//       var formData = new FormData(this);
//       // You can now send formData to your API using fetch or XMLHttpRequest
//       // Example using fetch:
//       fetch('https://fakestoreapi.com/products', {
//         method: 'POST',
//         body: formData
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle successful response
//         console.log('Success:', data);
//         // Close the modal
//         modal.style.display = "none";
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//         // Close the modal (if needed)
//         modal.style.display = "none";
//         // Display error message to the user (if needed)
//         alert('An error occurred while submitting the form. Please try again later.');
//       });
//     });
// });

  

// get methode 
// document.addEventListener('DOMContentLoaded', function() {
//     // Fetch data from API
//     fetch('https://6556eeecbd4bcef8b611d6fb.mockapi.io/cards/:id')
//         .then(response => response.json())
//         .then(data => {
//             // Call function to create product cards
//             createProductCards(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });

// function createProductCards(products) {
//     const cardContainer = document.getElementById('cardContainer');

//     products.forEach(product => {
//         // Create card element
//         const card = document.createElement('div');
//         card.classList.add('card');

//         // Create image element
//         const img = document.createElement('img');
//         img.src = product.imageUrl; // Assuming 'imageUrl' is the key for the image in your API response
//         img.alt = 'avatar';

//         // Create card details container
//         const cardDetails = document.createElement('div');
//         cardDetails.classList.add('card-details');

//         // Create heading for product name
//         const productName = document.createElement('h3');
//         productName.textContent = product.productName; // Assuming 'productName' is the key for the product name in your API response

//         // Create paragraph for product description
//         const description = document.createElement('p');
//         description.textContent = `Description: ${product.description}`; // Assuming 'description' is the key for the description in your API response

//         // Create paragraph for product price
//         const price = document.createElement('p');
//         price.textContent = `Price: $${product.price}`; // Assuming 'price' is the key for the price in your API response

//         // Append elements to card details container
//         cardDetails.appendChild(productName);
//         cardDetails.appendChild(description);
//         cardDetails.appendChild(price);

//         // Append image and card details to card
//         card.appendChild(img);
//         card.appendChild(cardDetails);

//         // Append card to card container
//         cardContainer.appendChild(card);
//     });
// }
async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const cardContainer = document.getElementById("cardContainer");

    data.forEach(product => {
        const card = createCard(product);
        cardContainer.appendChild(card);
    });
}

function createCard(product) {
    const card = document.createElement("div");
    card.classList.add("pro");
    const parentImgWrapper = document.createElement("div"); // Creating a parent div for imgWrapper and img
    parentImgWrapper.classList.add("parent-img-wrapper"); // Adding a class to the parent wrapper

    const imgWrapper = document.createElement("div"); // Creating a separate div wrapper for the image
    imgWrapper.classList.add("img-wrapper"); // Adding a class to the image wrapper (you can style this class as needed)

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    imgWrapper.appendChild(img); // Appending the image to the wrapper div
    parentImgWrapper.appendChild(imgWrapper); // Appending the imgWrapper to the parent wrapper

    // Set fixed height and width for the image
   // You can adjust the width as needed
    img.style.height = "200px"; // You can adjust the height as needed
     // Ensure the image covers the specified dimensions without stretching
    const contentWrapper = document.createElement("div"); // Creating a parent div for title, description, price, and star
    contentWrapper.classList.add("content-wrapper");
    const title = document.createElement("h5");
    title.classList.add("title");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.classList.add("description");

    // Split description into words
    const words = product.description.split(' ');

    // Take the first 20 words
    const truncatedDescription = words.slice(0, 5).join(' ');

    // Add ellipsis if the original description has more than 20 words
    description.textContent = words.length > 5 ? truncatedDescription + '...' : truncatedDescription;

    const starContainer = document.createElement("div");
    starContainer.classList.add("star");
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        starContainer.appendChild(star);
    }

    const price = document.createElement("h4");
    price.classList.add("price");
    price.textContent = `$${product.price}`;
const icons = document.createElement("div")
icons.classList.add("icons");
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fal", "fa-shopping-cart", "cart1", "incrementButton");
   // Appending the parent wrapper to the card
   icons.appendChild(cartIcon);
   contentWrapper.appendChild(title);
    contentWrapper.appendChild(description);
    contentWrapper.appendChild(starContainer);
    contentWrapper.appendChild(price);

    card.appendChild(parentImgWrapper);
    card.appendChild(contentWrapper);
    card.appendChild(icons);
    return card;
}



getData();

