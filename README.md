# View Movies Offline

Run npm i

## install http server

npm install -g http-server 

## setup for offline caching 

run ng build --prod

## get into correct directory

cd dist/angular-pwa

## start your http-server to test

http-server -p 8081

## test if it works offline

open your browser to localhost:8081 Inspectand go to Application, underneath Application go to Service Workers, click Offline and refresh the page. You should still have a list of movies now playing when you refresh. 


## Why would you want an app to run offline?!?!??!

Well think of an information display kiosk? They look pretty crappy when a business loses their internet connection temporarily. If they had an app that supported offline mode, customers looking at the Kiosk could still see the information they need, and not an error page. 
