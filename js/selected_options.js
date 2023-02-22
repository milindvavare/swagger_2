function process_btn(){
	// $('#synthesize_section').hide();
	// $('#viewing_section').show();
	// $('.viewing_section_bottom').show();
}

$('.proceed_to_viewing_section').click(function(){
	//alert("okk");
	   var selected = new Array();
	 	$(".chdckbox_options:checked").each(function () {
		    selected.push(this.value);
		});

		
		if (selected.length > 0) {
		    //alert("Selected values: " + selected.join(","));
		    //console.log(selected.length);


		    const dynamicArray = selected;
		    var i = 0;	
		    var count = i++;   
		    const obj = Object.fromEntries(
			  dynamicArray.map(name => ["options_"+i++, {
			    name: name			    		    
			  }])
			)
	 console.log(obj);			
}



		

		





 

	 $('#synthesize_section').hide();
	 $('#viewing_section').show();
	 $('.viewing_section_bottom').show();
})