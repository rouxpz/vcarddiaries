document.getElementById("next").onclick = function() {
    if (currentStory < selectedStories.length) {
        currentStory++;
    } else {
        currentStory = 1;
    }

    if (selectedStories[currentStory - 1][4][0] == "N/A") {
        city = '';
    } else {
        city = selectedStories[currentStory - 1][4][0] + ", ";
    }

    for (var j = 0; j < stateShort.length; j++) {
        if (j == 1) {
            state = '';
        } else {
            if (selectedStories[currentStory - 1][4][1] == stateShort[j]) {
                state = stateLong[j] + ", ";
            }
        }
    }

    for (var j = 0; j < countryShort.length; j++) {
        if (selectedStories[currentStory - 1][4][2] == 'US') {
            country = 'USA';
        } else {
            if (selectedStories[currentStory - 1][4][2] == countryShort[j]) {
                country = countryLong[j];
            }
        }
    }
    // console.log(currentStory);
    
    document.getElementById("boxtitle").innerHTML = selectedStories[currentStory - 1][3];
    document.getElementById("story").innerHTML = selectedStories[currentStory - 1][1];
    document.getElementById("name").innerHTML = "By " + selectedStories[currentStory - 1][2];
    document.getElementById("place").innerHTML = city + state + country;
    document.getElementById("count").innerHTML = "Story " + (currentStory) + " of " + selectedStories.length;
}

document.getElementById("back").onclick = function() {
    if (currentStory > 1) {
        currentStory--;
    } else {
        currentStory = selectedStories.length;
    }

    if (selectedStories[currentStory - 1][4][0] == "N/A") {
        city = '';
    } else {
        city = selectedStories[currentStory - 1][4][0] + ", ";
    }


    for (var j = 0; j < stateShort.length; j++) {
        if (j == 1) {
            state = '';
        } else {
            if (selectedStories[currentStory - 1][4][1] == stateShort[j]) {
                state = stateLong[j] + ", ";
            }
        }
    }

    for (var j = 0; j < countryShort.length; j++) {
        if (selectedStories[currentStory - 1][4][2] == 'US') {
            country = 'USA';
        } else {
            if (selectedStories[currentStory - 1][4][2] == countryShort[j]) {
                country = countryLong[j];
            }
        }
    }

    // console.log(currentStory);
    
    document.getElementById("boxtitle").innerHTML = selectedStories[currentStory - 1][3];
    document.getElementById("story").innerHTML = selectedStories[currentStory - 1][1];
    document.getElementById("name").innerHTML = "By " + selectedStories[currentStory - 1][2];
    document.getElementById("place").innerHTML = city + state + country;
    document.getElementById("count").innerHTML = "Story " + (currentStory) + " of " + selectedStories.length;
}

document.getElementById("close").onclick = function() {
    var c = $("#canvas");

    document.getElementById('light').style.display='none';
    document.getElementById('aboutWindow').style.display='none';
    document.getElementById('submitWindow').style.display='none';
    document.getElementById('scrollbuttons').style.display='none';
    document.getElementById('closeAbout').style.display='none';
    document.getElementById('fade').style.display='none';
    document.body.style.overflow='auto';

    // allTags = [];
    selectedStories = [];
    // allTagsText = [];
    // document.getElementById("selected-tags").innerHTML = "";
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
        document.getElementById('submitWindow').style.display='none';
        document.getElementById('scrollbuttons').style.display='none';
        document.getElementById('closeAbout').style.display='none';
        document.getElementById('fade').style.display='none';
        document.body.style.overflow='auto';

        // allTags = [];
        selectedStories = [];
        // allTagsText = [];
        // document.getElementById("selected-tags").innerHTML = "";
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
        //     document.getElementById('id' + ids[i]).style.fill = "";
        //     document.getElementById('id' + ids[i]).setAttribute("r", c.width()/150);
        // }
    }

};