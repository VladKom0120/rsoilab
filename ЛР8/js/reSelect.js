define(function(){
  return function(){
  	$('#name').html('');
    $.getJSON('../html/json/department.json', function(data) {
            for(var i=0;i<data.sotr.length;i++){
                $('#name').append('<option>' + data.sotr[i].surname + ' '+ data.sotr[i].name +'</option>');
            }
    });
	}
});