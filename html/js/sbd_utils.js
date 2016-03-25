var sbd_drawArc =  function(theCanvas, value, total) {

    var v = value;
    var t = total;
    var s = (v/t)*2;

//      var canvas = document.getElementById('myCanvas');
    var canvas = document.getElementById(theCanvas);
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 65;
    var startAngle = (s-0.5) * Math.PI;
    var endAngle = (2.0-0.5) * Math.PI;
    var counterClockwise = false;

    // clear the whole canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius, -0.5 * Math.PI, endAngle, counterClockwise);
    context.lineWidth = 20;

    // line color
    context.strokeStyle = 'black';
    context.stroke();

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 7;

    // line color
    context.strokeStyle = 'white';
    context.stroke();

    // text
    context.font = '40px serif';
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(v,x, y+13);

};

var sbd_countDown = function(the_days, the_hours, the_minutes, the_seconds, the_callback){
    var mytime;

    var days = the_days;
    var hours = the_hours;
    var minutes = the_minutes;
    var seconds = the_seconds;


    var sbd_displayTime = function () {

        seconds -= 1;
        if  (seconds < 0) {
            seconds = 59;
            minutes -= 1;
            if  (minutes < 0) {
                minutes = 59;
                hours -= 1;
                if  (hours < 0) {
                    hours = 23;
                    days -= 1;
                }
            }
        }

        $('.days').html(days);
        $('.hours').html(hours);
        $('.minutes').html(minutes);
        $('.seconds').html(seconds);

        sbd_drawArc('dayCanvas',days,30);
        sbd_drawArc('hourCanvas',hours,0);
        sbd_drawArc('minuteCanvas',minutes,0);
        sbd_drawArc('secondCanvas',seconds,0);

        if (seconds == 0 && minutes == 0 && hours == 0 && days == 0) {
            clearInterval(mytime);
            the_callback();
        }
    };

    mytime = setInterval(sbd_displayTime, 1000);

};

var sbd_ajax = function(action, data, function_success) {
    var my_object = {};
    my_object.data = JSON.stringify(data);
    $.ajax(
        {
            url: "http://192.168.1.248:5000/"+ action
            , data  : my_object
            , type  : 'post'
            , dataType : 'jsonp'
            , success : function(response) {
                function_success(response);
            }
            , error  : function(jqXHR, text_status, error_thrown) {
                console.log('Error from backend server, please re-try later.');
            }
        }
    );
};