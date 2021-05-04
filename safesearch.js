let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `

<script>const elecJSPack = function(elecV2){

var url = window.location.href;
var safe = "&safe=off";
if(url.indexOf(safe) == -1){
  url += safe;
  window.location = url;
}
}(console)</script></body>`)

  console.log('Add untitled.js')
}

$done({ body })