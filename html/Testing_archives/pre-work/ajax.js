/**
 * process ajax
 *
 * @param async (true | false)
 * @param data (array)
 * @param function_success
 * @param function_error
 */
JKY.ajax = function(action, data, function_success, function_error) {
	var my_object = {};
	my_object.data = JSON.stringify(data);
	JKY.show('jky-loading');
	$.ajax(
		{
			url: "http://192.168.1.100:5000/"+ action
			, data  : my_object
			, type  : 'post'
			, dataType : 'jsonp'
			, success : function(response) {
				if (response.status === 'ok') {
					function_success(response);
				} else {
					JKY.display_message(response.message);
				}
			}
			, error  : function(jqXHR, text_status, error_thrown) {
				JKY.display_message('Error from backend server, please re-try later.');
			}
		}
	);
};