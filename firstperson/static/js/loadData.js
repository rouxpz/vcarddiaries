var json = new XMLHttpRequest();
            var url = "/stories/api_search";

            var ids = [];
            var storytexts = [];
            var names = [];
            var titles = [];
            var places = [];
            var tags = [];

            var allTags = [];
            var allTagsText = [];

            json.onreadystatechange = function() {
                if (json.readyState == 4 && json.status == 200) {
                    var myArr = JSON.parse(json.responseText);
                    for (var i = 0; i < myArr.length; i++) {
                        console.log(myArr.length);
                        ids[ids.length] = myArr[i].pk;
                        storytexts[storytexts.length] = myArr[i].fields.text;
                        names[names.length] = myArr[i].fields.name;
                        titles[titles.length] = myArr[i].fields.title;

                        var location = myArr[i].fields.city + ", " + myArr[i].fields.state + ", " + myArr[i].fields.country;
                        places[places.length] = location;


                        var raw_demo_tags = myArr[i].fields.demo_tags;
                        var raw_sex_tags = myArr[i].fields.sex_tags;
                        var raw_theme_tags = myArr[i].fields.theme_tags;

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

                        tags[tags.length] = tag_list;
                        console.log(tag_list);

                        for (var j = 0; j < storytexts.length; j++) {
                            storytexts[j] = storytexts[j].replace('\r\n', '');
                            console.log(storytexts[j]);
                        }
                    }
                }
            }

            json.open("GET", url, true);
            json.send();