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
					   printData += res[i]['operation']['name'];
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   printData +='<p>'+res[i]['tree_index']['all_nodes']+'</p>';

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';




				}	
				else if (res[i]['operation']['name'] == 'similarity_difference') {
					//console.log(res[i]['tree_index']['all_nodes']);
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					   printData += res[i]['operation']['name'];
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   printData +='<p>'+all_nodes+'</p>';

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';
				}
				else if (res[i]['operation']['name'] == 'key_insights') {
					//console.log(res[i]['tree_index']['all_nodes']);
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					   printData += res[i]['operation']['name'];
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   printData +='<p>'+all_nodes+'</p>';

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';
				}
				else if (res[i]['operation']['name'] == 'key_summary') {
					//console.log(res[i]['tree_index']['all_nodes']);
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					   printData += res[i]['operation']['name'];
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   printData +='<p>'+all_nodes+'</p>';

					   //console.log(all_nodes.length);  		    
					   printData +='</div>';
					    printData +='</details>';
				}	
				else if (res[i]['operation']['name'] == 'central_themes_main_points') {
					//console.log(res[i]['tree_index']['all_nodes']);
					 printData +='<details class="accordion">';
					  printData +=' <summary class="accordion__title">';
					   printData += res[i]['operation']['name'];
					   printData +=' </summary>';
					   printData +=' <div class="accordion__content">';

					   printData +='<p>'+all_nodes+'</p>';

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
