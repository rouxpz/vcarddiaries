//filter stories by tags

function tagFilter(tagID) {
    var t = document.getElementById(tagID);

    if (t.tagName != "circle") {

        var c = $("#canvas");
        
        if (tagID.indexOf('tag') != -1) {
            var split = tagID.split("g");
            allTags[allTags.length] = split[1];
        } else {
            allAges[allAges.length] = tagID;
            // allTags[allTags.length] = tagID;
        }

        allTagsText[allTagsText.length] = t.text;
        selectEntries(allTags, allAges);

        document.getElementById("selected-tags").innerHTML = "<strong>selected:</strong><br>" + allTagsText.join("<br> ");
    }
};

document.getElementById("searchButton").onclick = function() {

    allTags = [];
    var inputText = document.getElementById("search").value;
    var c = $("#canvas");

    for (var i = 0; i < storytexts.length; i++) {
        var lowerstory = storytexts[i].toLowerCase();
        lowerstory += " " + titles[i].toLowerCase();
        lowerstory += " " + names[i];
        if (lowerstory.indexOf(inputText) > -1) {
            highlightCircle(ids[i]);
            toLink[toLink.length] = 'id' + ids[i];
        } else {
            darkenCircle(ids[i]);
        }
    }
};

var textarea = document.querySelector('#search');

document.getElementById("clear").onclick = function() {
    allTags = [];
    allAges = [];
    selectedStories = [];
    allTagsText = [];
    var c = $("#canvas");

    document.getElementById("selected-tags").innerHTML = "";
    document.getElementById("storyinfo").innerHTML = "";
    textarea.value = '';

    for (var i = 0; i < ids.length; i++) {
        var selector = "circle[id='id" + ids[i] +"']";
        var selectedCircle = d3.select(selector);
        selectedCircle.transition().style("fill", "").attr("class", "node");
    }
}

var c = $("#canvas"),
    aspect = c.width()/c.height(),
    container = c.parent();

$(window).on("resize", function() {
    var targetWidth = container.width();
    c.attr("width", targetWidth);
    c.attr("height", targetWidth/aspect);

}).trigger("resize");