function ClearForm() {
    const form = document.getElementById("contactForm");
    form.reset(); 
    alert("Form has been cleared");
  }
  
  let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  document.getElementById('cart-count').textContent = cart.length;
}

function alertCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  let summary = cart.map(c => `${c.item}: $${c.price.toFixed(2)}`).join('\n');
  alert(`Cart Items:\n${summary}\n\nTotal: $${total.toFixed(2)}`);
}

function checkout() {
  const output = document.getElementById('total-output');
  if (cart.length === 0) {
    output.textContent = "Your cart is empty.";
  } else {
    output.textContent = `Total amount due: $${total.toFixed(2)}`;
  }
}

function clearCart() {
  cart = [];
  total = 0;
  document.getElementById('cart-count').textContent = 0;
  document.getElementById('total-output').textContent = '';
  alert("Cart has been cleared.");
}

