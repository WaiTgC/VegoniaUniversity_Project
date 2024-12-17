// Start Jquery Area

$(document).ready(function(){
	// Start Header
		// Start Nav Bar
           $('.navbuttons').click(function(){
           	$(this).toggleClass('crossxs');
           });





		// End Nav Bar
	// ENd Header
});

// End Jquery Area

// Start Js Area

// Start Students Counter Section

var getcountervalues = document.querySelectorAll(".countervalues");
console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){
	// console.log(getcountervalue);
	getcountervalue.textContent = 0;
    
    var updatecounter = function(){
    	// console.log('i am working');
    	var getcttarget = + getcountervalue.getAttribute('data-target');
    	// console.log(getcttarget);
    	// console.log(typeof getcttarget,getcttarget);

    	const getctcontent = +getcountervalue.innerText;
    	// console.log(getctcontent);
    	// console.log(typeof getctcontent,getctcontent);
        
        const incnumber = getcttarget / 100;
        // console.log(incnumber);

    	if(getctcontent < getcttarget){
    		getcountervalue.textContent = getctcontent + incnumber;

    		setTimeout(updatecounter,100);
    	}
    }
    updatecounter();




});



// End Students Counter Section




// ENd Js Area










