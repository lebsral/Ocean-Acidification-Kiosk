# Ocean-Acidification-Kiosk

To set up Chrome in Kiosk mode on a Windows 7 machine...
=========================================================

make a shortcut of chrome from
C:\Program Files (x86)\Google\Chrome\Application

and put it here

C:\Users\PCA\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

Right click and change the target of the poperty to (with the quotes)

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" -kiosk C:\Users\PCA\Desktop\shared-folder\dist\index.html
