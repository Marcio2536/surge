let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `

<script>
const elecJSPack = function(){const url = window.location.href;
    const article_truncated = document.querySelector('div#article-content-truncate-wrap');
    if (article_truncated && !url.includes('/amp/')) {
      article_truncated.removeAttribute('id');
      if (url.includes('?'))
        window.location.href = url.replace('?', 'amp/?');
      else
        window.location.href = url + 'amp';
    }
    const adverts = document.querySelectorAll('.ad-unit--center');
    removeDOMElement(...adverts);
$done()}()</script></body>`)

  console.log('Success')
}

$done({ body })