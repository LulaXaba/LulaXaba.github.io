// Sample data
var wishlistItems = [
   { id: 1, name: 'Item 1' },
   { id: 2, name: 'Item 2' },
   // Add more items as needed
];

// Function to add an item to the cart
function addToCart(itemId) {
   // Implement your add to cart logic here
   console.log('Add to cart clicked for item: ' + itemId);
}

// Function to delete an item from the wishlist
function deleteItem(itemId) {
   // Remove the item from the wishlistItems array
   wishlistItems = wishlistItems.filter(item => item.id !== itemId);

   // Re-render the wishlist
   renderWishlist();
}

// Function to render the wishlist
function renderWishlist() {
   var wishlistDiv = document.getElementById('wishlist');
   wishlistDiv.innerHTML = '';  // Clear the wishlist

   // Create and append a div for each item in the wishlist
   wishlistItems.forEach(item => {
       var itemDiv = document.createElement('div');
       itemDiv.className = 'wishlist-item';

       var itemNameDiv = document.createElement('div');
       itemNameDiv.className = 'item-name';
       itemNameDiv.textContent = item.name;
       itemDiv.appendChild(itemNameDiv);

       var addToCartButton = document.createElement('button');
       addToCartButton.className = 'add-to-cart';
       addToCartButton.textContent = 'Add to Cart';
       addToCartButton.onclick = function() { addToCart(item.id); };
       itemDiv.appendChild(addToCartButton);

       var deleteButton = document.createElement('button');
       deleteButton.className = 'delete-item';
       deleteButton.textContent = 'Delete';
       deleteButton.onclick = function() { deleteItem(item.id); };
       itemDiv.appendChild(deleteButton);

       wishlistDiv.appendChild(itemDiv);
   });
}

// Render the wishlist on page load
renderWishlist();
