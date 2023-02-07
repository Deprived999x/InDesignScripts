// Open the CSV file
var file = File.openDialog("Open CSV File", "*.csv");
if (!file) {
    exit();
}
file.open("r");

// Read the CSV file into an array
var csvArray = [];
while (!file.eof) {
    csvArray.push(file.readln().split(","));
}
file.close();

// Get all linked images in the document
var myLinks = app.activeDocument.links;

// Loop through each row in the CSV file
for (var i = 0; i < csvArray.length; i++) {
    // Get the current name and new name from the CSV file
    var currentName = csvArray[i][0];
    var newName = csvArray[i][1];
    
    // Loop through each linked image in the document
    for (var j = 0; j < myLinks.length; j++) {
        var myLink = myLinks[j];
        // If the current name matches the linked image name, rename it
        if (myLink.name == currentName) {
            myLink.name = newName;
            break;
        }
    }
}
