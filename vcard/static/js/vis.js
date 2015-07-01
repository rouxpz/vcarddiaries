var toLink = [];

function startForce() {
	var width = 1000;
	var height = 500;

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
		.charge(-30)
        .linkDistance(20)
	    .size([width, height])
	    .nodes(nodes)
	    .links(links)
	    .start();

	var link = svg.selectAll('.link')
	    .data(links)
	    .enter().append('line')
	    .attr('class', 'link');

	var node = svg.selectAll('.node')
	    .data(nodes)
	    .enter().append('circle')
	    .attr('class', 'node')
	    .attr('r', width/150)
    	.attr('id', function(d, i) { return "id" + nodes[i].id; });

    d3.selectAll(".tag").on("click", function() {
    	link.remove();
		links = [];
		force.links(links);

		var tempNodes = [];

		if (toLink.length > 0) {
			for (var i = 0; i < toLink.length; i++) {
				for (var j = 0; j < nodes.length; j++) {

					var splitID = toLink[i].split("d");
					var realID = splitID[1];

					// console.log(realID);
					// console.log(nodes);

					if (realID === nodes[j].id) {
						//add to temp nodes list
						tempNodes[tempNodes.length] = j;
					}
				}
			}
		}
		// console.log("temp nodes: " + tempNodes);

		for (var i = 0; i < tempNodes.length; i++) {
			links.push({source: tempNodes[i], target: tempNodes[Math.floor(Math.random() * tempNodes.length)]});
		};

        link = svg.selectAll('.link')
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
    	node.attr("cx", function(d) { return d.x; })
     		.attr("cy", function(d) { return d.y; });
    });

	d3.selectAll("circle").on("mouseover", function(d, i) {

		var splitID = this.id.split("d");
		var realID = splitID[1];
		for (var i = 0; i < ids.length; i++) {
			if (realID.indexOf(ids[i]) > -1) {

				if (d3.select(this).attr("r") <= width/150) {
					console.log(d3.select(this).attr("r"));
					d3.select(this).attr("r", width/130);
				} else if (d3.select(this).attr("r") >= width/100) {
					d3.select(this).attr("r", width/90);
				}

				document.getElementById("storyinfo").innerHTML = "</br><h2 id=\"title\">" + titles[i] +  "</h2><p class=\"nameInfo\"> " + names[i] + "</p></br>";
			}
		}
	}).on("click", function(d, i) {

		    document.getElementById('light').style.display='block';
            document.getElementById('scrollbuttons').style.display='block';
            document.getElementById('fade').style.display='block';
            document.body.style.overflow='hidden';

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
                    document.getElementById("boxtitle").innerHTML = selectedStories[i][3];
                    document.getElementById("story").innerHTML = selectedStories[i][1];
                    document.getElementById("name").innerHTML = "By " + selectedStories[i][2];
                    document.getElementById("place").innerHTML = selectedStories[i][4];
                    document.getElementById("count").innerHTML = "Story " + currentStory + " of " + selectedStories.length;
                }
            } 
	}).on("mouseout", function(d, i) {
		if (d3.select(this).attr("r") <= width/130) {
			d3.select(this).attr("r", width/150);
		} else if (d3.select(this).attr("r") >= width/90) {
			d3.select(this).attr("r", width/100);
		}
		document.getElementById("storyinfo").innerHTML = "";
	});

};

function selectEntries(selection) {

	for (var i = 0; i < tags.length; i++) {
		var parsedTags = [];
		for (var j = 0; j < tags[i].length; j++) {
			parsed = String(tags[i][j]);
			parsedTags[parsedTags.length] = parsed;
		}

		var contains = containsAll(selection, parsedTags);

		if (contains != false) {
			var selector = "circle[id='id" + ids[i] +"']"; 
        	var selectedCircle = d3.select(selector);
        	var c = $("#canvas");
        	selectedCircle.transition().attr("r", c.width()/100).style("fill", "#FFE066");
        	toLink[toLink.length] = 'id' + ids[i];
		} else {
			var selector = "circle[id='id" + ids[i] +"']"; 
        	var selectedCircle = d3.select(selector);
        	var c = $("#canvas");
        	selectedCircle.transition().attr("r", c.width()/150).style("fill", "");
		}

	}

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