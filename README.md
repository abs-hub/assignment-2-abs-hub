# Assignment 2: Node modules and packages

## Requirements
Start out with the version of the simple HTTP server example from class that's included in this project.  This is a working HTTP file server. You'll be making several modifications to the starter code, and adding some files of your own.

1. **Manage dependencies in your project:** Add a `package.json` to manage dependencies in your project. Remember that `npm init` can help you here.
2. **Use a third-party package in your Project:** Install a third-party package from npm - you select one of your choice. It can be a logging utility like `log-util`, a general purpose utility package like `underscore` or something else you like. Use it in your project. Be sure to include it as a dependency in `package.json`.
3. **Create and use your own file-based module:** This code sample contains code to associate `Content-type` with filename extensions. Create a Node module of your own that extracts this functionality from the provided .js file, and puts it into a new module that you'll `require` instead. This need not be a complete package with its own package.json, etc. Just a new .js file that you'll `require` and use. It should export a function that accepts a url, a filename or a filename extension (your choice), and returns the appropriate information. If the `Content-type` is unknown, don't include a `Content-type` header in your http response at all.  
4. **Parse the query string arguments from the URL:** Add functionality to the web server that detects any query string arguments included in the URL and prints them to the console. We're not going to do anything with them besides log them at this time. It's just to provide practice with parsing the URL.  So, if your url looks like `http://128.0.0.1:8080/index.html?name=Javascript`, then the log output should be `name: Javascript`.  
5. **Create some HTML and image assets to serve:**  Add a static HTML file in `htdocs` to the project for the server to serve. It's fine to add some images, CSS or other assets as well, if you like. Essentially, create a simple page for your server to serve. You won't be graded on your HTML page being fancy - just provide something for your server to deliver.
6. Push your code back up to github, and deploy it to DO
7. Submit the URL to the page served by your server on DO, and the URL to your Github repo to Assignment 2 in Canvas

## Milestones
* Added package.json using npm init
* Used third-party package `chalk` to log query parameters and included in dependancy in package.json.
* Created my own module called as `mimeTypes` which gets the available mimeTypes to serve.
* Parsed the query string arguments from the URL. So, if the URL looks like: `http://localhost:8080/?name=Javascript&type=NodeJs&abc=xyz`  then log would print :
```
name: Javascript
type: NodeJs
abc: xyz
```
* Created index.html which is taken from one of my previous assignment from CS50 which serves HTML and is added in `htdocs` folder. There is also a folder called as images which has couole of images and a css folder which has some css files required for index.html. 
* Pushed code to github and deployed to DO.
* URL: http://159.65.107.61:8080/
