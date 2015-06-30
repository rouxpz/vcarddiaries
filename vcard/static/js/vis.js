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

	console.log(nodes);

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

    force.on('tick', function() {
    	node.attr("cx", function(d) { return d.x; })
     		.attr("cy", function(d) { return d.y; });
    });

	d3.selectAll("circle").on("mouseover", function(d, i) {
		console.log(this.id);

		var splitID = this.id.split("d");
		var realID = splitID[1];
		for (var i = 0; i < ids.length; i++) {
			if (realID.indexOf(ids[i]) > -1) {
				console.log(titles[i]);
				document.getElementById("storyinfo").innerHTML = "</br><h2 id=\"title\">" + titles[i] +  "</h2><p class=\"nameInfo\">" + names[i] + "</p></br>";
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
                console.log("selected story clicked");
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
		document.getElementById("storyinfo").innerHTML = "";
	});
};

function selectEntries(selection) {
	if (selection.length > 0) {
		links.push({source: storynode, target: tagnodes[Math.floor(Math.random() * selection.length)]});
	}
};