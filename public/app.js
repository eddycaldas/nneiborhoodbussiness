const business_API = "https://e-neighborhood-business.herokuapp.com/business";


$(document).ready(function() {
  $.get(business_API)
  .then(function(data) {
    // console.log(data);
    for (i=1; i<data.length; i++) {
      var filterZipCode = data[i].address;
      // console.log(filterZipCode);
      // var zipCode = (/\d/g);
      // var zipCodeResult = filterZipCode.match(zipCode).join();
      console.log(filterZipCode);
    }
  })
})






















// $( "#searchForm" ).submit(function( event ) {
//    event.preventDefault();
// 
//   var $form = $( this ),
//   term = $form.find( "input[name='s']" ).val();
//   console.log(term);
// 
// 
// 
     
     
     
     
  // Send the data using post
  // var posting = $.post( business_API, { s: term } );
 
  // Put the results in a div
  // posting.done(function( data ) {
  //   var content = $( data ).find( "#content" );
  //   $( "#result" ).empty().append( content );
  // });
// });