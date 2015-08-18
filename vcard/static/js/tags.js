var allIDs = [];

function tagFilter(tagID) {
    var t = document.getElementById(tagID);

    if (t.tagName != "circle") {

        var c = $("#canvas");
        
        if (tagID.indexOf('tag') != -1) {
            var split = tagID.split("g");
            allTags[allTags.length] = split[1];
            // allIDs[allIDs.length] = split[1];
        } else {
            allAges[allAges.length] = tagID;
            // allIDs[allIDs.length] = tagID;
            // allTags[allTags.length] = tagID;
        }

        allIDs[allIDs.length] = tagID;
        allTagsText[allTagsText.length] = t.text;
        selectEntries(allTags, allAges);

        console.log(allIDs);
        console.log(allTagsText);

        var selectedTagText = "<strong>selected:</strong><br>";

        for (var i = 0; i < allTagsText.length; i++) {
            var tagTextID;

            for (var j = 0; j < allTags.length; j++) {
                if (tagID.indexOf('tag') != -1) {
                    tagTextID = "tagTexts" + allTags[j];
                } 

            }

            for (var j = 0; j < allAges.length; j++) {
                if (tagID.indexOf('tag') == -1) {
                    tagTextID = "ageTexts" + allAges[j];
                }
            }

            selectedTagText += allTagsText[i].toLowerCase() + "  <a href=\"javascript:void(0)\" id = \"" + tagTextID + "\" class=\"clearButton\" onclick=\"clearTag('" + tagTextID + "', '" + allIDs[i] + "');\">X</a><br>";
        }

        document.getElementById("selected-tags").innerHTML = selectedTagText;
    }
};

function clearTag(tagTextID, tagText) {
    console.log("beginning: " + allIDs);
    console.log("beginning" + allTagsText);
    // console.log(tagTextID);
    var split = tagTextID.split("s");
    var tagID = split[1];
    console.log("id to remove: " + tagTextID + ", " + tagID);
    console.log("text length: " + allTagsText.length);
    console.log("ids length: " + allIDs.length);

    console.log("place in text array: " + allTagsText.indexOf(allTagsText[allIDs.indexOf(tagText)]));
    console.log("place in all IDs array: " + allIDs.indexOf('tag' + tagID));

    var index = allTags.indexOf(tagID);
    var indexAge = allAges.indexOf(tagID);
    var indexText = allTagsText.indexOf(tagText);

    console.log("index in tags: " + index);
    console.log("index in ages: " + indexAge);

    if (index > -1) {
        console.log("tag found");
        allTags.splice(index, 1);
        allTagsText.splice(indexText, 1);
        allIDs.splice(indexText, 1);
    } else if (indexAge > -1) {
        console.log("age found");
        allAges.splice(indexAge, 1);
        allTagsText.splice(indexText, 1);
        allIDs.splice(indexText, 1);
    }

    console.log("new id list: " + allIDs);
    console.log("new tag list: " + allTagsText);

    if (allTagsText.length > 0) {

        console.log(allIDs);
        // console.log(allAges);
        console.log(allTagsText);

        selectEntries(allTags, allAges);

        var selectedTagText = "<strong>selected:</strong><br>";

        for (var i = 0; i < allIDs.length; i++) {
            var newTagTextID;

            if (allIDs[i].indexOf('tag') != -1) {
                newTagTextID = "tagTexts" + allIDs[i].split('g')[1];
                console.log(newTagTextID);
            } else {
                newTagTextID = "ageTexts" + allIDs[i];
                console.log(newTagTextID);
            }
            selectedTagText += allTagsText[i].toLowerCase() + "  <a href=\"javascript:void(0)\" class=\"clearButton\" id=\"" + newTagTextID + "\" onclick=\"clearTag('" + newTagTextID + "', '" + allIDs[i] + "');\" onmouseover=\"console.log(this.id)\">X</a><br>";
        }

        document.getElementById("selected-tags").innerHTML = selectedTagText;
        console.log(selectedTagText);

    } else {
        allTags = [];
        allAges = [];
        selectedStories = [];
        allTagsText = [];
        allIDs = [];
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
}

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
    allIDs = [];
    var c = $("#canvas");

    document.getElementById("selected-tags").innerHTML = "";
    document.getElementById("storyinfo").innerHTML = "";
    textarea.value = '';

    for (var i = 0; i < ids.length; i++) {
        var selector = "circle[id='id" + ids[i] +"']";
        var selectedCircle = d3.select(selector);
        selectedCircle.transition().style("fill", "").attr("class", "node");
    }
};

var c = $("#canvas"),
    aspect = c.width()/c.height(),
    container = c.parent();

$(window).on("resize", function() {
    var targetWidth = container.width();
    c.attr("width", targetWidth);
    c.attr("height", targetWidth/aspect);

}).trigger("resize");