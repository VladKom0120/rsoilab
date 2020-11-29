define(function(){
  return function(hosp){
  		if ($("#hosp").is(":checked")) {
  			var hosp = 0.95;
  		} else {
  			hosp = 1;
  		}
  		return hosp;
}
});