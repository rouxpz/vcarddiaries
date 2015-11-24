var interval = 3000;
var startingTime;

$(document).ready(function(){    
    function type_text(texts) {
        startingTime = Date.now();
        var textIndex = parseInt(Math.random() * texts.length);
        $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'},300);
        setInterval(function() {
            // console.log(Date.now() - startingTime);
            if (Date.now() - startingTime >= interval) {
                $('#typewriter').fadeOut(400, function(){
                    textIndex = parseInt(Math.random() * texts.length);
                    $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'},300);
                    // clearInterval();
                    startingTime = Date.now();
                });
            }
        }, 800);

    }
    $('#typewriter').hide();
    $.getJSON("stories/api_definitions", type_text);
});