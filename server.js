// Load the necessary servers.
var sys = require( "sys" );
var http = require( "http" );
 
// Create our HTTP server.
var server = http.createServer(
     function( request, response ){
 
 
				   // Create a SUPER SIMPLE response.
   	     response.writeHead( 200, {"content-type": "text/plain"} );
	     response.write( "Hello world from Marisa Reddy!\n Steps to making this\n repo\n instance\n security on instance\n elastic ip (add in later) \n dns point to elastic ip \n connect script \n ssh into instance \n download node, npm, git, emacs \n clone repo \n redirect port" );
	     response.end();
     }
			       );
 
// Point the HTTP server to port 8080.
server.listen( 8080 );
 
// For logging....
sys.puts( "Server is running on 8080" );