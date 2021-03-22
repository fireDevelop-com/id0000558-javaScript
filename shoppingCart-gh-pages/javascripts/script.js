$(document).ready(function() {
	
	loadProducts();
	
	displayCart();
	
	$('#products').on('click', '.buy', function(e) {
		e.preventDefault();
		var parent, id, name, price, image;
		
		parent = $(this).closest('.thumbnail');
		id = parent.find('.itemid').text();
		name = parent.find('.name').text();
		price = parseFloat(parent.find('.price').text()).toFixed(2);
		image = parent.find('img').attr('src');
		
		americo_shoppingCart.addITemToTheCart(id, name, price, image, 1);
		displayCart();

	});	


	$('.panel-footer').on('click', '.emptyCart', function(e) {
		e.preventDefault();
		americo_shoppingCart.clearCart();
		displayCart();
	});

	$('.numberOfItems').html(americo_shoppingCart.countCart());
	

	$('.panel-body').on('click', '#removeItem', function(e) {
		e.preventDefault();
		var itemId = $(this).attr("data-id");
		americo_shoppingCart.removeAllItemFromCart(itemId);
		displayCart();
	});

	$('.panel-body').on('click', '#removeOneItem', function(e) {
		e.preventDefault();
		var itemId = $(this).attr("data-id");
		americo_shoppingCart.removeItemFromCart(itemId);
		displayCart();
	});

	$('.panel-body').on('click', '#addItem', function(e) {
		e.preventDefault();
		var itemId = $(this).attr("data-id");
		americo_shoppingCart.addITemToTheCart(itemId, "", 0, "", 1);
		displayCart();
	});

	
});

function loadProducts() {
	$.getJSON('javascripts/products.json', function(data) {
		var output='';
		for(var i in data.products) {
			output += '<div class="col-sm-6 col-md-4">'
					+ '<div class="thumbnail">'
					+ '<span class="itemid hide">' + data.products[i].id + '</span>'
					+ '<img class="prod-image" src="' + data.products[i].image_url + '" alt="...">'
					+ '<div class="caption">'
					+ '<h3 class="name">' + data.products[i].name + '</h3>'
					+ '<p class="price">' + (data.products[i].price).toFixed(2) + ' :-</p>'
					+ '<p><a href="#!" class="btn btn-success buy" role="button">Köp</a></p>'
					+ '</div></div></div>';
		}

		$('#products').html(output);
		
	});
}

function displayCart() {
	var cartArray = americo_shoppingCart.listCart();
	var output = '';
	for(var i in cartArray){
		output += '<tr class="singleProduct"><td class="prodImage"><img class="img-responsive" src="' + cartArray[i].image + '" alt=""></td>'
		+ '<td class="text-center amountPods">' + cartArray[i].count + '</td>'
		+ '<td class="singleProd">' + cartArray[i].price + '&nbsp;:-</td>'
		+ '<td class="totalProd">' + cartArray[i].total + '&nbsp;:-</td></tr>'
		+ '<td class="deleteItem"><a id="removeItem" data-id="' + cartArray[i].id + '" href="#!" class="btn btn-danger btn-xs" role="button">Ta bort alla</a></td>'
		+ '<td class="addItem"><a id="removeOneItem" data-id="' + cartArray[i].id + '" href="#!" class="btn btn-primary btn-xs" role="button">Ta bort 1</a></td>'
		+ '<td class="addItem"><a id="addItem" data-id="' + cartArray[i].id + '" href="#!" class="btn btn-success btn-xs" role="button">Lägg till 1</a></td></tr>';
	}

	$('#productLists').html(output);
	$('.numberOfItems').html(americo_shoppingCart.countCart());
	$('span.cartTotal').html(americo_shoppingCart.totalCart());
}

							

	

		



	

							
									
										
										
										
									