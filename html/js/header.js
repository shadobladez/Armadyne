$(function(){

	setTimeout (function (){
		var productList = Products.getData();
		console.log( "Begin Header Script" );
		console.log( productList );
		console.log( "End Header Script" );
		var previousGroup = "";
		var products = productList.map(function(item) {
			var myHtml = "";
			if (item.product_group !== previousGroup) {
				previousGroup = item.product_group;
				myHtml += '<li role="separator" class="divider">' + '</li>';
			}
			myHtml += '<li>' + '<a href="../Products/' + item.product_name + '.html">' + item.product_name + '</a>' +'</li>';
			return myHtml;
		});
		$('.sbd_product_list').html(products.join(""));
	}, 0);
});

// Shopping Cart
$(function(){
	$(".sbd_shopping_cart").click(function(){
		sbd_shopping_cart();
	})
});

function sbd_shopping_cart(){
	$("#sbd_shopping_cart_modal").load("../sbd_shopping_cart.html", function(){
		$("#sbd_shopping_cart").modal('show');
	})
}

// UserName
$(function(){
	$(".sbd_user_name").click(function(){
		sbd_user_name();
	})
});

function sbd_user_name (){
	$("#sbd_user_name_modal").load("../sbd_user_name.html", function(){
		$("#sbd_user_name").modal('show');
	})
}

// Log In
$(function(){
	$(".sbd_log_in").click(function(){
		sbd_log_in();
	})
});

function sbd_log_in (){
	$("#sbd_log_in_modal").load("../sbd_log_in.html", function(){
		$("#sbd_log_in").modal('show');
		$(".sbd_forgot_pass").on('click', function(){sbd_forgot_pass()});
	})
}

// Forgot Pass
$(function(){
	$(".sbd_forgot_pass").click(function(){
		sbd_forgot_pass();
	})
});

function sbd_forgot_pass(){
	$("#sbd_forgot_pass_modal").load("../sbd_forgot_pass.html", function(){
		$("#sbd_log_in").modal('hide');
		$("#sbd_forgot_pass").modal('show');
	})
}

// Sign Up
$(function() {
	$(".sbd_sign_up").click(function (){
		sbd_sign_up();
	})
});

function sbd_sign_up (){
	$("#sbd_sign_up_modal").load("../sbd_sign_up.html", function(){
		$("#sbd_sign_up").find("button[type=submit]").click(function(){
			sbd_sign_up_submit();
		});
		$("#sbd_sign_up").modal('show');
	})
}

var savedEmail = [];

function sbd_sign_up_submit() {
	var id1 = $('#sbd_email_text').val();
	var id2 = $('#sbd_confirmation_email').val();

	if (id1 === '' || id2 === '') {
		alert('Both form fields must be entered');
		return false;
	}

	if (id1 !== id2) {
		alert('Not The Same');
		return false;
	} else {
		sbd_ajax("sign_up", {"user_name" : id1, "user_email": id1}, function (response) {
			if (response.status === "ok") {
				$('.sbd_error_response').css('color', 'blue');
				$('.sbd_error_response').html(response.message);
				$('#sbd_submit_button').prop('disabled', true);
			} else {
				$('.sbd_error_response').css('color', 'red');
				$('.sbd_error_response').html(response.message);
			}
			console.log(response);

		});
	}
}