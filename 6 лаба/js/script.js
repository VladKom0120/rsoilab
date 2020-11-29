$(document).ready(function () {
	
    $('#button1').click(function () {
	  $('input[id = id1][name != name3][name != name1]').each(function (){
		$(this).attr("id", "idNEW");})
    });

    $('#button2').click(function () {
		 $("div.div2, div.div4, div.div6").each(function (){ 
		$(this).addClass('style2');
    });
    $("div.div1 h3, div.div3 h3, div.div5 h3").each(function (){ 
		$(this).hide({ opacity: "show" }, 5000);
		});
});


$('#button3').click(function () {
	  $("div.div2, div.div4, div.div6").each(function (){
		$(this).addClass('style3');
    });
	$('input[id = id2]').each(function (){
		$(this).addClass('style3');
 });});
});