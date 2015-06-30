document.getElementById("next").onclick = function() {
    if (currentStory < selectedStories.length) {
        currentStory++;
    } else {
        currentStory = 1;
    }

    // console.log(currentStory);
    
    document.getElementById("boxtitle").innerHTML = selectedStories[currentStory - 1][3];
    document.getElementById("story").innerHTML = selectedStories[currentStory - 1][1];
    document.getElementById("name").innerHTML = "By " + selectedStories[currentStory - 1][2];
    document.getElementById("place").innerHTML = selectedStories[currentStory - 1][4];
    document.getElementById("count").innerHTML = "Story " + (currentStory) + " of " + selectedStories.length;
}

document.getElementById("back").onclick = function() {
    if (currentStory > 1) {
        currentStory--;
    } else {
        currentStory = selectedStories.length;
    }

    // console.log(currentStory);
    
    document.getElementById("boxtitle").innerHTML = selectedStories[currentStory - 1][3];
    document.getElementById("story").innerHTML = selectedStories[currentStory - 1][1];
    document.getElementById("name").innerHTML = "By " + selectedStories[currentStory - 1][2];
    document.getElementById("place").innerHTML = selectedStories[currentStory - 1][4];
    document.getElementById("count").innerHTML = "Story " + (currentStory) + " of " + selectedStories.length;
}

document.getElementById("close").onclick = function() {
    var c = $("#canvas");

    document.getElementById('light').style.display='none';
    document.getElementById('aboutWindow').style.display='none';
    document.getElementById('scrollbuttons').style.display='none';
    document.getElementById('closeAbout').style.display='none';
    document.getElementById('fade').style.display='none';
    document.body.style.overflow='auto';

    // allTags = [];
    selectedStories = [];
    // allTagsText = [];
    document.getElementById("selected-tags").innerHTML = "";
    document.getElementById("storyinfo").innerHTML = "";
    textarea.value = '';
    document.getElementById("theme").value = "none";
    document.getElementById("sexuality").value = "none";
    document.getElementById("demographic").value = "none";

    document.getElementById("boxtitle").innerHTML = "";
    document.getElementById("story").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("place").innerHTML = "";
    document.getElementById("count").innerHTML = "";

    // for (var i = 0; i < ids.length; i++) {
    //         document.getElementById('id' + ids[i]).style.fill = "";
    //         document.getElementById('id' + ids[i]).setAttribute("r", c.width()/150);
    // }
}

window.document.onkeydown = function(e) {
    var c = $("#canvas");

    if (!e) e = event;
    if (e.keyCode == 27) {
        document.getElementById('light').style.display='none';
        document.getElementById('aboutWindow').style.display='none';
        document.getElementById('scrollbuttons').style.display='none';
        document.getElementById('closeAbout').style.display='none';
        document.getElementById('fade').style.display='none';
        document.body.style.overflow='auto';

        allTags = [];
        selectedStories = [];
        allTagsText = [];
        document.getElementById("selected-tags").innerHTML = "";
        document.getElementById("storyinfo").innerHTML = "";
        textarea.value = '';
        document.getElementById("theme").value = "none";
        document.getElementById("sexuality").value = "none";
        document.getElementById("demographic").value = "none";

        document.getElementById("boxtitle").innerHTML = "";
        document.getElementById("story").innerHTML = "";
        document.getElementById("name").innerHTML = "";
        document.getElementById("place").innerHTML = "";
        document.getElementById("count").innerHTML = "";

        for (var i = 0; i < ids.length; i++) {
            document.getElementById('id' + ids[i]).style.fill = "";
            document.getElementById('id' + ids[i]).setAttribute("r", c.width()/150);
        }
    }

};