```js
// find good deals

$('#description ul li').each(function(){ var $this = $(this); var price = $this.find('a').text().split(' - ')[1].replace('$', ''); var text = $this.text(); var regularPrice = text.substring(text.lastIndexOf('(regularly ')).replace('(regularly $','').replace(')', '');var difference = ((regularPrice-price)*100/regularPrice).toFixed(2); if (difference > 40) {  $this.append('<strong>' + difference + '%</strong>');} })

```
