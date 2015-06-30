//filter stories by tags

function tagFilter(tagID) {
    var t = document.getElementById(tagID);
    // console.log(t.className);
    if (t.tagName != "circle") {
        // console.log(tagID);

        var c = $("#canvas");

        var split = tagID.split("g");
        allTags[allTags.length] = split[1];
        // console.log(allTags);
        // console.log("tag logging happening")

        allTagsText[allTagsText.length] = t.text;
        selectEntries(allTags);
    }

};

document.getElementById("searchButton").onclick = function() {

    allTags = [];

    var inputText = document.getElementById("search").value;
    // console.log(inputText);

    var c = $("#canvas");

    for (var i = 0; i < storytexts.length; i++) {
        var lowerstory = storytexts[i].toLowerCase();
        if (lowerstory.indexOf(inputText) > -1) {
            // console.log(names[i]);
            var selector = "circle[id='id" + ids[i] +"']"; 
            var selectedCircle = d3.select(selector);
            selectedCircle.transition().attr("r", c.width()/100).style("fill", "#FFE066");
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

    // console.log("tags cleared");
    for (var i = 0; i < ids.length; i++) {
        var selector = "circle[id='id" + ids[i] +"']";
        var selectedCircle = d3.select(selector);
        selectedCircle.transition().attr("r", c.width()/150).style("fill", "").attr("class", "node");
    }
}

var c = $("#canvas"),
    aspect = c.width()/c.height(),
    container = c.parent();

$(window).on("resize", function() {
    var targetWidth = container.width();
    c.attr("width", targetWidth);
    c.attr("height", targetWidth/aspect);
    // console.log(c.width());

}).trigger("resize");