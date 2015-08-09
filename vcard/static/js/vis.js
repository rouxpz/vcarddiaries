var toLink = [];
var city, state, country;

function startForce() {
	var width = 1000;
	var height = 500;
	var r = width/150;

	var nodes = [];
	var links = [];

	for (var i = 0; i < ids.length; i++) {
		nodes.push({
			id: String(ids[i])
		})
	}

	var svg = d3.selectAll("div.container").append('svg')
		.attr('width', width)
		.attr('height', height)
		.attr('id', 'canvas');

	var force = d3.layout.force()
		.charge(-20)
		.gravity(.05)
        .linkDistance(20)
	    .size([width, height])
	    .nodes(nodes)
	    .links(links)
	    .start();

	svg.append("g").attr("class", "links");
    svg.append("g").attr("class", "nodes");

	var link = svg.select(".links").selectAll('.link')
	    .data(links)
	    .enter().append('line')
	    .attr('class', 'link');

	var node = svg.select(".nodes").selectAll('.node')
	    .data(nodes)
	    .enter().append('circle')
	    .attr('class', 'node')
	    .attr('r', r)
    	.attr('id', function(d, i) { return "id" + nodes[i].id; });

    d3.selectAll(".tag, #searchButton").on("click", function() {
    	link.remove();
		links = [];
		force.links(links);

		var tempNodes = [];

		if (toLink.length > 0) {
			for (var i = 0; i < toLink.length; i++) {
				for (var j = 0; j < nodes.length; j++) {

					var splitID = toLink[i].split("d");
					var realID = splitID[1];

					if (realID === nodes[j].id) {
						//add to temp nodes list
						tempNodes[tempNodes.length] = j;
					}
				}
			}
		}

		for (var i = 0; i < tempNodes.length; i++) {
			links.push({source: tempNodes[i], target: tempNodes[Math.floor(Math.random() * tempNodes.length)]});
		};

        link = svg.select(".links").selectAll('.link')
        	.data(links)
			.enter().append("line")
            .attr("class", "link");

        force.start();
        toLink = [];
	});

	d3.selectAll("#clear").on("click", function() {
		link.remove();
		links = [];
		toLink = [];
		force.links(links);
        force.start();
	});

    force.on('tick', function() {
    	link.attr("x1", function(d) { return d.source.x; })
		    .attr("y1", function(d) { return d.source.y; })
		    .attr("x2", function(d) { return d.target.x; })
		    .attr("y2", function(d) { return d.target.y; });
    	node.attr("cx", function(d) { return d.x = Math.max(r, Math.min(width - r, d.x)); })
     		.attr("cy", function(d) { return d.y = Math.max(r, Math.min(height - r, d.y)); });
    });

	d3.selectAll("circle").on("mouseover", function(d, i) {

		var splitID = this.id.split("d");
		var realID = splitID[1];
		for (var i = 0; i < ids.length; i++) {
			if (realID.indexOf(ids[i]) > -1) {

				d3.select(this).attr("r", width/130);

				document.getElementById("storyinfo").innerHTML = "</br><h2 id=\"title\">" + titles[i] +  "</h2><p class=\"nameInfo\"> " + names[i] + "</p></br>";
			}
		}
	}).on("click", function(d, i) {

			document.getElementById("back").style.visibility = 'visible';
            document.getElementById("next").style.visibility = 'visible';

            openWindow('light');

            var splitID = this.id.split("d");
			var realID = splitID[1];

            if (document.getElementById(this.id).style.fill != "") {

                for (var i = 0; i < ids.length; i++) {
                    if (document.getElementById('id' + ids[i]).style.fill != "") {
                        selectedStories[selectedStories.length] = [ids[i], storytexts[i], names[i], titles[i], places[i]];
                    }
                }

            } else {
                for (var i = 0; i < ids.length; i++) {
                    selectedStories[selectedStories.length] = [ids[i], storytexts[i], names[i], titles[i], places[i]];
                }
            }

            for (var i = 0; i < selectedStories.length; i++){
                if (selectedStories[i][0] == realID) {

                    currentStory = i + 1;
                    populateStoryWindow(selectedStories[i], selectedStories);
                    populateSocial(selectedStories[i]);
                }
            } 
	}).on("mouseout", function(d, i) {

		d3.select(this).attr("r", width/150);
		document.getElementById("storyinfo").innerHTML = "";
	});

};

function selectEntries(selection, allAges) {

	for (var i = 0; i < tags.length; i++) {
		var parsedTags = [];
		for (var j = 0; j < tags[i].length; j++) {
			parsed = String(tags[i][j]);
			parsedTags[parsedTags.length] = parsed;
		}

		var contains = containsAll(selection, parsedTags);

		if (contains != false && allAges.length > 0) {
			if (allAges.indexOf(ages[i]) != -1) {
				highlightCircle(ids[i]);
	        	toLink[toLink.length] = 'id' + ids[i];
	        } else {
	        	darkenCircle(ids[i]);
	        }
		} else if (contains != false && allAges.length <= 0) {
			highlightCircle(ids[i]);
        	toLink[toLink.length] = 'id' + ids[i];
		} else {
			darkenCircle(ids[i]);
		}

	}

};

function highlightCircle(circleID) {
	var selector = "circle[id='id" + circleID +"']"; 
	var selectedCircle = d3.select(selector);
	var c = $("#canvas");
	selectedCircle.transition().style("fill", "#FFE066");
};

function darkenCircle(circleID) {
	var selector = "circle[id='id" + circleID +"']"; 
	var selectedCircle = d3.select(selector);
	var c = $("#canvas");
	selectedCircle.transition().style("fill", "");
};

function containsAll(specificTags, allTags) {
	for (var i = 0; i < specificTags.length; i++) {
		if (allTags.indexOf(specificTags[i]) == -1) {
			return false;
			// break;
		}
	}

	return true;

}

function openWindow(windowID) {

	document.getElementById(windowID).style.display='block';
    document.getElementById('scrollbuttons').style.display='block';
    document.getElementById('fade').style.display='block';
    document.body.style.overflow='hidden';

};

function populateStoryWindow(selection, totalStories) {

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

	document.getElementById("boxtitle").innerHTML = selection[3];
    document.getElementById("story").innerHTML = selection[1];
    document.getElementById("name").innerHTML = "By " + selection[2];
    document.getElementById("place").innerHTML = city + state + country;
    document.getElementById("count").innerHTML = "Story " + currentStory + " of " + totalStories.length;

};

function populateSocial(selection) {
	var toReplace = selection[3];
	var titleText = toReplace.replace(' ', '+');
	var tumblrDescription = "A story from the V-Card Diaries: Tales of Sexual Debuts and Deferrals"
	document.getElementById("link").innerHTML = "http://vcarddiaries.com/stories/" + selection[0];
	document.getElementById("facebook").href = "javascript:pop(\"https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fvcarddiaries.com/stories/" + selection[0] + "\")";
	document.getElementById("twitter").href = "javascript:pop(\"https://twitter.com/intent/tweet?url=http://vcarddiaries.com/stories/" + selection[0] + "&text=" + titleText + "&via=VCardDiaries\")";
	document.getElementById("tumblr").href = "javascript:pop(\"http://www.tumblr.com/share/link?url=http://vcarddiaries.com/stories/" + selection[0] + "&name=" + titleText + "&description=" + tumblrDescription + "\")";
	document.getElementById("reddit").href = "javascript:pop(\"http://reddit.com/submit?url=http://vcarddiaries.com/stories/" + selection[0] + "&title=" + selection[3] + "\")";
};