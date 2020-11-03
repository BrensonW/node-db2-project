exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('cars').truncate()

    await knex('cars').insert([
        { VIN: "12A34B", make: "Ford", model: "F-150", mileage: 90000.0, transmission: "automatic", title: "clean" },
        { VIN: "577B683D", make: "Jeep", model: "Rubicon", mileage: 157347.0, transmission: "manual", title: "clean" },
        { VIN: "63D72H", make: "Honda", model: "Civic", mileage: 146897.8, transmission: "manual", title: "salvage" },
    
    
    ])
};