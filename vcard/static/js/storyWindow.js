function closeAndClear() {

    var c = $("#canvas");

    document.getElementById('light').style.display='none';
    document.getElementById('aboutWindow').style.display='none';
    document.getElementById('submitWindow').style.display='none';
    document.getElementById('scrollbuttons').style.display='none';
    document.getElementById('fade').style.display='none';
    document.body.style.overflow='auto';
    document.getElementById("back").style.visibility = 'hidden';
    document.getElementById("next").style.visibility = 'hidden';

    selectedStories = [];

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

};

document.getElementById("next").onclick = function() {
    if (currentStory < selectedStories.length) {
        currentStory++;
    } else {
        currentStory = 1;
    }

    populateStoryWindow(selectedStories[currentStory-1], selectedStories);
    populateSocial(selectedStories[currentStory-1]);
}

document.getElementById("back").onclick = function() {
    if (currentStory > 1) {
        currentStory--;
    } else {
        currentStory = selectedStories.length;
    }

    populateStoryWindow(selectedStories[currentStory-1], selectedStories);
    populateSocial(selectedStories[currentStory-1]);
}

document.getElementById("close").onclick = function() {

    closeAndClear();

};

window.document.onkeydown = function(e) {

    if (!e) e = event;
    if (e.keyCode == 27) {

        closeAndClear();

    }

};

document.getElementById("about").onclick = function() {
    openWindow('aboutWindow');
}

document.getElementById("about2").onclick = function() {
    openWindow('aboutWindowSubmit');
}

var newwindow;
function pop(url)
{
    nw=window.open(url,'name','height=400,width=800');
    if (window.focus) {nw.focus()}
}