
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('business').del()
    .then(function () {
      // Inserts seed entries
      return knex('business').insert([
        {
          name: "HNS Property Services", address:"Centennial, Colorado 80015", zipcode: "80015", number:"720-505-6535", website:"www.hnspropertyservices.com", category:"cleaning"
        },
        {
          name: "Impeccable Electric", address: "Parker,Colorado 80134", zipcode: "80134", number:"303-718-3112", website:"none", category:"electric"
        },
        {
          name: "HNS Concrete", address: "Centennial, Colorado 80015", zipcode: "80015", number:"720-290-7184", website:"none", category:"construction"
        },
        {
          name: "VCT Construction", address: "Colorado Springs, Colorado 80927", zipcode: "80927", number:"720-878-8683", website:"none", category:"construction"
        },
        {
          name: "VCT Painting ", address: "Parker, Colorado 80134", zipcode: "80134", number:"303-246-6064", website:"none", category:"construction"
        },
        {
          name: "Open Country Septic", address: "Kiowa, CO 80117", zipcode: "80117", number: " 303-638-7097", website: "none", category: "Other"
        }

      ]);
    });
};
