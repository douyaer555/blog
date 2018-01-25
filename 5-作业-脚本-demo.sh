if [ -d $1 ]; then
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo ' <!DOCTYPE>/n<title>Hello</title>/n<h1>Hi</h1>'>> index.html 
  echo ' h1{color: red;}'>> css/style.css
  echo ' var string = \"Hello World\"/n alert(string)'>>js/main.js
  exit
else
  exit
fi
