
(() => {
  'use strict'

  let galleryModule = angular.module('mainApp');

  galleryModule.controller('galleryController', function(){
      let vm = this;
      vm.slides = JSON.parse(localStorage.getItem("products"));
      

      var slide =[{
				ai: 1,
        bat: 1,
        id: 0,
        if: "img/sample1.jpg",
        il: "img/sample2.jpg",
        marca: "Sample",
        modelo: "Sample",
        precio: "0.00",
        ram: 1,
        screen: "Sample",
        so: "Sample",
			},
			{
				ai: 1,
        bat: "1",
        id: 1,
        if: "img/hp30if.jpg",
        il: "img/hp30li.jpg",
        marca: "Huawei",
        modelo: "P30",
        precio: "0.00",
        ram: "1",
        screen: "13,3 pulgadas",
        so: "Android"
			}

    ];
    
    vm.slide = slide;

/*
      vm.getActiveSlide = function () {
        var activeSlide = slides.filter(function (s) { 
          return s.active;
        })[0];
        
        alert(slides.indexOf(activeSlide));
        
      };

      vm.setActiveSlide = function (idx) {
        console.log("runproperly")
        vm.slides1[idx].active=true;
      };*/
    

  });

}


)();


/*vm.slides1 = JSON.parse (localStorage.getItem("products"));


      vm.getActiveSlide = function () {
        var activeSlide = slides.filter(function (s) { 
          return s.active;
        })[0];
        
        alert(slides.indexOf(activeSlide));
        
      };

      vm.setActiveSlide = function (idx) {
        console.log("runproperly")
        vm.slides1[idx].active=true;
      };*/