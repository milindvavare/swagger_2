getData();
function getData(){
	$.ajax({
		url:'json/test.json',
		method:'POST',
		success:function(res){
		   //console.log(res.length);
			var printData = '';
			for (var i = 0; i < res.length; i++) {
				//console.log(res[i]['tree_index']['all_nodes']);
				if (res[i]['operation']['name'] == 'key_questions') {
					// console.log(res[i]['tree_index']['all_nodes']); 
					var all_nodes = Object.keys(res[i]['tree_index']['all_nodes']);		


					   printData +='<details class="accordion">';
					   printData +=' <summary class="accordion__title">';

					   
					   for (var k = 0; k < res[i]['files']['length']; k++) {
					   		//console.log(res[i]['files'][k]);
					   		printData += res[i]['operation']['name'] +'&nbsp;-&nbsp;<span style="font-weight:normal;font-size:13px;">'+ res[i]['files'][k]+'</span>';
					   }


					   
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';


					   	for (var j = 0; j < all_nodes['length']; j++) {
						//console.log(res[i]['tree_index']['all_nodes'][j]['text']);
						  printData +='<p><b>'+res[i]['tree_index']['all_nodes'][j]['index']+':</b>'+res[i]['tree_index']['all_nodes'][j]['text']+'</p>';
					    }

					   

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';




				}	
				else if (res[i]['operation']['name'] == 'similarity_difference') {
					//console.log(res[i]['tree_index']['all_nodes']);
					var all_nodes = Object.keys(res[i]['tree_index']['all_nodes']);		
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					    for (var k = 0; k < res[i]['files']['length']; k++) {
					   		//console.log(res[i]['files'][k]);
					   		printData += res[i]['operation']['name'] +'&nbsp;-&nbsp;<span style="font-weight:normal;font-size:13px;">'+ res[i]['files'][k]+'</span>';
					   }
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   
					   	for (var j = 0; j < all_nodes['length']; j++) {
						//console.log(res[i]['tree_index']['all_nodes'][j]['text']);
						  printData +='<p><b>'+res[i]['tree_index']['all_nodes'][j]['index']+':</b>'+res[i]['tree_index']['all_nodes'][j]['text']+'</p>';
					    }

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';
				}
				else if (res[i]['operation']['name'] == 'key_insights') {
					//console.log(res[i]['tree_index']['all_nodes']);
					var all_nodes = Object.keys(res[i]['tree_index']['all_nodes']);		
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					    for (var k = 0; k < res[i]['files']['length']; k++) {
					   		//console.log(res[i]['files'][k]);
					   		printData += res[i]['operation']['name'] +'&nbsp;-&nbsp;<span style="font-weight:normal;font-size:13px;">'+ res[i]['files'][k]+'</span>';
					   }
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					  for (var j = 0; j < all_nodes['length']; j++) {
						//console.log(res[i]['tree_index']['all_nodes'][j]['text']);
						  printData +='<p><b>'+res[i]['tree_index']['all_nodes'][j]['index']+':</b>'+res[i]['tree_index']['all_nodes'][j]['text']+'</p>';
					    }

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';
				}
				else if (res[i]['operation']['name'] == 'key_summary') {
					//console.log(res[i]['tree_index']['all_nodes']);
					var all_nodes = Object.keys(res[i]['tree_index']['all_nodes']);		
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					    for (var k = 0; k < res[i]['files']['length']; k++) {
					   		//console.log(res[i]['files'][k]);
					   		printData += res[i]['operation']['name'] +'&nbsp;-&nbsp;<span style="font-weight:normal;font-size:13px;">'+ res[i]['files'][k]+'</span>';
					   }
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   for (var j = 0; j < all_nodes['length']; j++) {
						//console.log(res[i]['tree_index']['all_nodes'][j]['text']);
						  printData +='<p><b>'+res[i]['tree_index']['all_nodes'][j]['index']+':</b>'+res[i]['tree_index']['all_nodes'][j]['text']+'</p>';
					    }

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';
				}	
				else if (res[i]['operation']['name'] == 'central_themes_main_points') {
					//console.log(res[i]['tree_index']['all_nodes']);
					var all_nodes = Object.keys(res[i]['tree_index']['all_nodes']);		
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					  for (var k = 0; k < res[i]['files']['length']; k++) {
					   		//console.log(res[i]['files'][k]);
					   		printData += res[i]['operation']['name'] +'&nbsp;-&nbsp;<span style="font-weight:normal;font-size:13px;">'+ res[i]['files'][k]+'</span>';
					   }
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   for (var j = 0; j < all_nodes['length']; j++) {
						//console.log(res[i]['tree_index']['all_nodes'][j]['text']);
						  printData +='<p><b>'+res[i]['tree_index']['all_nodes'][j]['index']+':</b>'+res[i]['tree_index']['all_nodes'][j]['text']+'</p>';
					    }

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';
				}
				else{
					console.log("operation not found");
				}

					
			}


			$('#fetchData').html(printData);
		}
	})
}



