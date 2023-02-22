getMenu();
function getMenu(){
  $.ajax({
  	url:'json/test.json',
  	method:'POST',
  	success:function(res){
  		//console.log(res);
  	var menudata = [];
    var printData = '';
    var submenu = [];

  	     for (var i = 0; i < res.length; i++) {
  	     	//console.log(res[i]['files']);    	
            for (var j = 0; j < res[i]['files'].length; j++) {
  	     			// menudata += res[i]['files'][j];  	     			
 	     			  menudata.push(res[i]['files'][j]);     		

  	       	}	
  	      }

         var unique_menu = new Set(menudata);
         var arraydata = Array.from(unique_menu);
  	       
          

          for (var h = 0; h < res.length; h++) {
                  //  console.log(res[h]['operation']['name']);
                  submenu.push(res[h]['operation']['name']);
                 // printData += '<li>'+res[h]['operation']['name']+'</li>';
            }   



          for (var k = 0; k < arraydata['length']; k++) {
           // console.log(arraydata[k]);
            if (arraydata[k] == 'ALL_FILES') {


              printData += '<ul class="menu-ul">';
              printData += '<li class="menu-li-head-title">Combined</li>';          
              printData += '</ul>';
              printData += '<ul class="menu-ul">';         
             
              for (var h = 0; h < res.length; h++) {
                    //console.log(res[h]['operation']['name']);
                 printData += '<li>'+res[h]['operation']['name']+'</li>';
              }              
              //printData += '<li>Similarities & Difference</li>';
              printData += ' </ul>';
              printData += '<hr>';

        }
        else{
              printData += '<ul class="menu-ul">';
              printData += '<li class="menu-li-head-title">Article '+parseInt(k+1)+'</li>'; 
              printData += '<li style="font-size:10px;font-weight: normal" class="menu-li-head-title">'+arraydata[k]+'</li>';         
              printData += '</ul>';
             printData += '<ul class="menu-ul">';         
             
              
               for (var h = 0; h < res.length; h++) {
                    //console.log(res[h]['operation']['name']);
                 printData += '<li>'+res[h]['operation']['name']+'</li>';
              }   
               var unique_submenu = new Set(submenu);
               var arraydata_sub = Array.from(unique_submenu);

                //console.log(unique_submenu);

              //printData += '<li>Similarities & Difference</li>';
              printData += ' </ul>';
              printData += '<hr>';
        }
















          }

          $('.menu-section').html(printData);






  	}
  })
}

