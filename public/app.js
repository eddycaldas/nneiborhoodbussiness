const business_API = "https://e-neighborhood-business.herokuapp.com/business";

$(document).ready(function() {            
  $("button").click(function() {
  $(".title").css({"padding-top": "40px"});
  $(".sub-title").hide();
  $("#form-inline").css({"padding-top": "40px"});
  $(".footer").css({"padding-top": "150px"});
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
                            var showNeighborhoodName = data[i].neighborhoodName
                            console.log(showNeighborhoodName)
                            var showId = data[i].id
                            var html = `<div class='theDiv' id='theDiv'>
                                          <img class="picture" src=${showImage} alt="picture"/>
                                          <h1 id='name'>${showName}</h1>
                                          <a class='phone'href="tel:${showNumber}"><h2 id='number'><i class="fas fa-phone"> ${showNumber}</i></h2></a>
                                          <h2 id='address'>${showAddress}</h2>           
                                        
                                          <div id="${showId}" class="modal">
                                            <img class="picture" src=${showImage} alt="picture"/>
                                            <h1 class='name'>${showName}</h1>
                                            <h2 class='address'>${showAddress}</h2>
                                            <a class='phone'href="tel:${showNumber}"><h2 class='number'><i class="fas fa-phone"> ${showNumber}</i></h2></a>
                                            <h2 id='hours'>${showHours}</h2>
                                            <h2 id='website'><a class='web'href='${showWebsite}'target="_top _blank"><i class="fas fa-globe"> website</i></a></h2>
                                            <h2 id='summary'>${showSummary}</h2>
                                            <a class='modal-info2'href="#" rel="modal:close">Close</a>
                                          </div>
                                          <p><a class='modal-info'href="#${showId}" rel="modal:open"> ...more info</a>
                                          </p>
                                        </div>`
                                    if( zipCodeProvided == showBusiness ) {                
                                        $("#header").append(html);
                                      }  
                            }
                } else {           
                  $('#header2').append('Type a 5 digit zip code').css('color','#D8000C')
                    .css('background-color','#FFD2D2')
                    .css('border','2px solid #FFD2D2')
                    .css('font-weight','900');
                }       
                
       






        });      
     });
    $(".span").click(function() {
      console.log('its been clicked!!!!')
    })
});





