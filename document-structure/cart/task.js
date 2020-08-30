const productQuantityControls = document.querySelectorAll(
  ".product__quantity-controls"
);
const product = document.querySelectorAll(".product");
const cartProducts = document.querySelector(".cart__products");

productQuantityControls.forEach((element) => {
  const productQuantityControlDec = element.querySelector(
    ".product__quantity-control_dec"
  );
  const productQuantityControlInc = element.querySelector(
    ".product__quantity-control_inc"
  );
  const productQuantityValue = element.querySelector(
    ".product__quantity-value"
  );

  productQuantityControlDec.addEventListener("click", () => {
    let value = Number(productQuantityValue.textContent);
    value === 1 ? false : (productQuantityValue.textContent = value - 1);
  });

  productQuantityControlInc.addEventListener("click", () => {
    let value = Number(productQuantityValue.textContent);
    productQuantityValue.textContent = value + 1;
  });
});

product.forEach((element) => {
  const productAdd = element.querySelector(".product__add");
  const productImage = element.querySelector(".product__image");

  productAdd.addEventListener("click", () => {
    const cartProduct = document.querySelectorAll(".cart__product");
    cartProduct.length === 0 ? addProduct() : searchProduct();

    function searchProduct() {
      let arrCartProduct = Array.from(cartProduct);
      let finElement = arrCartProduct.find((elementFind) => {
        return elementFind.dataset.id === element.dataset.id;
      });

      if (finElement) {
        finElement.querySelector(
          ".cart__product-count"
        ).textContent = Number(finElement.querySelector(
          ".cart__product-count"
        ).textContent) + Number(element.querySelector(
          ".product__quantity-value"
        ).textContent);
      } else {
        addProduct();
      }
    }

    function addProduct() {
      cartProducts.insertAdjacentHTML(
        "beforeEnd",
        `<div class="cart__product" data-id="${element.dataset.id}">
          <img class="cart__product-image" src="${productImage.src}">
          <div class="cart__product-count">${
            element.querySelector(".product__quantity-value").textContent
          }</div>
        </div>`
      );
    }
  });
});
