let enterprises = [
{
  id: 1,
  name: "Les Outillages J.S.",
  category: "Ventes d'outils",   // ex: "Restaurant", "Garage", "Salon"
  city: "St-roch-de-l'achigan",
  rating: 4.2,        // entre 1 et 5
  votes: 15,
  description: "Ventes d'outils multiples"
},
{
  id: 2,
  name: "B12 Burger Terrebonne",
  category: "Restaurant",   // ex: "Restaurant", "Garage", "Salon"
  city: "Terrebonne",
  rating: 4.5,        // entre 1 et 5
  votes: 15,
  description: "Burger place",
},
]

function searchByCity(city) {          
    return enterprises.filter(
        function(enterprise) {
            return enterprise.city === city;
        }
    );
}
function averageRating(rating) {
    
}