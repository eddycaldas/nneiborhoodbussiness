const business_API = "https://e-neighborhood-business.herokuapp.com/business";

      $(document).ready(function() {    
        
        $("button").click(function() {
          $(".title").hide();
          $(".sub-title").hide();
          $("#form-inline").css({"padding-top": "40px"});
        })

          $.get(business_API)
          .then(function(data) {
          $('#form-inline').submit((event) => {
              event.preventDefault();
            const zipCodeProvided = $('#title').val();
                for(i=1; i<data.length; i++) {
            const showBusiness = data[i].zipcode
            const showName = data[i].name
            const showNumber = data[i].number
            const showAddress = data[i].address
            const showImage = data[i].image
            
            if( zipCodeProvided == showBusiness ) {
              
              
              
              
                  $(".header").append(
                  `<br><br><div>
                <h1>${showName}</h1>
                <h2>${showAddress}</h2>
                <h2>${showNumber}</h2>
              </div><br>`
              )              
            }
           }
        });
    })
  })
  
  
  
  













