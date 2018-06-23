






$(document).ready(function(event){
	
	//event.preventDefault();

 	$('#btn-apagar').click(function(){
 		var id = document.getElementById("idRemover").value;
		var idRemover = 'http://andrebordignon.esy.es/php/deletacandidato.php?idcandidato='+id;
 		console.log(idRemover);
      	$.ajax({
        	url: idRemover,
          	success:function(data){
            	alert(data);
              	console.log(data);	
          	},
          	error: function(data){
          		console.log(data);
            	alert(data);
        } 	
	});
  });
});

