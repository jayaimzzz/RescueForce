export let animals = [
  {
    id: "1",
    name: "Toby",
    dob: "2015-03-21",
    shelterId: "1",
    hostId: "1",
    status: "adoptable",
    species: 'dog',
    sex: 'male',
    breed: "lab mix",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://www.k9ofmine.com/wp-content/uploads/2017/05/borador-dog.jpg",
      "https://www.k9ofmine.com/wp-content/uploads/2017/05/lab-border-collie-mix.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  }
];

export let hosts = [
  
  {
      id: "1",
      name: 'Kathy',
      address: "459 Roundabout way",
      phoneNumber: "5555551234",
      photos: ["https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiZjPLErazfAhUq7IMKHXUdBAwQjRx6BAgBEAU&url=http%3A%2F%2Fwww.arottalove.net%2Fblog%2F2008%2F08%2Fcrazy-dog-lady%2F&psig=AOvVaw2zQhYuLmZBFpHsh7mGnArI&ust=1545324769681218"],
      capacity: {cats: 0, dogs: 2}
  }
];

export let shelters = [
    {
        id: "1",
        name: 'HAND',
        address: "123 Main Street",
        phoneNumber: "8881234321",
        photos: ["https://i.pinimg.com/originals/97/19/9c/97199cdda2fec20471eb88c8da150220.jpg"],
        capacity: {cats: 100, dogs: 50}
      }
]

export let loggedInUser = {
  type: "host",
  id: 1,
  token: "AAAAAABBBB"
}

