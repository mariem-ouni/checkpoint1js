document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');
  
    // Update total price
    function updateTotalPrice() {
      let total = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
      });
      totalPriceElement.textContent = total.toFixed(2);
    }
  
    // Increase quantity
    cartItems.forEach(item => {
      item.querySelector('.increase').addEventListener('click', () => {
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotalPrice();
      });
  
      // Decrease quantity
      item.querySelector('.decrease').addEventListener('click', () => {
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantityElement.textContent = --quantity;
          updateTotalPrice();
        }
      });
  
      // Remove item
      item.querySelector('.remove').addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
      });
  
      // Favorite item
      const favoriteButton = item.querySelector('.favorite');
      favoriteButton.addEventListener('click', () => {
        favoriteButton.classList.toggle('active');
      });
    });
  
    // Initial total price calculation
    updateTotalPrice();
  });
  