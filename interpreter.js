//use node fs module to read the file
var fs = require('fs');
var fileName = process.argv[2]; //built-in node module

//read the file
fs.readFile(fileName, 'utf8', function(err, data) { //utf8 is a broad character encoding
  if (err) throw err;
  //loop through each letter in the string
  //parse it
  //do a line at a time
  var lines = data.split('\n'); //in unix, lines are separated this way
  //remove empty last line
  lines.pop();
  lines.forEach(function(line, lineIndex) {
      // watch for characters and then change what we are doing, depending on the character
      // first word equals command
      // number following first word -> start something else
      //array of meaningful identifiesrs like plus or minus
      //quotes surrounding text means it's a string

      //break line into characters
      var command = '';
      var args = [];
      var blob = '';
      //set up states ; this is tokenization
      var inArgument = false;
      var inString = false;
      var inCommand = true;

      for (var i = 0; i < line.length; i++) {
        // console.log(line.charAt(i));
        // watch for commands and arguments
        // add letters to go until there is a space

        //watch for characters and then change what we do with the following characters
        //command until a space
        //arguments usually separated by spaces
        //unless contained in quotes, that's a string which is a single argument

        //accumulate everything on same output then handle output at certain state changes
        blob += line.charAt(i);
        if (inCommand && line.charAt(i) === ' ') {
          inCommand = false;
          inArgument = true;
          command = blob;
          blob = '';
        }

        if(line.charAt(i) === ' ' || (i === line.length-1)){
          args.push(blob);
          blob = '';
        }

        if (inString && line.charAt(i) === "'") {
          inString = true;
        }
      }
      console.log(command);
      console.log(args)
      console.log(blob);
    })
    //loop through each index in the array

});



//do whatever the commands are
