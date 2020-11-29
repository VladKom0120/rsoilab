define(function(){
  return function(){

  	var salary=0;
	var i=0;
	$("#name option").each(function(){
		if(localStorage.getItem(this.text)==null){ return salary;}
	 salary+=+localStorage.getItem(this.text);		
		i++;
	})
	salary/=i;

	return salary;
	}
});