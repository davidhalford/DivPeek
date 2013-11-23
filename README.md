DivPeek
=======

DivPeek is a simple, lightweight animate-on-scroll jQuery script. It simply watches the divs you specify to see if they are scrolled in to view.
All watched divs are assigned a 'visible' and 'not visible' class depending on their position in the viewport, thus animations (or anything really) can be added with CSS.
the position of the divs in relation to the viewport is recalculated on every window change (i.e. scroll and resize) and watched elements are updated and animations triggered (when necessary).

Config
-------

DivPeek has 4 configurable options:

The first is an array of DOM elements to track. These do not have to be divs, they can be anything, all they need is a unique ID.

	var elementsToTrack = ["#div1","#div2","#div3"];

The pixel offset defines how much of the element may be visible before starting the animation. If set to -50 for example, 50 pixels of the element will be visible before the animation triggers.	
	
	var pixelOffset = -50;
	
The last 2 options are the names of the classes given to tracked elements.
	
	var inClassName = "inViewPort";
	var outClassName = "outViewPort";


Best practice
-------------

Creating animations is fun as hell, especially in modern browsers. There are still some browsers that do not support css-transforms yet. For the sake of progressive enhancement please 
trigger your animations backwards, so the final state is the state users see that do not have compatible browsers. An example:

	#myelement{
		-webkit-transition: 1s ease-out; 
		-moz-transition: 1s ease-out; 
		-o-transition: 1s ease-out;
		
		height:0;
	}
	#myelement.inViewPort{
		height:200px;
	}

The above code creates a height animation on the element, sliding it down over 1 second when it is scrolled in to view. The only problem with this method is that the 'inViewPort'-class is added through JS.
If some ancient browser doesn't support JS, the user is stuck with the default state, which has a height of 0. But if we flip this animation like this:

	#myelement{
		-webkit-transition: 1s ease-out; 
		-moz-transition: 1s ease-out; 
		-o-transition: 1s ease-out;
		
		height:200px;
	}
	#myelement.outViewPort{
		height:0;
	}

the height of the element will be 200px, whether your browser supports JS or not. Above I've set the 'outViewPort'-class to 0 height. As soon as the page is loaded and a scroll occurs this will happen outside of the
viewport, and when the element enters the viewport it will animate back to default state. So a good idea would be to use the second method.

Changelog
---------
- v1.1: added touch-scroll events
- v1.0: initial project

License
-------
<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a>
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.

Do whatever you want with DivPeek. All I ask is you mention me in the work. Oh, and if you use it for something cool, let me know :)



Roadmap
-------
- check in/out viewport from top too
- option to only animate once, then keep in final state




