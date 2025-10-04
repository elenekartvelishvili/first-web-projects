// // 1)


// let pusharr = [];

// let addbutton=document.getElementById('addNumber')
// let input=document.getElementById('numberInput')

// addbutton.addEventListener('click',function() {
//     let value=input.value
//     let addnumber=parseInt(value)

    
//         pusharr.push(addnumber);
//         console.log(pusharr)
   
// })

// let paragraph=document.getElementById('output')
// let filterbutton=document.getElementById('filterNumber')


// filterbutton.addEventListener('click',function() {
//  let evennumbers=pusharr.filter((a) => a % 2 == 0)
//     paragraph.innerText=evennumbers
// })

//  2)

// let products = [];

// let nameInput = document.getElementById("productName");
// let priceInput = document.getElementById("productPrice");
// let addButton = document.getElementById("addProduct");
// let productList = document.getElementById("productlist");

// addButton.addEventListener('click', function () {
//     let productname = nameInput.value;
//     let productprice = priceInput.value;


//     products.push({ name: productname, price: productprice });


//     let li = document.createElement('li');
//     li.innerText = `Name: ${productname}, Price: ${productprice} gel`;
//     productList.appendChild(li);

   
// });


// let input = document.getElementById('textinput');
// let select = document.getElementById('styleselect');
// let p = document.getElementById('style');
// let changeButton = document.getElementById('btn');

// changeButton.addEventListener('click', () => {
//     p.textContent = input.value;

    
//     p.style.fontWeight = 'normal';
//     p.style.fontStyle = 'normal';
//     p.style.color = 'black';

    
//     switch (select.value) {
//         case 'bold':
//             p.style.fontWeight= 'bold';
//             break;
//         case 'italic':
//             p.style.fontStyle = 'italic';
//             break;
//         case 'color':
//             p.style.color = 'purple';
//             break;
//     }
// });

