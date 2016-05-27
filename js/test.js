describe('indexController unit tests', function() {

  beforeEach(module('myApp'));
  var indexController,scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    indexController = $controller('indexController', {
    $scope: scope
    });
  }));

  it('should loads refinements', function () {
    expect(scope.refinements).toEqual([{ name: "Size", dataId:"size", filters: [{name: "UK 4", id:"size_4"}, {name: "UK 6", id:"size_6"},{name: "UK 8", id:"size_8"},{name: "UK 10", id:"size_10"},{name: "UK 12", id:"size_12"},{name: "UK 14", id:"size_14"},{name: "UK 16", id:"size_16"},{name: "UK 18", id:"size_18"},{name: "UK 20", id:"size_20"},{name: "UK 22", id:"size_2"},{name: "UK 24", id:"size_24"}]},
                      {name: "Base Color", dataId:"base_colour", filters: [{name:"Yellow", id:"base_colour_1"}, {name:"Red", id:"base_colour_2"}, {name:"Pink", id:"base_colour_3"}, {name:"Multi", id:"base_colour_4"}, {name:"Green", id:"base_colour_5"}, {name:"Brown", id:"base_colour_6"}, {name:"Black", id:"base_colour_7"}, {name:"White", id:"base_colour_8"}, {name:"Puple", id:"base_colour_9"}, {name:"Orange", id:"base_colour_10"}, {name:"Grey", id:"base_colour_11"}, {name:"Cream", id:"base_colour_12"}, {name:"Blue", id:"base_colour_13"}, {name:"Beige", id:"base_colour_14"}]},
                      {name: "Brand", dataId:"brand", filters: [{ name: "ASOS", id:"brand_53"}, {name: "Vero Moda", id:"brand_3092"}, {name:"TFNC", id:"brand_716"}, {name:"Paprika", id:"brand_12885"}, {name: "Motel", id:"brand_481"}, {name: "Motel", id:"brand_12711"}, {name:"Rare", id:"brand_3392"}, {name:"Element", id:"brand_33292"}, {name:"Vans", id:"brand_312392"}, {name:"Osiris", id:"brand_312"}, {name:"DC", id:"brand_1"}]}]);
  });

  it("should clear all checked checkboxes", function () {
    $('.clear-filter').click().trigger('click');
    expect($(".checkbox").eq(0).is(":checked")).toBe(false)
  });
});
