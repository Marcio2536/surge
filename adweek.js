let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `

<script>
const elecJSPack = function(){const bodySingle = document.querySelector('body.single');
  const ampHtml = document.querySelector('link[rel="amphtml"]');
  if (bodySingle && ampHtml) {
    bodySingle.classList.remove('single');
    window.location.href = ampHtml.href;
  }
$done()}()</script></body>`)

  console.log('Success')
}

$done({ body })