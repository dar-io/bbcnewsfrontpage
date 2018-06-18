import $ from 'jquery';

var $component = $('#js-header');
var headerHeight = $component.height();

function init() {

  (function() {

    [].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
      new CBPFWTabs( el );
    });

  })();


}

export default init
