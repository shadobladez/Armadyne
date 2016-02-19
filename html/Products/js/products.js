var products =
	[	{"id": "001", "name": "L6039", 	"creator": "", "price": 50.00, "inventory": 0, "main_img": "P1030634"}
	,	{"id": "001", "name": "L6039W", "creator": "", "price": 90.00, "inventory": 0, "main_img": "P1030646"}
	,	{"id": "001", "name": "L6052", 	"creator": "", "price": 50.00, "inventory": 0, "main_img": "P1030598"}
	,	{"id": "001", "name": "L6052", "creator": "", "price": 90.00, "inventory": 0, "main_img": "P1030480"}
	];

var totalInventory =
	[	{"id": "001", "name": "L6039", 	"price": 50.00, "inventory": 19 }
	,	{"id": "002", "name": "L6039W", "price": 90.00, "inventory": 7 }
	,	{"id": "003", "name": "L6052", 	"price": 50.00, "inventory": 11 }
	,	{"id": "004", "name": "L6052", "price": 90.00, "inventory": 4 }
	];

var totalPrice = [];
totalPrice.reduce(totalInventory);


$(function()
{
	var myhtml = "";
	products.forEach(function(product){
		var my_price = "";
		if (product.inventory === 0){
			my_price = "Out of Stock!";
		} else {
			my_price = "$" + product.price.toFixed(2);
		}

		myhtml +=
			'<div class="product_box">'
			+    '<div class="product_image">'
			+    '<a href="productDetails' + product.detail_page + '.html">'
			+    '<img src="../img/drones/Lance_Photos/2015-12-16/Small/png/'+ product.name + '/' + product.main_img +'.png">'
			+    '</a>'
			+    '</div>'
			+    '<div class="product_details">'
			+    '<div class="product_name">Model: '+ product.name +' </div>'
			+    '<div class="product_price">'+ my_price +'</div>'
			+    '</div>'
			+    '</div>'
		;

	});
	$(".main_body").append(myhtml);


});
