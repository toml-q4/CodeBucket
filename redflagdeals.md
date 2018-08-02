```js
// find good deals

var tomMaxDiscount = 0;
var tomDiscountMin = 40;
$("#description ul li").each(function() {
  var $this = $(this);
  var $a = $this.find('a');
  var price = "0.00";
  if ($a.length > 0) {
    price = $a
    .text()
    .split(" - ")[1]
    .replace("$", "");
  }
  else {
    price = $this
    .text()
    .split(" (")[0]
    .split(" - ")[1]
    .replace("$", "");  
  }
  
  var text = $this.text();
  var regularPrice = text
    .substring(text.lastIndexOf("(regularly "))
    .replace("(regularly $", "")
    .replace(")", "");
  var difference = ((regularPrice - price) * 100 / regularPrice).toFixed(2);
  if (difference > tomMaxDiscount) {
    tomMaxDiscount = difference;
  }
  if (difference > tomDiscountMin) {
    $this.append(
      '<strong style="background-color:yellow; font-size:2em;">' +
        difference +
        "%</strong>"
    );
  }
});
$("#description").prepend('<h1>Max Discount = ' + tomMaxDiscount + '. Min discount = ' + tomDiscountMin + '</h1>');


```
