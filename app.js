(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products =[{
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their lusters',
    image: [{
      full: 'C:/Users/Ashok/Desktop/Bootstrap/P1/images.jpg',
      description: 'my first image'
    }],
    canPurchase: true,
    soldOut: false,
    date: 453452937403,
	reviews:[
				{
					stars:5,
					comment:"pretty awesome gem for reasonble price",
					author:"owner@shop.com"
				},
				{
					stars:3.5,
					comment:"just another gem in the market",
					author:"dontwant@toconceal.com"
				},
				{
					stars:4.5,
					comment:"good gem and great service",
					author:"tiebreaker@iam.com"
				}
			]
  }, {
    name: 'bhav',
    price: 3.95,
    description: 'Some gems have hidden qualities beyond their lusters',
    image: [{
      full: 'C:/Users/Ashok/Desktop/Bootstrap/P1/Desert.jpg',
      description: 'my second image'
    }],
    canPurchase: true,
    soldOut: false,
    date: 3497234723748
  }, {
    name: 'Ogi',
    price: 2.45,
    description: 'Some gems have hidden qualities beyond their lusters',
    canPurchase: true,
    soldOut: false,
    date: 234830843434
  }, {
    name: 'Sagi',
    price: 6.95,
    description: 'Some gems have hidden qualities beyond their lusters',
    canPurchase: true,
    soldOut: false,
    date: 32372894730
  }]
  });
  app.controller('PanelController', function() {
    this.tab = 1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	this.isSelected=function(classNo){
		return this.tab===classNo;
	};
  });
  
})();
