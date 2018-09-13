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
                            // console.log(business_API + '/' + i);
                            
                                if( zipCodeProvided == showBusiness ) {                
                                  
                                  
                                  
                                  
                                  
                                                     
                                      $("#header").append(     
                                        `<div class='theDiv' id='theDiv'>
                                              <img class="picture" src=${showImage} alt="picture"/>
                                              <h1 id='name'>${showName}</h1>
                                              <h2 id='address'>${showAddress}</h2>
                                              <h2 id='number'>${showNumber}</h2>
                                                      <div id="ex1" class="modal">
                                                        <img class="picture" src=${showImage} alt="picture"/>
                                                        <h1 class='name'>${showName}</h1>
                                                        <h2 class='address'>${showAddress}</h2>
                                                        <h2 class='number'>${showNumber}</h2>
                                                        <h2 id='hours'>${showHours}</h2>
                                                        <h2 id='website'><a href='${showWebsite}'target="_top _blank"><i class="fas fa-globe"> website</i></a></h2>
                                                        <h2 id='category'>Category: ${showCategory}</h2><br/>
                                                        <h2 id='summary'>${showSummary}</h2>
                                                        <a class='modal-info2'href="#" rel="modal:close">Close</a>
                                                      </div>
                                                      <p><a class='modal-info'href="#ex1" rel="modal:open"> ...more info</a>
                                                      </p>            
                                            
                                            
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

