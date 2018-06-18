// animations.js
//


$('.iron--wrap').waypoint(function() {

$('.iron--wrap .gel-wrap').addClass('in-view');


}, {
   offset: '94%'});


$('.iron--wrap').waypoint(function() {
var animWaypoint = [
    {
        time:60,
        step:"fade",
        selector:'.iron--wrap'
    }
	];
	function runAnimation(i, timeline){
    setTimeout(function(){        $(animWaypoint[i].selector).addClass(animWaypoint[i].step);
        }, timeline);
    }

var timeline = 0;
for(var i=0; i<animWaypoint.length; i++){
    timeline = parseInt(animWaypoint[i].time, 10) + parseInt(timeline, 10);
    runAnimation(i, timeline);
}


}, {
   offset: '95%'});
