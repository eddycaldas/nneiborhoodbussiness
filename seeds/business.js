
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('business').del()
    .then(function () {
      // Inserts seed entries
      return knex('business').insert([
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "HNS Property Services", 
          address:"Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-505-6535", 
          website:"www.hnspropertyservices.com", 
          category:"cleaning",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "Business #2", 
          address:"Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-555-5535", 
          website:"www.google.com", 
          category:"cleaning",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "Business #3", 
          address:"Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-333-3335", 
          website:"www.google.com", 
          category:"cleaning",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "Impeccable Electric", 
          address: "Parker,Colorado 80134", 
          zipcode: "80134", 
          number:"303-718-3112", 
          website:"none", 
          category:"electric",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "HNS Concrete", 
          address: "Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-290-7184", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "Business #4", 
          address: "Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-222-2222", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "VCT Construction", 
          address: "Colorado Springs, Colorado 80927", 
          zipcode: "80927", 
          number:"720-878-8683", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
    
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "VCT Painting ", 
          address: "Parker, Colorado 80134", 
          zipcode: "80134", 
          number:"303-246-6064", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://photos.google.com/photo/AF1QipNIdmvG3FK9kly_HyWu0UrhlyqRH5mvlY5XVQ5y", 
          name: "Open Country Septic", 
          address: "Kiowa, CO 80117", 
          zipcode: "80117", 
          number: " 303-638-7097", 
          website: "none", 
          category: "Other",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        }
      

      ]);
    });
};
