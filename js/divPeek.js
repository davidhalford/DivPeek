
//===============================================================================
//CONFIG: 
var elementsToTrack = ["#scrollfx1","#scrollfx2","#scrollfx3","#scrollfx4","#scrollfx5","#scrollfx6","#scrollfx7"];

var pixelOffset = -50;				//set pixeloffset for class to be applied (or: wait [x] pixels after visible to start)
var useMiniMap = true;				//use the minimap to check yout triggers. (NOTE: disable this on production, this is purely a debugging tool!)
var inClassName = "inViewPort";		//set the classname for elements that are in the viewport
var outClassName = "outViewPort";	//set the classname for elements that are in the viewport
//===============================================================================

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
   		checkInViewport(scrollFromBottom, elementsToTrack[i]);
   	}
   	if(useMiniMap){
		$('.topmarker').css('height',scrollFromTop+'px');
		$('.bottommarker').css('top',(scrollFromBottom)+'px');
	}
}

$(window).scroll(function(e){recalcVars();});
$(window).resize(function(e){recalcVars();});

//function that handles if an element is in the viewport or not 
function checkInViewport(scrollBottom, domElement){
	var elementPos = $(domElement).offset().top;
	if((parseInt(scrollBottom)+parseInt(pixelOffset)) > elementPos){
		$(domElement).addClass(inClassName).removeClass(outClassName);
	} else {
		$(domElement).removeClass(inClassName).addClass(outClassName);
	}
}

if(useMiniMap){
	$(document).ready(function(){
		$('body').clone().appendTo('body').addClass('mini');
		$('body.mini').append("<span class='topmarker'></span>");
		$('.topmarker').css('position','absolute').css('top','0px').css('height',scrollFromTop+'px').css('background-color','rgba(0,0,0,0.6)').css('display','block').css('width','100%');
		$('body.mini').append("<span class='bottommarker'></span>");
		$('.bottommarker').css('position','absolute').css('top',(scrollFromBottom)+'px').css('height','40000px').css('background-color','rgba(0,0,0,0.6)').css('display','block').css('width','100%');
	});
}