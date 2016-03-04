# Ocean-Acidification-Kiosk

To set up Chrome in Kiosk mode on a Windows 7 machine...
=========================================================

This was designed to work on a MDKS kiosk only.  It is not a general purpose website.  In adition to the source code provided above you will need to install a server below.


make a shortcut of chrome from
C:\Program Files (x86)\Google\Chrome\Application

and put it here

C:\Users\PCA\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup


add last flag to the shorcut to prevent bad restarts from offering a restore

Right click and change the target of the poperty to (with the quotes)

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -kiosk --restore-last-session C:\Users\PCA\Desktop\shared-folder\dist\index.html"

or if you want it be be from a local webserver leave off the last part after -kiosk and then build a webserver below



# One way make a web server on a windows machine


1. First you must install [NodeJS](http://nodejs.org/).
2. Open the command prompt to run following commands.
3. Windows 7: Open Start and write cmd into the search and press enter.
4. Run this command to install a HTTP server: npm install http-server -g
5. Start the HTTP server: http-server /path/to/docroot with a path to the folder you want to share. Your folder must have some files before it works. maybe this is the path 
http-server C:\Users\PCA\Desktop\shared-folder\dist

6. Now just open http://localhost:8080/ in your browser.
7. To make this the permanent opening page on chrome - Settings -> On Startup Open a specific page or set of pages -> Set Pages -> http://localhost:8080/whatever/#/

you might want to make it a service with something like
npm install winswer


To stop right clicking on the kiosk put this code between and including the script tags in the header of the index.html



<pre><code>

    <script>
      window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
        };
    </script>
    
</code></pre>
