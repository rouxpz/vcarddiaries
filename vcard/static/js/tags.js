//filter stories by tags

function tagFilter(tagID) {
    var t = document.getElementById(tagID);
    console.log(t.className);
    if (t.tagName != "circle") {
    console.log(tagID);

    var c = $("#canvas");

    var split = tagID.split("g");
    allTags[allTags.length] = split[1];
    console.log(allTags);
    console.log("tag logging happening")

    allTagsText[allTagsText.length] = t.text;

    document.getElementById("selected-tags").innerHTML = "selected:<br>" + allTagsText.join("<br> ");

    first:
    for (var i = 0; i < tags.length; i++) {
        var parsed_tags = [];

        for (var j = 0; j < tags[i].length; j++) {
            var parsed = String(tags[i][j]);
            parsed_tags[parsed_tags.length] = parsed;
        }

        for (var k = 0; k < allTags.length; k++) {
            if (parsed_tags.indexOf(allTags[k]) == -1) {
                var selector = "circle[id='id" + ids[i] +"']"; 
                var selectedCircle = d3.select(selector);
                var currentX = selectedCircle.attr("cx");
                var currentY = selectedCircle.attr("cy");
                var newX, newY;
                if (currentX >= 400 && currentX <= 600) {
                    if (currentX >= 500) {
                        newX = Math.random() * (1000-600) + 600;
                    } else {
                        newX = Math.random() * (400-0) + 0;
                    }
                    
                } else {
                    newX = currentX;
                }

                if (currentY >= 200 && currentY <= 400) {
                    if (currentY >= 300) {
                        newY = Math.random() * (500-400) + 400;
                    } else {
                        newY = Math.random() * (200-0) + 0;
                    }
                    
                } else {
                    newY = currentY;
                }

                selectedCircle.transition().attr("r", c.width()/150).style("fill", "");
                continue first;
            } else {
                var selector = "circle[id='id" + ids[i] +"']"; 
                var selectedCircle = d3.select(selector);
                var c = $("#canvas");
                selectedCircle.transition().attr("r", 15).style("fill", "#FFE066");

                }
            }
        }
    }

    };

    document.getElementById("searchButton").onclick = function() {

    allTags = [];

    var inputText = document.getElementById("search").value;
    console.log(inputText);

    var c = $("#canvas");

    for (var i = 0; i < storytexts.length; i++) {
        var lowerstory = storytexts[i].toLowerCase();
        if (lowerstory.indexOf(inputText) > -1) {
            console.log(names[i]);
            var selector = "circle[id='id" + ids[i] +"']"; 
            var selectedCircle = d3.select(selector);
            selectedCircle.transition().attr("r", 10).style("fill", "#FFE066");
        } else {
            document.getElementById('id' + ids[i]).style.fill = "";
            document.getElementById('id' + ids[i]).setAttribute("r", c.width()/150);
        }
    }
};

var textarea = document.querySelector('#search');

document.getElementById("clear").onclick = function() {
    allTags = [];
    selectedStories = [];
    allTagsText = [];
    var c = $("#canvas");

    document.getElementById("selected-tags").innerHTML = "";
    document.getElementById("storyinfo").innerHTML = "";
    textarea.value = '';

    console.log("tags cleared");
    for (var i = 0; i < ids.length; i++) {
        var selector = "circle[id='id" + ids[i] +"']";
        var selectedCircle = d3.select(selector);
        selectedCircle.transition().attr("r", c.width()/150).style("fill", "");
    }
}

var c = $("#canvas"),
    aspect = c.width()/c.height(),
    container = c.parent();

$(window).on("resize", function() {
    var targetWidth = container.width();
    c.attr("width", targetWidth);
    c.attr("height", targetWidth/aspect);
    console.log(c.width());

}).trigger("resize");