	var americo_shoppingCart = (function() {
		// Private methods and properties

		// Array represents shoppingcart
		var cart = [];

		// constructor that create objects representation of every item
		function Item (id, name, price, image, count) {
			this.id = id;
			this.name = name;
			this.price = price;
			this.image = image;
			this.count = count;
		};
		// Save cart objects to the localStorage
		function saveCart() {
			localStorage.setItem("shoppingCart", JSON.stringify(cart));
		};

		// Get cart objects from the localStorage
		function loadCart() {
			cart = JSON.parse(localStorage.getItem("shoppingCart"));
			if (cart === null) {
				cart = [];
			}
		};

		loadCart();

		// Public methods and properties
		var obj = {};

		obj.addITemToTheCart = function(id, name, price, image, count) {
			for(var i in cart) {
				if( cart[i].id === id) {
					cart[i].count += count;
					saveCart();
					return;
				}
			}
			var item = new Item(id, name, price, image, count);
			cart.push(item);
			saveCart();
		};

		// remove one item
		obj.removeItemFromCart = function(id) { 
			for(var i in cart) {
				if( cart[i].id === id) {
					cart[i].count --;
					if(cart[i].count === 0) {
						cart.splice(i, 1);
					}
					break;
				}
			}
			saveCart();
		};

		obj.removeAllItemFromCart = function(id) { // remove all items id
			for (var i in cart) {
				if(cart[i].id === id) {
					cart.splice(i, 1);
					break;
				}
			}
			saveCart();
		};

		obj.clearCart = function () {
			cart = [];
			saveCart();
		};

		obj.countCart = function () {
			var totalCount = 0;
			for (var i in cart) {
				totalCount += cart[i].count;
			}
			return totalCount;
		};

		obj.totalCart = function () {
			var totalCost = 0;
			for (var i in cart) {
				totalCost += cart[i].price * cart[i].count;
			}
			return totalCost.toFixed(2);
		};

		obj.listCart = function () {
			var cartCopy = [];

			for (var i in cart) {
				var item = cart[i];
				var itemCopy = {};
				for( var p in item) {
					itemCopy[p] = item[p];
				}
				itemCopy.total = (item.price * item.count).toFixed(2);
				cartCopy.push(itemCopy);
			}

			return cartCopy;
		};


		return obj;
	})();


	