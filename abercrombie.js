$(".product-card__price .product-price-v2--inner").each(function(){
	var $this = $(this);
	var value = $this.find(".product-price-v2__price--sale").text().replace(" CAD", "").replace("$", "");
	var discountValue = $this.find(".product-price-v2__price--offer").text().replace(" CAD", "").replace("$", "");
	var difference = ((value - discountValue) * 100 / value).toFixed(2);
	console.log(difference);
  $this.append(
    '<strong style="background-color:yellow; font-size:2em;">' +
      difference +
      "%</strong>"
  ); 
});
