var ids = [];
var storytexts = [];
var names = [];
var titles = [];
var places = [];
var tags = [];
var ages = [];
var definitions = [];

var allTags = [];
var allAges = [];
var allTagsText = [];

var url = "/stories/api_search";

function loadJSON(url, callback) {
    var json = new XMLHttpRequest();

    json.onreadystatechange = function() {
        if (json.readyState == 4 && json.status == 200) {
            var myArr = JSON.parse(json.responseText);

            console.log(myArr.length);
            for (var i = 0; i < myArr.length; i++) {

                ids[ids.length] = myArr[i].pk;
                storytexts[storytexts.length] = myArr[i].fields.text;
                names[names.length] = myArr[i].fields.name;
                titles[titles.length] = myArr[i].fields.title;
                definitions[definitions.length] = myArr[i].fields.definition;

                var storyPlace = [myArr[i].fields.city, myArr[i].fields.state, myArr[i].fields.country];
                places[places.length] = storyPlace;


                var raw_demo_tags = myArr[i].fields.demo_tags;
                var raw_sex_tags = myArr[i].fields.sex_tags;
                var raw_theme_tags = myArr[i].fields.theme_tags;
                var raw_exp_tags = myArr[i].fields.experience_tags;

                var tag_list = []

                for (var j = 0; j < raw_demo_tags.length; j++) {
                    tag_list[tag_list.length] = raw_demo_tags[j];
                }

                for (var j = 0; j < raw_sex_tags.length; j++) {
                    tag_list[tag_list.length] = raw_sex_tags[j];
                }

                for (var j = 0; j < raw_theme_tags.length; j++) {
                    tag_list[tag_list.length] = raw_theme_tags[j];
                }

                ages[ages.length] = myArr[i].fields.age;
                tags[tags.length] = tag_list;

                for (var j = 0; j < storytexts.length; j++) {
                    storytexts[j] = storytexts[j].replace('\r\n', ' ');
                }
            }
            if (typeof callback == "function") {
                callback.apply(json);
                document.getElementById("loadingScreen").style.display = "none";
      }
        }
    }

    json.open("GET", url, true);
    json.send();
};

loadJSON(url, startForce);