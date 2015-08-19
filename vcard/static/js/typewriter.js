var interval = 5000;

$(document).ready(function(){    
    function type_text(texts) {
        var textIndex = parseInt(Math.random() * texts.length);
        $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'},300);
        setInterval(function() {
            interval = 5000;
            $('#typewriter').fadeOut(400, function(){
                textIndex = parseInt(Math.random() * texts.length);
                $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'},300);
                clearInterval();
            });
        }, interval);

    }
    $('#typewriter').hide();
    $.getJSON("stories/api_definitions", type_text);
});
