function makeStory() {
    // get form values (2 points)
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var number = document.getElementById('number').value;
    var partofthebody1 = document.getElementById('partofthebody1').value;
    var partofthebody2 = document.getElementById('partofthebody2').value;
    var pluralnoun1 = document.getElementById('pluralnoun1').value;
    var pluralnoun2 = document.getElementById('pluralnoun2').value;
    var pluralnoun3 = document.getElementById('pluralnoun3').value;
    var pluralnoun4 = document.getElementById('pluralnoun4').value;
    var verb1 = document.getElementById('verb1').value;
    var gerund = document.getElementById('gerund').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = adjective1 + " Video Games";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "I love to " + verb1 + " video games. I can play them day and " + noun1 + ". My mom and " + noun2 + " are not too happy with me " + gerund + " so much time in front of the television " + noun3 + ". Although dad believes that these " + adjective1 + " games help children devlop hand - " + partofthebody1 + " coordination and improve their learning " + pluralnoun1 + ", he also seems to think they have " + adjective2 + " side effects on one's " + partofthebody2 + ". Both of my " + pluralnoun2 + " think this is due to a " + adjective3;
    var paragraph2 = " use of violence in the majority of " + pluralnoun3 + ". Finally, we all arrived at a " + adjective4 + " compromise: After dinner I can play " + number + " hours of video games, provided I can help clear the " + noun4 + " and wash the " + pluralnoun4;



    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;
    document.getElementById('two').innerHTML = paragraph2;


}
