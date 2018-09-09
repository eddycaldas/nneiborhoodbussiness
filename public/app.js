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
                            var showId = data[i].id
                            
                              var array = []
                            
                                if( zipCodeProvided == showBusiness ) { 
                                  array.push(showImage, showName, showNumber,
                                              showAddress, showHours, showCategory,
                                              showSummary, showWebsite);
                                              // console.log(array);

                                  
                                      $("#header").append(     
                                        `<div class='theDiv' id='theDiv'>
                                            <img class="picture" src=${showImage} alt="picture"/>
                                            <h1 id='name'>${showName}</h1>
                                            <h2 id='address'>${showAddress}</h2>
                                            <h2 id='number'>${showNumber}</h2>
                                          </div>`
                                            )
                                          }  
                                          
                                          
                        
                    //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
                    $("div#theDiv.theDiv").on("click", function(){
                      $(".popup-overlay, .popup-content").addClass("active");
                    });

                    //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
                    $(".close, .popup-overlay").on("click", function(){
                      $(".popup-overlay, .popup-content").removeClass("active");
                    });
                                          
        
        
        
        
                    var source   = $("#entry-template").html();
                    var template = Handlebars.compile(source);            
                    var context = {
                      entry: array
                    };
                    var html    = template(context);
                    console.log(array);
                    $('.content').append(html);
                    
                    
                    
                        
                                          
                                        }
                                        
                                        
                                        
                                          
                                      } else {           
                      $('#header2').append('Type a 5 digit zip code').css('color','white');
                    }                              
        });                
    });
});


