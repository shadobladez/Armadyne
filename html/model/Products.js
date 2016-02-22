// Creating the class
var Products = function(){

	var myData = [];
	$.getJSON('../json/products.json', function (data) {
		myData = data;
	});
	
	return {
		getData: function (){
			return myData;
		},
		isEmpty: function (){
			if (myData.length === 0) {
				return true;
			}
		}
	};
}();