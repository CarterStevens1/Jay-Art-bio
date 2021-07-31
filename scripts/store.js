const addToCart = document.querySelectorAll(".add-to-cart");

let products = [
  {
    name: "Hand and Nettle (Album Cover)",
    tag: "CLCKWSNettle",
    price: 10,
    inCart: 0,
  },
  {
    name: "Hand and Nettle (Album Cover Black)",
    tag: "CLCKWSNettleBlack",
    price: 10,
    inCart: 0,
  },
  {
    name: "Kessassa Print",
    tag: "Kessassa",
    price: 20,
    inCart: 0,
  },
  {
    name: "Window Girl",
    tag: "PlankWhiteBGTekst",
    price: 12,
    inCart: 0,
  },
  {
    name: "Sea Serpent",
    tag: "DeIdealeWereld_FINAL_JPEG",
    price: 18,
    inCart: 0,
  },
  {
    name: "Skibba",
    tag: "SkibbaLogo",
    price: 8,
    inCart: 0,
  },
];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCart() {
  let productNumbers;
  if (productNumbers) {
    productNumbers = localStorage.getItem("cartNumbers");
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
  } else {
    localStorage.setItem("cartNumbers", 1);
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;

    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-container");
  let products = document.querySelector(".products");
  if (cartItems && productContainer) {
    products.innerHTML = "";
    Object.values(cartItems).map((item) => {
      products.innerHTML += `<div class='wrap'>
      <div class='product'>
  
      <img class="img-product" src='/images/${item.tag}.png'>
      <span class="name ">${item.name}</span>
      </div>
      <div class="price-amount line">
      $${item.price},00
      </div>
      <div class="quantity line">
      <i class="fas fa-angle-left decrease"></i>
      <span class="cartNumber"> ${item.inCart} </span>
      <i class="fas fa-angle-right increase"></i>
      </div>
      <div class="total line ">
      $${item.inCart * item.price},00
      
      </div>
      </div>
     
      `;
    });
    products.innerHTML += `
      <div class ="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class ="basketTotal">
        $${cartCost},00
        </h4>
        </div>
      `;
  }
}
// Increase cart numbers on click for each specific one(aswell as local storage)

// Decrease cart numbers on click for each specific one(aswell as local storage) (remove if goes below 1 or stop and keep on 1))

//Add a remove button to remove from cart/LS

//Update Total cost &Total with increment/decrement

//Add a payment page

// window.addEventListener("load", () => {
//   const decrease = document.querySelectorAll(".decrease");
//   const cartNumber = document.querySelector(".cartNumber");
//   let wrap = document.querySelectorAll(".wrap");
//   decrease.forEach((low) => {
//     low.addEventListener("click", () => {
//       cartNumber.innerHTML = cartNumber.innerHTML - 1;
//     });
//   });

//   const increase = document.querySelectorAll(".increase");
//   increase.forEach((up) => {
//     up.addEventListener("click", () => {
//       cartNumber.innerHTML = cartNumber.innerHTML + 1;
//     });
//   });

// });

onLoadCart();
displayCart();

// <i class="fas fa-times-circle"></i>
