
var edge = require('electron-edge');

var helloWorld = edge.func(function () {`
    async (input) => {
        return ".NET Welcomes " + input.ToString();
    }
`});

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});
