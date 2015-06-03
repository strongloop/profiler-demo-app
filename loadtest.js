var loadtest = require('loadtest');

var max_requests = 1000
var concurrency = 10
var host = "ec2-52-8-177-89.us-west-1.compute.amazonaws.com"
var port = "3001"

// Run high loads of this request to burn cpu.
var add_docs = {
    url: 'http://' + host + ':' + port + '/api/documents',
    maxRequests: max_requests,
    concurrency: concurrency,
    method: 'POST',
    contentType: 'application/json',
    body: {"name": "PriceList", "created_by": "Michelle Williams",
    "type": "xls", "size": "20Kb", "date_created": "2011-06-23T18:25:43.511Z"}
};

loadtest.loadTest(add_docs, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log('Added docs');
    console.log(result);
});

// Use lot of server-side memory. Calls the content function 
// in common/models/document.js which creates a large number 
// of objects. Use heap profiling to see the increased count of
// the 'Documents' object.  

var add_content = {
    url: 'http://' + host + ':' + port + '/api/documents/content',
    maxRequests: max_requests,
    concurrency: concurrency,
    method: "POST",
    body: '{"content" : "This is my document"}'
};
loadtest.loadTest(add_content, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});
