// animations.js
//


$('.krypton').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.krypton .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.krypton .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.krypton .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.krypton .animateme4'
    },
    {
        time:60,
        step:"fade",
        selector:'.krypton .animateme5'
    },
    {
        time:60,
        step:"fade",
        selector:'.krypton .animateme6'
    },
    {
        time:60,
        step:"fade",
        selector:'.krypton .animateme7'
    },
    {
        time:60,
        step:"fade",
        selector:'.krypton .animateme8'
    },
    {
        time:60,
        step:"fade",
        selector:'.krypton .animateme9'
    },
    {
        time:60,
        step:"fade",
        selector:'.krypton .animateme10'
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
$('.tin').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.tin .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.tin .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.tin .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.tin .animateme4'
    },
    {
        time:60,
        step:"fade",
        selector:'.tin .animateme5'
    },
    {
        time:60,
        step:"fade",
        selector:'.tin .animateme6'
    },
    {
        time:60,
        step:"fade",
        selector:'.tin .animateme7'
    },
    {
        time:60,
        step:"fade",
        selector:'.tin .animateme8'
    },
    {
        time:60,
        step:"fade",
        selector:'.tin .animateme9'
    },
    {
        time:60,
        step:"fade",
        selector:'.tin .animateme10'
    },
    {
        time:200,
        step:"fade",
        selector:'.tin .animateme11'
    },
    {
        time:200,
        step:"fade",
        selector:'.tin .animateme12'
    },
    {
        time:200,
        step:"fade",
        selector:'.tin .animateme13'
    },
    {
        time:200,
        step:"fade",
        selector:'.tin .animateme14'
    },
    {
        time:200,
        step:"fade",
        selector:'.tin .animateme15'
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
$('.aluminium.standard').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.aluminium.standard .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.aluminium.standard .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.aluminium.standard .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.aluminium.standard .animateme4'
    },
    {
        time:60,
        step:"fade",
        selector:'.aluminium.standard .animateme5'
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
$('.aluminium.sport').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.aluminium.sport .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.aluminium.sport  .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.aluminium.sport  .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.aluminium.sport  .animateme4'
    },
    {
        time:60,
        step:"fade",
        selector:'.aluminium.sport  .animateme5'
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


$('.terbium').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.terbium .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.terbium .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.terbium .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.terbium .animateme4'
    },
    {
        time:200,
        step:"fade",
        selector:'.terbium .animateme5'
    },
    {
        time:200,
        step:"fade",
        selector:'.terbium .animateme6'
    },
    {
        time:200,
        step:"fade",
        selector:'.terbium .animateme7'
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

$('.carbon.hero__horizontal').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.carbon.hero__horizontal .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.carbon.hero__horizontal .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.carbon.hero__horizontal .animateme3'
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

$('.carbon.standard').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.carbon.standard .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.carbon.standard .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.carbon.standard .animateme3'
    },
    { 
        time:160,
        step:"fade",
        selector:'.carbon.standard .animateme4'
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

$('.gold').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.gold .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.gold .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.gold .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.gold .animateme4'
    },
    {
        time:200,
        step:"fade",
        selector:'.gold .animateme5'
    },
    {
        time:200,
        step:"fade",
        selector:'.gold .animateme6'
    },
    {
        time:200,
        step:"fade",
        selector:'.gold .animateme7'
    },
	   {
        time:200,
        step:"fade",
        selector:'.gold .animateme8'
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


$('.bronze').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.bronze .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.bronze .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.bronze .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.bronze .animateme4'
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

$('.iron').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.iron .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.iron .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.iron .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.iron .animateme4'
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

$('.helium, .helium_advert').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.helium .animateme1, .helium_advert .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.helium .animateme2, .helium_advert .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.helium .animateme3, .helium_advert .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.helium .animateme4, .helium_advert .animateme4'
    },
    {
        time:240,
        step:"fade",
        selector:'.helium .animateme5, .helium_advert .animateme5'
    },
    {
        time:280,
        step:"fade",
        selector:'.helium .animateme6, .helium_advert .animateme6'
    },
    {
        time:320,
        step:"fade",
        selector:'.helium .animateme7, .helium_advert .animateme7'
    },
    {
        time:360,
        step:"fade",
        selector:'.helium .animateme8, .helium_advert .animateme8'
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

$('.lead').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.lead .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.lead .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.lead .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.lead .animateme4'
    },
    {
        time:200,
        step:"fade",
        selector:'.lead .animateme5'
    },
    {
        time:200,
        step:"fade",
        selector:'.lead .animateme6'
    },
    {
        time:200,
        step:"fade",
        selector:'.lead .animateme7'
    },
    {
        time:200,
        step:"fade",
        selector:'.lead .animateme8'
    },
    {
        time:200,
        step:"fade",
        selector:'.lead .animateme9'
    },
    {
        time:200,
        step:"fade",
        selector:'.lead .animateme10'
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

$('.mostPopular').waypoint(function() {
var animWaypoint = [
    { 
        time:60,
        step:"fade",
        selector:'.mostPopular .animateme1'
    },
    { 
        time:120,
        step:"fade",
        selector:'.mostPopular .animateme2'
    },
    { 
        time:160,
        step:"fade",
        selector:'.mostPopular .animateme3'
    },
    {
        time:200,
        step:"fade",
        selector:'.mostPopular .animateme4'
    },
    {
        time:200,
        step:"fade",
        selector:'.mostPopular .animateme5'
    },
    {
        time:200,
        step:"fade",
        selector:'.mostPopular .animateme6'
    },
    {
        time:200,
        step:"fade",
        selector:'.mostPopular .animateme7'
    },
    {
        time:200,
        step:"fade",
        selector:'.mostPopular .animateme8'
    },
    {
        time:200,
        step:"fade",
        selector:'.mostPopular .animateme9'
    },
    {
        time:200,
        step:"fade",
        selector:'.mostPopular .animateme10'
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
