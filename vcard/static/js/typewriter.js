var startingTime = Date.now();
var interval = 1000;

$(document).ready(function(){    
    function type_text(texts) {
        // var textIndex = parseInt(Math.random() * texts.length);
        // $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'},300);
        setInterval(function() {
            // console.log(Date.now() - startingTime);
            if (Date.now() - startingTime >= interval) {
                $('#typewriter').fadeOut(400, function(){
                    textIndex = parseInt(Math.random() * texts.length);
                    $('#typewriter').text(texts[textIndex]).show("slide", {'direction' : 'right'},300);
                    // clearInterval();
                    startingTime = Date.now();
                    interval = 3000;
                });
            }
        }, 800);

    }

    $('#typewriter').hide();
    $.getJSON("stories/api_definitions", type_text);
});