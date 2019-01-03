//There are multiple animals and hosts in here.  animal.id: "1" and host.id: "1" will
//be the examples for the database and schema. Add more hosts and animals as needed
//to test the code.  Add properties to Animal 1 and Host 1 as needed. 

export let animals = [
  {
    id: "1",
    name: "Toby",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "1",
    status: "adoptable",
    species: "dog",
    sex: "male",
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
      "https://imgix.ranker.com/user_node_img/50022/1000436787/original/i-ll-be-your-best-friend-forever-photo-u1?w=650&q=60&fm=jpg&fit=crop&crop=faces%22"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "2",
    name: "Kevin",
    dob: "2016-05-26",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "2",
    status: "adoptable",
    species: "cat",
    sex: "male",
    breed: "domestic shorthair",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg",
      "http://healingrescuedogs.com/wp-content/uploads/2012/11/IMG_08111.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "3",
    name: "Loco",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "2",
    status: "adoptable",
    species: "cat",
    sex: "female",
    breed: "",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://www.thehappycatsite.com/wp-content/uploads/2018/01/tortoiseshell-cat-1.jpg",  
    "https://catzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2017/10/tortoiseshell-cat-names-4.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "4",
    name: "Todd",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "3",
    status: "adoptable",
    species: "dog",
    sex: "male",
    breed: "pitbull mix",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://www.gopitbull.com/attachments/pictures/10854d1322066342-orange-crush-319690_10150414383202240_794437239_8302175_1135414538_n.jpg",
      "https://www.gopitbull.com/attachments/pictures/10852d1322066290-orange-crush-320531_10150414382647240_794437239_8302165_1192263568_n.jpg",
      "https://www.gopitbull.com/attachments/pictures/10855d1322066365-orange-crush-393609_10150414382277240_794437239_8302158_1543898682_n.jpg",
      "https://i.pinimg.com/originals/5a/61/9b/5a619b043c40c6c846e25bf41db7eebe.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "5",
    name: "Chance",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "4",
    status: "adoptable",
    species: "cat",
    sex: "male",
    breed: "Turkish Angora",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41281561/5/?bust=1522284197",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41281561/1/?bust=1522284190&width=1439",
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/41281561/4/?bust=1522284195&width=1439"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "6",
    name: "Chance",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "4",
    status: "adoptable",
    species: "cat",
    sex: "male",
    breed: "Turkish Angora",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://www.catster.com/wp-content/uploads/2018/01/Mackerel-Tabby_by-Denise-LeBeau.jpg",
      "https://www.catster.com/wp-content/uploads/2018/01/McGee_Mackerel-Tabby_2_by-Denise-LeBeau.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "7",
    name: "Socks",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "4",
    status: "adoptable",
    species: "cat",
    sex: "male",
    breed: "Turkish Angora",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://i.pinimg.com/originals/5f/80/aa/5f80aa46080aa3c1c8d6da1d870ceebb.jpg",
      "https://www.supanet.com/upload/images/201308/orange-cat-big-43786.jpg",
      "https://static-22.sinclairstoryline.com/resources/media/0456f534-64f6-4ef1-8a12-5f6c237b9488-FatCatAdoption_Grae.jpg?1438049226755"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "8",
    name: "Martha",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "5",
    status: "foster",
    species: "dog",
    sex: "female",
    breed: "Turkish Angora",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Greyhound_smiling.JPG/220px-Greyhound_smiling.JPG",
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "9",
    name: "Gus",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "1",
    status: "foster",
    species: "dog",
    sex: "male",
    breed: "German Shepherd",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://www.dogbreedinfo.com/images32/GermanShepherdGSDDogCrixus7MonthsOld85Pounds.jpg",
      "https://vetstreet.brightspotcdn.com/dims4/default/daea1bb/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2F5c%2Fa89605db40e5bfd72ff6d0e41ae2%2Fgerman-shepherd-ap-aozjlq-645.jpg",
      "https://vetstreet.brightspotcdn.com/dims4/default/1020ad3/2147483647/crop/696x410%2B0%2B29/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc6%2Fd9%2F5a1117354115962444019a2a10c1%2Fgerman-shepherd-ap-lkwegz.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "10",
    name: "Keith",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "1",
    status: "foster",
    species: "dog",
    sex: "male",
    breed: "White German Sheperd",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://animalso.com/wp-content/uploads/2016/12/white-shepherd_3.jpg",
      "https://animalso.com/wp-content/uploads/2016/12/white-german-shepherd_2.jpg",
      "https://animalso.com/wp-content/uploads/2016/12/white-german-shepherd_4.jpg",
      "https://animalso.com/wp-content/uploads/2016/12/white-german-shepherd_5.jpg",
      "https://animalso.com/wp-content/uploads/2016/12/white-german-shepherd_5.jpg",
      "https://animalso.com/wp-content/uploads/2016/12/white-shepherd_5.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "11",
    name: "Martha",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "1",
    status: "foster",
    species: "dog",
    sex: "female",
    breed: "Yellow Lab",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://ybxzcgnc7b-flywheel.netdna-ssl.com/wp-content/uploads/2011/12/yellow-lab.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  },
  {
    id: "12",
    name: "Mittens",
    dob: "2015-03-21",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    hostId: "5",
    status: "adoptable",
    species: "cat",
    sex: "female",
    breed: "",
    specialNeeds: false,
    pregnant: false,
    fixed: true,
    animalFriendly: true,
    peopleFriendly: true,
    pictures: [
      "https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/10949529_1461710566.1341_funddescription.jpg",
      "https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/10949529_1461705882.52_funddescription.jpg",
      "https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/10949529_1461710288.5379_funddescription.jpg",
      "https://2dbdd5116ffa30a49aa8-c03f075f8191fb4e60e74b907071aee8.ssl.cf1.rackcdn.com/10949529_1461710313.2473_funddescription.jpg"
    ],
    specialDiet: false,
    dietNotes: ""
  }
];

export let hosts = [
  {
    id: "1",
    name: "Kathy",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    approved: true,
    address: "346 Roundabout way",
    phoneNumber: "5555551234",
    photos: [
      "https://barkpost.com/wp-content/uploads/2015/12/crazy-dog-lady-5.jpg"
    ],
    capacity: { cats: 0, dogs: 2 },
    healthEmergency: false
  },
  {
    id: "2",
    name: "Eleanor",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    approved: true,
    address: "1239 Roundabout way",
    phoneNumber: "5555551234",
    photos: [
      "https://vignette.wikia.nocookie.net/simpsons/images/b/b5/230px-Eleanor_Abernathy.png"
    ],
    capacity: { cats: 11, dogs: 0 },
    healthEmergency: false
  },
  {
    id: "3",
    name: "Dan",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    approved: true,
    address: "459 Roundabout way",
    phoneNumber: "5555551234",
    photos: [
      "http://cdn.lifebuzz.com/images/228720/lifebuzz-fc0aeeaa36ba8877d195e0be9f180690-limit_2000.jpg"
    ],
    capacity: { cats: 0, dogs: 1 },
    healthEmergency: false
  },
  {
    id: "4",
    name: "Frank",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    approved: true,
    address: "459 Roundabout way",
    phoneNumber: "5555551234",
    photos: [
      "https://cdn.fstoppers.com/wp-content/uploads/2013/06/1.jpg"
    ],
    capacity: { cats: 2, dogs: 1 },
    healthEmergency: false
  },
  {
    id: "5",
    name: "Maggie",
    shelterId: "5c2511cafd2a4e05c5db0a60",
    approved: true,
    address: "459 Roundabout way",
    phoneNumber: "5555551234",
    photos: [
      "http://magdalenabibikwesterlund.com/wp-content/uploads/2018/11/CDL-BANNER-1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Retired_Racing_Greyhound_Relaxes.png/220px-Retired_Racing_Greyhound_Relaxes.png"
    ],
    capacity: { cats: 2, dogs: 5 },
    healthEmergency: false
  }
];

export let shelters = [
  // {
  //   id: "1",
  //   name: "HAND",
  //   address: "123 Main Street",
  //   phoneNumber: "8881234321",
  //   photos: [
  //     "https://i.pinimg.com/originals/97/19/9c/97199cdda2fec20471eb88c8da150220.jpg"
  //   ],
  //   capacity: { cats: 100, dogs: 50 }
  // }
];

export let loggedInUser = {
  type: "host",
  id: "1",
  token: "AAAAAABBBB"
};
