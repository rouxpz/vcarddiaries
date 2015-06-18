$(document).ready(function(){
    
    function type_text(texts) {
        var textIndex = parseInt(Math.random() * texts.length);
        $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'}, 500);
        setInterval(function() {
            textIndex = (textIndex + 1) % texts.length;
            $('#typewriter').fadeOut();
            setTimeout(function(){
                $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'}, 500);
            }, 400);
        }, 4000);

    }
    $('#typewriter').hide();
    $.getJSON("stories/api_definitions", type_text);
});



