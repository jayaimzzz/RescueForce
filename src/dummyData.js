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
      "https://imgix.ranker.com/user_node_img/50022/1000436794/original/i-m-hungry-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces%22",
      "https://www.k9ofmine.com/wp-content/uploads/2017/05/lab-border-collie-mix.jpg",
      "https://imgix.ranker.com/user_node_img/50026/1000503480/original/awkward-turtle-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces",
      "https://imgix.ranker.com/user_node_img/50022/1000436792/original/can-i-jump-in-can-i-can-i-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces%22",
      "https://imgix.ranker.com/user_node_img/50022/1000436787/original/i-ll-be-your-best-friend-forever-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces%22",
    ],
    specialDiet: false,
    dietNotes: ""
  }
];

export let hosts = [
  
  {
      id: "1",
      name: 'Kathy',
      shelterId: "1",
      approved: true,
      address: "459 Roundabout way",
      phoneNumber: "5555551234",
      photos: ["https://barkpost.com/wp-content/uploads/2015/12/crazy-dog-lady-5.jpg"],
      capacity: {cats: 0, dogs: 2},
      healthEmergency: false
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
  id: "1",
  token: "AAAAAABBBB"
}

