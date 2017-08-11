/* global angular */

let superheroPhone = [
  {
    name: "Superman",
    phone: "345-675-1278",
    affiliation: "DC Comics",
    image:"https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png"
  },
  {
    name: "The Hulk",
    phone: "457-623-5098",
    affiliation: " Marvel Comics",
    image:"https://s-media-cache-ak0.pinimg.com/736x/76/4f/bc/764fbcd6ecac3f38b0828ecc2c46b612--boy-scout-blue.jpg"
  },
  {
    name: "Aquaman",
    phone: "693-235-2058",
    affiliation: "DC Comics",
    image: "https://static.comicvine.com/uploads/original/8/83882/2327247-aquaman2.jpg"
  },
  {
    name: "The Human Fly",
    phone: "873-942-1238",
    affiliation: " Marvel Comics",
    image: "https://s-media-cache-ak0.pinimg.com/originals/31/da/68/31da688d565aedd9f71b4f9f72bb977c.jpg"
  }
]

angular.module("comicsPhoneApp", [])
.controller("comicsPhoneController", [comicsPhoneControllerFunction])

function comicsPhoneControllerFunction(){
  this.superheroes = superheroPhone
}
