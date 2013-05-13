//DivPeek - Custom jQuery CSS3 Animation Trigger Script by David Halford
//(see https://github.com/davidhalford/DivPeek)
//===============================================================================
//CONFIG: 
var elementsToTrack = ["#scrollfx1","#scrollfx2","#scrollfx3","#scrollfx4","#scrollfx5","#scrollfx6","#scrollfx7"];

var pixelOffset = -24;
var inClassName = "inViewPort";
var outClassName = "outViewPort";
//===============================================================================

//add function to see of elements exist (otherwise removing an elemnet from DOM but not from array breaks everything)
jQuery.fn.exists = function(){return this.length>0;}

//define vars out of scope
var viewPortHeight = $(window).height();
var scrollFromTop = $(window).scrollTop();
var scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));

//function for recalculating all positioning vars in scroll/resize
function recalcVars(){
	viewPortHeight = $(window).height();
	scrollFromTop = $(window).scrollTop();
	scrollFromBottom = (parseInt(scrollFromTop)+parseInt(viewPortHeight));
	for (var i = 0; i < elementsToTrack.length; i++) {
		if ($(elementsToTrack[i]).exists()) {
			checkInViewport(scrollFromBottom, elementsToTrack[i]);
		}
   	}
}

//catch window events
$(window).resize(function(e){recalcVars();});
document.addEventListener("touchmove", ScrollStart, false);
document.addEventListener("scroll", Scroll, false);
function ScrollStart(){recalcVars();}
function Scroll(){recalcVars();}

//function that handles if an element is in the viewport or not 
function checkInViewport(scrollBottom, domElement){
	var elementPos = $(domElement).offset().top;
	if((parseInt(scrollBottom)+parseInt(pixelOffset)) > elementPos){
		$(domElement).addClass(inClassName).removeClass(outClassName);
	} else {
		$(domElement).removeClass(inClassName).addClass(outClassName);
	}
}