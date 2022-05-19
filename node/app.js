var http=require('http')
var fs = require ('fs')
var port=3000

var server=htpp.createServer ( 
    function(req,res)
    {
        res.writeHead(200,{ 'content-type : text/html' })
        fs.readFile('index.html', function(error, data){
            if(error)
            {
                res.writeHead(404)
                res.write('Error: something wrong')
            }
            else{
                res.write(data)
            }
            res.end()               
        }
        )
        //Wres.write("hello node") 
    }

)

server.listen(port,function(error){
    if (error){
        console.log('something went wrong')
    }
    else{
        console.log("server is working")
    }
})