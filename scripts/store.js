const addToCart = document.querySelectorAll(".addCart");

let products = [
  {
    name: "Hand and Nettle (Album Cover)",
    tag: "pinkNettle",
    Price: 10,
    inCart: 0,
  },
  {
    name: "Hand and Nettle (Album Cover Black)",
    tag: "nlackNettle",
    Price: 10,
    inCart: 0,
  },
  {
    name: "Kessassa Print",
    tag: "kessassa",
    Price: 20,
    inCart: 0,
  },
  {
    name: "Window Girl",
    tag: "window",
    Price: 12,
    inCart: 0,
  },
  {
    name: "Sea Serpent",
    tag: "serpent",
    Price: 18,
    inCart: 0,
  },
  {
    name: "Skibba",
    tag: "skibba",
    Price: 8,
    inCart: 0,
  },
];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", () => {
    cartNumbers(products[i]);
  });
}

function onLoadCart() {
  if (productNumbers) {
    let productNumbers = localStorage.getItem("cartNumbers");
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    alert("Item added to cart!");
  } else {
    localStorage.setItem("cartNumbers", 1);
    alert("Item added to cart!");
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

onLoadCart();
