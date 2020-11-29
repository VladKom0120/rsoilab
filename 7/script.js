// $(document).ajaxSend(function() {
//     // alert('ajaxSend');
// });

// $(document).ajaxComplete(function() {
//     // alert('ajaxComplete');
// });

// $(document).ajaxSuccess(function() {
//     // alert('ajaxSuccess');
// });

// $(document).ajaxError(function() {
//     // alert('ajaxError');
// });

// $(document).ajaxStart(function() {
//     // alert('ajaxStart');
// });

// $(document).ajaxStop(function() {
//     // alert('ajaxStop');
// });





$('#firstBTN').click(function () {
    $.get('data.xml', function (data) {

        var fontSize = $('input[name=rdDate]:checked').val();

        fontSize = parseInt(fontSize);

        $('#nameInput').first().val($(data).find('name').first().text()).css('font-size', fontSize);
        $('#adInput').first().val($(data).find('ad').first().text()).css('font-size', fontSize);
        $('#ageInput').first().val($(data).find('age').first().text()).css('font-size', fontSize);
        $('#roleInput').first().val($(data).find('role').first().text()).css('font-size', fontSize);

    });
});


$('#secondBTN').click(function () {
    console.log("1");
    $.getScript('remote.js');
});

$('#thirdBTN').click(function () {
    $('form div').first().find('p').hide();
});

$('#forthBTN').click(function () {

    $.ajax({
        url: 'remote.txt',
        success: function (data) {
            $('#remote').after(data)
        },
        error: function (error) {
            alert('ERROR');
            // $('#error').show()
        }
    });

    // $.get('remote.txt', function(data){
    //     $('#remote').after(data);
    // });


//Осуществляет запрос к серверу без перезагрузки страницы
    $.ajax({
        url: 'remote.html',
        success: function (data) {
            $('<p>' + data + '</p>').insertAfter("#remote2");
        },
        error: function (error) {
            alert('ERROR');
            // $('#error').show()
        }
    });

});