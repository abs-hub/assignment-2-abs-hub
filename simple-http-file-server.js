// start by navigating to the folder, and type 'node ../simple-http-file-server'
// access the app from you browser at http://localhost:8080/ (add any arbitrary path)

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

// Using a third-party package in my Project
const chalk = require('chalk');
const log = console.log;

// Using my own module
var mimeTypes = require('./mimeTypes');

var server = http.createServer((req, res) => {
	log(req.url);

	// parse the URL into its component parts
	const parsedUrl = url.parse(req.url, true);
	log(parsedUrl);
	// extract the pathname and query properties
	const {
		pathname,
		query
	} = parsedUrl;

	// output absolute path info
	log('__dirname is %s', __dirname);
	log('cwd is %s', process.cwd());

	// loop and log the query string arguments from the URL, highlight it using chalk
	for (var key in query) {
		log(chalk.green('%s: %s'),key,query[key]);
	} 

	var contentType = 'text/plain';
	// Extract the filename extension
	//  then set the mimetype if it is known
	var extname = String(path.extname(pathname)).toLowerCase();
	// Using my own function to check the extension
	contentType = mimeTypes.getMimeType(extname) || contentType;

	// Create an absolute path to the requested file.
	// Assume the server was started from the webroot
	const absolute_path_to_file = path.join(__dirname, pathname);
	log('absolute_path_to_file is %s', absolute_path_to_file);

	fs.readFile(absolute_path_to_file, (err, data) => {
		if (err) {
			log(err);
			if (err.code == 'ENOENT') {
				// file does not exist - we should return a 404 status code
				log('404 error getting ' + pathname);
				res.writeHead(404, {
					"Content-Type": "text/plain"
				});
				res.end('404: Page Not Found!');
			} else if (err.code == 'EISDIR') {
				// this is actually a directory - we should create a directory listing
				log('directory listing ' + pathname);
				fs.readdir(absolute_path_to_file, (err, files) => {
					if (err) {
						res.writeHead(500, {
							"Content-Type": "text/plain"
						});
						res.end('Server Error 500');
					}
					let s = '<b>Directory Listing</b><br>';
					let hrefPathName = pathname != "/" ? pathname : "";
					files.forEach((i) => {
						s += (`<a href="${hrefPathName+"/"+i}">${i}</a><br>`);
					});
					res.writeHead(200, {
						"Content-Type": "text/html"
					});
					res.end(s, 'utf8');
				});
			}
		} else {
			// If we get to here, 'data' should contain the contents of the file
			res.writeHead(200, contentType);
			res.end(data, 'binary', () => {
				log("file delivered: " + pathname);
			});
		}
	});
});

var port = 8080;
server.listen(port, () => {
	log("Listening on " + port);
});