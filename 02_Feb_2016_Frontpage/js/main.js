// main.js
//

(function(w, $, undefined) {
  "use strict";

  var Cldr = {

    init: function() {

      Cldr.bindEvts();
    },

    bindEvts: function() {

      $('.js-tabs li').on('click', 'a', Cldr.handleTabClick);
    },

    handleTabClick: function(e) {
      e.preventDefault();

      var $tab = $(this).parent();

      var tabGroupName = $tab
        .parent()
        .data('tab-group');

      var tabIdx = $tab.index();

      // Select .cldr__tabs based on group
      var $tabs = $('.cldr__tabs[data-tab-group="' + tabGroupName + '"]');

      // Remove .cldr__tab--active from previously active tab
      $('.cldr__tab--active', $tabs).removeClass('cldr__tab--active');

      // Add .cldr__tab--active to clicked tab
      $tab.addClass('cldr__tab--active');

      Cldr.showTabPanel( tabGroupName, tabIdx );
    },

    showTabPanel: function(tabGroupName, panelNo) {

      // Select .cldr__tab-panels based on group
      var $panels = $('.cldr__tab-panels[data-tab-group="' + tabGroupName + '"] .cldr__tab-panel');

      // Remove .cldr__tab-panel--active from all panels in the tab group
      $panels.removeClass('cldr__tab-panel--active');

      // Add .cldr__tab-panel--active to the corresponding panel in the index
      $panels.eq( panelNo ).addClass('cldr__tab-panel--active');
    }
  };

  $(Cldr.init);
})(this, jQuery);


 $(document).keydown(function (e) {
               if (e.keyCode == 67) {
            $(".cards-off, .cards").toggleClass('cards-off cards');

               }
    else if (e.keyCode == 66) {
            $(".cards-off, .cards-inverted").toggleClass('cards-off cards-inverted');

               }
      else if (e.keyCode == 86) {
            $(".cards-off, .spacing").toggleClass('cards-off spacing');

               }

		 else if (e.keyCode == 65) {
            $(".no-skyscraper, .has-skyscraper").toggleClass('no-skyscraper has-skyscraper');

               }

		else if (e.keyCode == 83) {
            $(".no-skyscraper, .MPU-top").toggleClass('no-skyscraper MPU-top');

               }
        });


$(document).ready(function(){
  // On load

  $('#BlockTwoDropdown').change(function(){ // on change event
    $('#BlockTwo')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })


  $('#BlockThreeDropdown').change(function(){ // on change event
    $('#BlockThree')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })

    $('#BlockFourDropdown').change(function(){ // on change event
    $('#BlockFour')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })

     $('#BlockFiveDropdown').change(function(){ // on change event
    $('#BlockFive')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })

       $('#BlockSixDropdown').change(function(){ // on change event
    $('#BlockSix')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })

       $('#BlockSevenDropdown').change(function(){ // on change event
    $('#BlockSeven')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })

        $('#BlockEightDropdown').change(function(){ // on change event
    $('#BlockEight')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })
         $('#BlockNineDropdown').change(function(){ // on change event
    $('#BlockNine')
    .removeClass() // remove the classes on the body
     // or removeClass('class1 class2 ...') in order to not affect others classes
    .addClass( $(this).val() ); // set the new class
  })
})


// hover link

$('.faux-block-link').hover(
       function(){ $(this).addClass('faux-block-link--hover') },
       function(){ $(this).removeClass('faux-block-link--hover') }
)
