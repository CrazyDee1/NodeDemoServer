const tracks = [
  {
    artist: "The Beatles",
    title: "Hey Jude",
    album: "Hey Jude",
    year: 1968,
    genre: "rock"
  },
  {
    artist: "Queen",
    title: "Bohemian Rhapsody",
    album: "A Night at the Opera",
    year: 1975,
    genre: "rock"
  },
  {
    artist: "David Bowie",
    title: "Space Oddity",
    album: "David Bowie",
    year: 1969,
    genre: "art rock"
  },
  {
    artist: "Pink Floyd",
    title: "Comfortably Numb",
    album: "The Wall",
    year: 1979,
    genre: "progressive rock"
  },
  {
    artist: "Led Zeppelin",
    title: "Stairway to Heaven",
    album: "Led Zeppelin IV",
    year: 1971,
    genre: "hard rock"
  },
  {
    artist: "The Rolling Stones",
    title: "Satisfaction",
    album: "Out of Our Heads",
    year: 1965,
    genre: "rock"
  },
  {
    artist: "Jimi Hendrix",
    title: "Purple Haze",
    album: "Are You Experienced",
    year: 1967,
    genre: "psychedelic rock"
  },
  {
    artist: "Nirvana",
    title: "Smells Like Teen Spirit",
    album: "Nevermind",
    year: 1991,
    genre: "grunge"
  },
  {
    artist: "Michael Jackson",
    title: "Thriller",
    album: "Thriller",
    year: 1982,
    genre: "pop"
  },
  {
    artist: "Prince",
    title: "When Doves Cry",
    album: "Purple Rain",
    year: 1984,
    genre: "pop"
  },
  {
    artist: "Madonna",
    title: "Like a Virgin",
    album: "Like a Virgin",
    year: 1984,
    genre: "pop"
  },
  {
    artist: "Blondie",
    title: "Call Me",
    album: "Autoamerican",
    year: 1980,
    genre: "new wave"
  },
  {
    artist: "The Who",
    title: "My Generation",
    album: "My Generation",
    year: 1965,
    genre: "rock"
  },
  {
    artist: "AC/DC",
    title: "Back in Black",
    album: "Back in Black",
    year: 1980,
    genre: "hard rock"
  },
  {
    artist: "Metallica",
    title: "Master of Puppets",
    album: "Master of Puppets",
    year: 1986,
    genre: "metal"
  },
  {
    artist: "Black Sabbath",
    title: "Paranoid",
    album: "Paranoid",
    year: 1970,
    genre: "metal"
  },
  {
    artist: "The Doors",
    title: "Light My Fire",
    album: "The Doors",
    year: 1967,
    genre: "psychedelic rock"
  },
  {
    artist: "Bob Dylan",
    title: "Like a Rolling Stone",
    album: "Highway 61 Revisited",
    year: 1965,
    genre: "folk rock"
  },
  {
    artist: "Fleetwood Mac",
    title: "Dreams",
    album: "Rumours",
    year: 1977,
    genre: "soft rock"
  },
  {
    artist: "Eagles",
    title: "Hotel California",
    album: "Hotel California",
    year: 1976,
    genre: "rock"
  },
  {
    artist: "Stevie Wonder",
    title: "Sir Duke",
    album: "Songs in the Key of Life",
    year: 1976,
    genre: "soul"
  },
  {
    artist: "Aretha Franklin",
    title: "Respect",
    album: "I Never Loved a Man the Way I Love You",
    year: 1967,
    genre: "soul"
  },
  {
    artist: "Whitney Houston",
    title: "I Will Always Love You",
    album: "The Bodyguard",
    year: 1992,
    genre: "pop"
  },
  {
    artist: "Billie Holiday",
    title: "Strange Fruit",
    album: "Songs for Distingué Lovers",
    year: 1946,
    genre: "jazz"
  },
  {
    artist: "Miles Davis",
    title: "So What",
    album: "Kind of Blue",
    year: 1959,
    genre: "jazz"
  },
  {
    artist: "John Coltrane",
    title: "A Love Supreme",
    album: "A Love Supreme",
    year: 1964,
    genre: "jazz"
  },
  {
    artist: "Ray Charles",
    title: "Georgia on My Mind",
    album: "Genius: The Ray Charles Project",
    year: 1960,
    genre: "soul"
  },
  {
    artist: "Ella Fitzgerald",
    title: "Summertime",
    album: "Ella and Louis",
    year: 1956,
    genre: "jazz"
  },
  {
    artist: "Frank Sinatra",
    title: "Fly Me to the Moon",
    album: "It Might as Well Be Swing",
    year: 1964,
    genre: "vocal jazz"
  },
  {
    artist: "Duke Ellington",
    title: "Mood Indigo",
    album: "Mood Indigo",
    year: 1930,
    genre: "jazz"
  },
  {
    artist: "The Beatles",
    title: "Let It Be",
    album: "Let It Be",
    year: 1970,
    genre: "rock"
  },
  {
    artist: "The Rolling Stones",
    title: "Paint It Black",
    album: "Aftermath",
    year: 1966,
    genre: "rock"
  },
  {
    artist: "The Who",
    title: "Baba O'Riley",
    album: "Who's Next",
    year: 1971,
    genre: "rock"
  },
  {
    artist: "Deep Purple",
    title: "Smoke on the Water",
    album: "Machine Head",
    year: 1972,
    genre: "hard rock"
  },
  {
    artist: "Pink Floyd",
    title: "Another Brick in the Wall",
    album: "The Wall",
    year: 1979,
    genre: "progressive rock"
  },
  {
    artist: "Queen",
    title: "We Will Rock You",
    album: "News of the World",
    year: 1977,
    genre: "rock"
  },
  {
    artist: "David Bowie",
    title: "Changes",
    album: "Hunky Dory",
    year: 1971,
    genre: "art rock"
  },
  {
    artist: "Led Zeppelin",
    title: "Whole Lotta Love",
    album: "Led Zeppelin II",
    year: 1969,
    genre: "hard rock"
  },
  {
    artist: "The Beatles",
    title: "Something",
    album: "Abbey Road",
    year: 1969,
    genre: "rock"
  },
  {
    artist: "Jimi Hendrix",
    title: "All Along the Watchtower",
    album: "Electric Lady Land",
    year: 1968,
    genre: "psychedelic rock"
  },
  {
    artist: "The Velvet Underground",
    title: "Walk on the Wild Side",
    album: "Transformer",
    year: 1972,
    genre: "art rock"
  },
  {
    artist: "Ramones",
    title: "Blitzkrieg Bop",
    album: "Ramones",
    year: 1976,
    genre: "punk"
  },
  {
    artist: "Sex Pistols",
    title: "God Save the Queen",
    album: "Never Mind the Bollocks",
    year: 1977,
    genre: "punk"
  },
  {
    artist: "The Clash",
    title: "London Calling",
    album: "London Calling",
    year: 1979,
    genre: "punk"
  },
  {
    artist: "Joy Division",
    title: "Love Will Tear Us Apart",
    album: "Unknown Pleasures",
    year: 1979,
    genre: "post-punk"
  },
  {
    artist: "New Order",
    title: "Blue Monday",
    album: "Power, Corruption & Lies",
    year: 1983,
    genre: "synth-pop"
  },
  {
    artist: "Talking Heads",
    title: "Once in a Lifetime",
    album: "Remain in Light",
    year: 1980,
    genre: "new wave"
  },
  {
    artist: "The Police",
    title: "Every Breath You Take",
    album: "Synchronicity",
    year: 1983,
    genre: "pop rock"
  },
  {
    artist: "U2",
    title: "With or Without You",
    album: "The Joshua Tree",
    year: 1987,
    genre: "rock"
  },
  {
    artist: "Bruce Springsteen",
    title: "Born to Run",
    album: "Born to Run",
    year: 1975,
    genre: "rock"
  },
  {
    artist: "Billy Joel",
    title: "Piano Man",
    album: "Piano Man",
    year: 1973,
    genre: "soft rock"
  },
  {
    artist: "Simon & Garfunkel",
    title: "Bridge Over Troubled Water",
    album: "Bridge Over Troubled Water",
    year: 1970,
    genre: "folk rock"
  },
  {
    artist: "The Beach Boys",
    title: "God Only Knows",
    album: "Pet Sounds",
    year: 1966,
    genre: "baroque pop"
  },
  {
    artist: "The Kinks",
    title: "Waterloo Sunset",
    album: "Something Else by The Kinks",
    year: 1967,
    genre: "rock"
  },
  {
    artist: "The Cure",
    title: "Just Like Heaven",
    album: "Kiss Me, Kiss Me, Kiss Me",
    year: 1987,
    genre: "alternative rock"
  },
  {
    artist: "Depeche Mode",
    title: "Enjoy the Silence",
    album: "Violator",
    year: 1990,
    genre: "synth-pop"
  },
  {
    artist: "Oasis",
    title: "Wonderwall",
    album: "(What's the Story) Morning Glory?",
    year: 1995,
    genre: "britpop"
  },
  {
    artist: "Radiohead",
    title: "Paranoid Android",
    album: "OK Computer",
    year: 1997,
    genre: "alternative rock"
  },
  {
    artist: "Coldplay",
    title: "Viva la Vida",
    album: "Viva la Vida or Death and All His Friends",
    year: 2008,
    genre: "alternative"
  },
  {
    artist: "Arcade Fire",
    title: "The Suburbs",
    album: "The Suburbs",
    year: 2010,
    genre: "indie rock"
  },
  {
    artist: "Florence + The Machine",
    title: "Dog Days Are Over",
    album: "Lungs",
    year: 2009,
    genre: "indie pop"
  },
  {
    artist: "Adele",
    title: "Rolling in the Deep",
    album: "21",
    year: 2011,
    genre: "soul"
  },
  {
    artist: "Björk",
    title: "Hyperballad",
    album: "Post",
    year: 1995,
    genre: "electronic"
  },
  {
    artist: "The Smiths",
    title: "There Is a Light That Never Goes Out",
    album: "The Queen Is Dead",
    year: 1986,
    genre: "indie rock"
  },
  {
    artist: "R.E.M.",
    title: "Losing My Religion",
    album: "Out of Time",
    year: 1991,
    genre: "alternative rock"
  },
  {
    artist: "The Strokes",
    title: "Last Nite",
    album: "Is This It",
    year: 2001,
    genre: "garage rock"
  },
  {
    artist: "Hozier",
    title: "Take Me to Church",
    album: "Hozier",
    year: 2014,
    genre: "soul"
  },
  {
    artist: "Daft Punk",
    title: "One More Time",
    album: "Discovery",
    year: 2000,
    genre: "electronic"
  },
  {
    artist: "Kendrick Lamar",
    title: "HUMBLE.",
    album: "DAMN.",
    year: 2017,
    genre: "hip hop"
  },
  {
    artist: "Lizzo",
    title: "Truth Hurts",
    album: "Cuz I Love You",
    year: 2019,
    genre: "pop"
  },
  {
    artist: "Billie Eilish",
    title: "bad guy",
    album: "When We All Fall Asleep, Where Do We Go?",
    year: 2019,
    genre: "pop"
  },
  {
    artist: "Kacey Musgraves",
    title: "Rainbow",
    album: "Golden Hour",
    year: 2018,
    genre: "country pop"
  },
  {
    artist: "St. Vincent",
    title: "New York",
    album: "Masseduction",
    year: 2017,
    genre: "art pop"
  }
];

module.exports = tracks;
