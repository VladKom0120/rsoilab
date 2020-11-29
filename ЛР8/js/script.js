function CheckClick(e) {
	t = e.previousSibling.previousSibling;
	if ((t.tagName == 'INPUT') && (t.type == 'checkbox')) t.click();
}

function reSelect(){
	require(['reSelect', 'jquery'], function(reSelect, $){
		reSelect();
	});
}

function showInfo(name){
	$("#Show_Sotr").html('');
	$(function(){
    $.getJSON('../html/json/department.json', function(data) {
                   $('#Show_Sotr').append('<tr id="tr_first"> <th>ФИО</th> <th>Отдел</th> <th>Должность</th> <th>Зарплата</th></tr>' );

            for(var i=0;i<data.sotr.length;i++){
            	
            	var nameSurname = data.sotr[i].surname + ' ' + data.sotr[i].name;
            	console.log(nameSurname);
            	sal = localStorage.getItem(nameSurname);
            	console.log(sal);
                $('#Show_Sotr').append('<tr> <td>'
                + nameSurname +'</td> <td>' + data.sotr[i].dep +'</td> <td>'
                + data.sotr[i].position +'</td> <td> ' + localStorage.getItem( localStorage.key( i ) ) +' руб.</td></tr><tr> ');

                }
               $('#Show_Sotr').append(' <td id="tr_last"> Ср. зарплата по отделу: </td> <td id="tr_last">' +'</td> <td id="tr_last"> ' +'</td> <td id="average"> ' + showAverage() + ' руб.</td>' );
    });
	});
}

function showSalary(name,category,hosp,rate){
require(['rateCount'], function(rateCount){
		var salary = rateCount(category);
require(['pensionCount'], function(pensionCount){
		salary *= pensionCount(hosp);
require(['breachCount'], function(breachCount){
		salary *= breachCount(rate);

		localStorage.setItem(name, salary.toFixed(2));
	});
	});
	});
    alert("Данные успешно сохранены!");
}

function showAverage(){
var ave =0;
var b= 0;
for ( var i = 0, len = localStorage.length; i < len; ++i ) {
   ave += Number(localStorage.getItem( localStorage.key( i ) )) ;
}
return (ave/5).toFixed(2);
}


