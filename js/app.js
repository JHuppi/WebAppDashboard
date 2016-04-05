/*Alert Removal*/
$("#exit").click(function() {
    $("#alertArea").hide();
    $("#notifDot").hide();
});

/*Chart Initialization*/
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleBeginAtZero = true;

var trafficCanvas = $("#trafficChart").get(0).getContext("2d");

var trafficData = {
    labels: ["Jan 01","Jan 02","Jan 03","Jan 04","Jan 05","Jan 06","Jan 07","Jan 08","Jan 09", "Jan 10","Jan 11","Jan 12","Jan 13","Jan 14","Jan 15"],
    datasets: [
        {
            label: "Traffic",
            fillColor: "#e2e3f6",
            strokeColor: "#a3a6e3",
            pointColor: "#fbfbfb",
            pointStrokeColor: "#7477bf",
            data: [10,2,19,3,8,7,2,6,11,3,18,14,16,17,11]
        }
    ]
};

var trafficChart = new Chart(trafficCanvas).Line(trafficData,
                        {bezierCurve: false});

var dayCanvas = $("#dayChart").get(0).getContext("2d");

var dayData = {
    labels: ["S-Jan 09", "S-Jan 10", "M-Jan 11", "T-Jan 12", "W-Jan 13", "T-Jan 14", "F-Jan 15"],
    datasets: [
        {
            label: "Daily Traffic",
            fillColor: "#7477bf",
            strokeColor: "#7477bf",
            data: [11,3,18,14,16,17,11]
        }
    ]
}

var weeklyChart = new Chart(dayCanvas).Bar(dayData);

var mobileCanvas = $("#mobileChart").get(0).getContext("2d");

var mobileData = [
    {
        value: 0.25,
        color: "#81ca8f",
        label: "Tablet"
    },
    {
        value: 0.35,
        color: "#74b2bf",
        label: "Phone"
    },
    {
        value: 0.45,
        color: "#7477bf",
        label: "Desktop"
    }
]

var mobileChart = new Chart(mobileCanvas).Doughnut(mobileData,
                        {segmentShowStroke: false,
                         legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"});

$("#mobileUsers").append(mobileChart.generateLegend());

/*Social Stats*/
var socialStats = {twitter: 250, facebook: 300, gplus: 120};

$("#twitterStats").append('<span class="socialNum">' + socialStats.twitter + '</span>');
$("#faceStats").append('<span class="socialNum">' + socialStats.facebook + '</span>');
$("#gplusStats").append('<span class="socialNum">' + socialStats.gplus + '</span>');

/*Message Widget*/
var messageForm = document.getElementById("messageForm");
var userName = messageForm.elements["userName"];
var message = messageForm.elements["message"];

var $overlay = $('<div id="overlay"></div>');
var $escape = $('<div id="escape">X</div>');
var $mConfirmation = $('<div id="mConfirmation"></div>');
var $message = $('<p></p>');

$overlay.append($mConfirmation);
$mConfirmation.append($escape);
$mConfirmation.append($message);
$("body").append($overlay);


$("#send").click(function() {
    $("#messageForm:input, #messageForm textarea").each(function() {
        if($(this).val() !== '') {
            $message.text('Your message "' + message.value + '" has been sent to: ' + userName.value);
            $overlay.css("display","flex");
        }
    });
});

$("#escape").click(function() {
   $overlay.hide(); 
});

/*Settings Widget*/
(function($) { 
$.fn.toggleSwitch = function() {
    if ($(this).hasClass("off")) {
        $(this).toggleClass("off");
        $(this).css("background-color","#7477bf");
        $(this).children("span").replaceWith('<span class="status">ON</span>');
        $(this).children(".circle").css("order","2");
    } else {
        $(this).toggleClass("off");
        $(this).css("background-color","#b2b2b2");
        $(this).children("span").replaceWith('<span class="status">OFF</span>');
        $(this).children(".circle").css("order","-1");
    }
}
}(jQuery));

$("#email").click(function() {
    $(this).toggleSwitch();
});
$("#public").click(function() {
    $(this).toggleSwitch();
});

$("#cancel").click(function() {
    $("#email").addClass("off");
    $("#email").toggleSwitch();
    $("#public").addClass("off");
    $("#public").toggleSwitch();
});