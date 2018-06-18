// app.js
//

(function(w, $, store, undefined) {
  "use strict";

  // Disable default behaviour for all links that have the 'disabled' class.
  $('.disabled').on('click', false);

  // Clear localStorage on ESC
  $(document).on('keyup', function(e) {
    if(e.keyCode === 27) {
      store.clear();
      location.reload();
    }

  });

  // ON EVERY PAGE LOAD
  //

  // Create a local storage variable to track which topics a user has added.
  var addedTopics = {};

  // Then check localStorage to see if a user has already got added topics.
  if( store.has('addedTopicsLocal') ) {
    // If they have, sync our local 'addedTopics' variable with the localStorage one.
    addedTopics = store.get('addedTopicsLocal');
  } else {

    // Otherwise set default topic added states.
    addedTopics['signedin']      = false;
    addedTopics['us-election']   = false;
    addedTopics['eu-referendum'] = false;
    addedTopics['oscars-2016']   = false;
    addedTopics['location-set']  = false;

    // And then sync them with localStorage
    store.set('addedTopicsLocal', addedTopics);
  }

  // Now we either know what the user has added, or have set default added topics,
  // update the topics classes on the body.
  updateBodyTopicsClasses();


  // ON USER INTERACTION
  //

  // Attach a click handler to all buttons that have a data-toggle-add-topic attribute, and when clicked

//   if ( $( "body" ).is( ".t-signedIn" ) ) {


// }


     $('#orb-search-form[data-toggle-add-topic]').on('submit', function(e) {
      event.preventDefault();
    // Get the topic name from the data attribute
    var topic        = $(this).data('toggle-add-topic');

    // Check to see if it has already been added, so we know whether to add or remove
    var isTopicAdded = addedTopics[ topic ];

    if( isTopicAdded ) {
      setTopicRemoved( topic );



    } else {
      setTopicAdded( topic );

      // Display notification after a topic is added
      $( '.t-' + [topic] + ' [data-toggle-add-topic="' + [topic] + '"]' + ' .display-tool-tip' ).slideDown('fast');
        window.setTimeout(close3,5000);

      function close3() {
        $( '.t-' + [topic] + ' [data-toggle-add-topic="' + [topic] + '"]' + ' .display-tool-tip' ).slideToggle('fast');
        }
    }


  });



     $('a[data-toggle-add-topic]').on('click', function(e) {
      event.preventDefault();
    // Get the topic name from the data attribute
    var topic        = $(this).data('toggle-add-topic');

    // Check to see if it has already been added, so we know whether to add or remove
    var isTopicAdded = addedTopics[ topic ];

    if( isTopicAdded ) {
      setTopicRemoved( topic );



    } else {
      setTopicAdded( topic );

      // Display notification after a topic is added
      $( '.t-' + [topic] + ' [data-toggle-add-topic="' + [topic] + '"]' + ' .display-tool-tip' ).slideDown('fast');
        window.setTimeout(close3,5000);

      function close3() {
        $( '.t-' + [topic] + ' [data-toggle-add-topic="' + [topic] + '"]' + ' .display-tool-tip' ).slideToggle('fast');
        }
    }


  });




  // $('a[data-sign-in]').on('click', function(e) {

  //   // Get the topic name from the data attribute
  //   var topic        = $(this).data('sign-in');

  //   // Check to see if it has already been added, so we know whether to add or remove
  //   var isTopicAdded = addedTopics[ topic ];

  //   if( isTopicAdded ) {
  //     setTopicRemoved( topic );
  //   } else {
  //     setTopicAdded( topic );
  //   }
  //  location.reload();
  // });

  // Give this function a topic name and it will ADD the topic to localStorage and the local tracking variable, and then update body topics classes.
  function setTopicAdded( topic ) {
    addedTopics[ topic ] = true;
    store.set( 'addedTopicsLocal', addedTopics, true);
    updateBodyTopicsClasses();
  }

  // Give this function a topic name and it will REMOVE the topic from localStorage and the local tracking variable, and then update body topics classes.
  function setTopicRemoved( topic ) {
    addedTopics[ topic ] = false;
    store.set( 'addedTopicsLocal', addedTopics, true);
    updateBodyTopicsClasses();
  }

  // This function loops over our local tracking variable and if a topic is marked as added, then add a class to body, otherwise remove it from the body.
  function updateBodyTopicsClasses() {

    $.each( addedTopics, function(topic, isAdded) {

      if( isAdded ) {

        $('body').addClass( 't-' + topic );

      } else {
        $('body').removeClass( 't-' + topic );

      }
    });
  }

})(this, jQuery, store);
