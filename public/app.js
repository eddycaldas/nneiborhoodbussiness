const business_API = "https://e-neighborhood-business.herokuapp.com/business";

$(document).ready(function() {            
  $("button").click(function() {
  $(".title").css({"padding-top": "40px"});
  $(".sub-title").hide();
  $("#form-inline").css({"padding-top": "40px"});
    });

  $.get(business_API)
  .then(function(data) {
    
      $('#form-inline').submit((event) => { 
          event.preventDefault();
          const zipCodeProvided = $('#title').val(); 
          $('#title').val('');      
          const isnum = zipCodeProvided.match(/^\d+$/); 
                    if(isnum && zipCodeProvided.length<6) {
                        for(var i=1; i<data.length; i++) {
                          var showBusiness = data[i].zipcode
                          var showName = data[i].name
                          var showNumber = data[i].number
                          var showAddress = data[i].address
                          var showImage = data[i].image
                          var showWebsite = data[i].website
                          var showCategory = data[i].category
                          var showHours = data[i].hours
                          var showSummary = data[i].summary
                          console.log(data[1].image);
                                      if( zipCodeProvided == showBusiness ) { 
                                        $("#header").append( 
                                                    `<div id='theDiv'>
                                                    <img class="picture" src=${showImage} alt="picture"/>
                                                  <h1>${showName}</h1>
                                                  <h2>${showAddress}</h2>
                                                  <h2>${showNumber}</h2>
                                                  </div>`
                                                )
                        }    
                      }
                    } else {           
                          $('#header2').append('Type a 5 digit zip code').css('color','white');
                    }    
                                 
        });                         
    });
});
                                                    // $("li").click( function() {
                                                    //       $("li").removeClass('selected');
                                                    //       $(this).addClass('selected');
                                                    //     })





      // $(document).ready(function() {
      //   setTimeout(function(){
      //     $("#dialogMsg").modal()
      //   }, 3000)
      // })
      // 



   
      



