

/*We want text to be given the completed properties when a LI is clicked
but we have it under the UL umbrella so that any addition to the UL 
component will have this effect*/
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


/*Same as the above we have the click span under the UL umbrella
so that new objects appended to UL will have have the below function
when a span element is clicked, we run a function which
takes the parent of the span element, fades it out for 500ms
then it runs another nested function that deleted the element
Finally, to prevent this from affect the parent elements of
the particular span element we clicked on, we use the
event.stopProgation() method */
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
}); 

/*now we take the input of whats typed into the input box and then
when the enter key is pressed, we will append that item to the UL
element of html. We do this by detecting the 13th key which is the
Enter key after which we grab the text value from the input box,
save it in a variable and append that to the UL element as follows*/

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todo = $(this).val();
		$(this).val(""); //reset 
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todo + "</li>" );
	}
});

/*toggle the input box with the below*/
$(".fa-pencil-alt").click(function(){
	$("input[type='text']").fadeToggle()
})

