            document.getElementById("next").onclick = function() {
                if (currentStory < selectedStories.length) {
                    currentStory++;
                } else {
                    currentStory = 1;
                }

                console.log(currentStory);
                
                document.getElementById("title").innerHTML = selectedStories[currentStory - 1][3];
                document.getElementById("story").innerHTML = selectedStories[currentStory - 1][1];
                document.getElementById("name").innerHTML = "By " + selectedStories[currentStory - 1][2];
                document.getElementById("count").innerHTML = "Story " + (currentStory) + " of " + selectedStories.length;
            }

            document.getElementById("back").onclick = function() {
                if (currentStory > 1) {
                    currentStory--;
                } else {
                    currentStory = selectedStories.length;
                }

                console.log(currentStory);
                
                document.getElementById("title").innerHTML = selectedStories[currentStory - 1][3];
                document.getElementById("story").innerHTML = selectedStories[currentStory - 1][1];
                document.getElementById("name").innerHTML = "By " + selectedStories[currentStory - 1][2];
                document.getElementById("count").innerHTML = "Story " + (currentStory) + " of " + selectedStories.length;
            }

            document.getElementById("close").onclick = function() {
                document.getElementById('light').style.display='none';
                document.getElementById('fade').style.display='none';
                allTags = [];
                selectedStories = [];
                allTagsText = [];
                document.getElementById("selected-tags").innerHTML = "";
                document.getElementById("storyinfo").innerHTML = "";
                textarea.value = '';
                document.getElementById("theme").value = "none";
                document.getElementById("sexuality").value = "none";
                document.getElementById("demographic").value = "none";

                for (var i = 0; i < ids.length; i++) {
                        document.getElementById(ids[i]).style.fill = "";
                        document.getElementById(ids[i]).setAttribute("r", 5);
                }
            }

            window.document.onkeydown = function(e) {
                if (!e) e = event;
                if (e.keyCode == 27) {
                    document.getElementById('light').style.display='none';
                    document.getElementById('fade').style.display='none';
                    allTags = [];
                    selectedStories = [];
                    allTagsText = [];
                    document.getElementById("selected-tags").innerHTML = "";
                    document.getElementById("storyinfo").innerHTML = "";
                    textarea.value = '';
                    document.getElementById("theme").value = "none";
                    document.getElementById("sexuality").value = "none";
                    document.getElementById("demographic").value = "none";

                    for (var i = 0; i < ids.length; i++) {
                        document.getElementById(ids[i]).style.fill = "";
                        document.getElementById(ids[i]).setAttribute("r", 5);
                    }
                }

            };