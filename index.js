const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'http://dboxmusic.local');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Static assets endpoint
  if (req.url.startsWith('/static')) {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  // First endpoint
  else if (req.url === '/endpoint1') {
    handleEndpoint1(req, res);
  }
  // Second endpoint
  else if (req.url === '/endpoint2') {
    handleEndpoint2(req, res);
  }
  // Default endpoint
  else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the server');
  }
});

function handleEndpoint1(req, res) {
  const randomTracks = getRandomTracks(8);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(randomTracks));
}

function getRandomTracks(count) {
  const shuffled = [...tracks].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function handleEndpoint2(req, res) {
  // TODO: Implement endpoint 2 logic
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Endpoint 2 response' }));
}

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

const tracks = [
  { artist: 'The Beatles', title: 'Hey Jude', album: 'Hey Jude', year: 1968 },
  { artist: 'Queen', title: 'Bohemian Rhapsody', album: 'A Night at the Opera', year: 1975 },
  { artist: 'David Bowie', title: 'Space Oddity', album: 'David Bowie', year: 1969 },
  { artist: 'Pink Floyd', title: 'Comfortably Numb', album: 'The Wall', year: 1979 },
  { artist: 'Led Zeppelin', title: 'Stairway to Heaven', album: 'Led Zeppelin IV', year: 1971 },
  { artist: 'The Rolling Stones', title: 'Satisfaction', album: 'Out of Our Heads', year: 1965 },
  { artist: 'Jimi Hendrix', title: 'Purple Haze', album: 'Are You Experienced', year: 1967 },
  { artist: 'Nirvana', title: 'Smells Like Teen Spirit', album: 'Nevermind', year: 1991 },
  { artist: 'Michael Jackson', title: 'Thriller', album: 'Thriller', year: 1982 },
  { artist: 'Prince', title: 'When Doves Cry', album: 'Purple Rain', year: 1984 },
  { artist: 'Madonna', title: 'Like a Virgin', album: 'Like a Virgin', year: 1984 },
  { artist: 'Blondie', title: 'Call Me', album: 'Autoamerican', year: 1980 },
  { artist: 'The Who', title: 'My Generation', album: 'My Generation', year: 1965 },
  { artist: 'AC/DC', title: 'Back in Black', album: 'Back in Black', year: 1980 },
  { artist: 'Metallica', title: 'Master of Puppets', album: 'Master of Puppets', year: 1986 },
  { artist: 'Black Sabbath', title: 'Paranoid', album: 'Paranoid', year: 1970 },
  { artist: 'The Doors', title: 'Light My Fire', album: 'The Doors', year: 1967 },
  { artist: 'Bob Dylan', title: 'Like a Rolling Stone', album: 'Highway 61 Revisited', year: 1965 },
  { artist: 'Fleetwood Mac', title: 'Dreams', album: 'Rumours', year: 1977 },
  { artist: 'Eagles', title: 'Hotel California', album: 'Hotel California', year: 1976 },
  { artist: 'Stevie Wonder', title: 'Sir Duke', album: 'Songs in the Key of Life', year: 1976 },
  { artist: 'Aretha Franklin', title: 'Respect', album: 'I Never Loved a Man the Way I Love You', year: 1967 },
  { artist: 'Whitney Houston', title: 'I Will Always Love You', album: 'The Bodyguard', year: 1992 },
  { artist: 'Billie Holiday', title: 'Strange Fruit', album: 'Songs for Distingué Lovers', year: 1946 },
  { artist: 'Miles Davis', title: 'So What', album: 'Kind of Blue', year: 1959 },
  { artist: 'John Coltrane', title: 'A Love Supreme', album: 'A Love Supreme', year: 1964 },
  { artist: 'Ray Charles', title: 'Georgia on My Mind', album: 'Genius: The Ray Charles Project', year: 1960 },
  { artist: 'Ella Fitzgerald', title: 'Summertime', album: 'Ella and Louis', year: 1956 },
  { artist: 'Frank Sinatra', title: 'Fly Me to the Moon', album: 'It Might as Well Be Swing', year: 1964 },
  { artist: 'Duke Ellington', title: 'Mood Indigo', album: 'Mood Indigo', year: 1930 },
  { artist: 'The Beatles', title: 'Let It Be', album: 'Let It Be', year: 1970 },
  { artist: 'The Rolling Stones', title: 'Paint It Black', album: 'Aftermath', year: 1966 },
  { artist: 'The Who', title: 'Baba O\'Riley', album: 'Who\'s Next', year: 1971 },
  { artist: 'Deep Purple', title: 'Smoke on the Water', album: 'Machine Head', year: 1972 },
  { artist: 'Pink Floyd', title: 'Another Brick in the Wall', album: 'The Wall', year: 1979 },
  { artist: 'Queen', title: 'We Will Rock You', album: 'News of the World', year: 1977 },
  { artist: 'David Bowie', title: 'Changes', album: 'Hunky Dory', year: 1971 },
  { artist: 'Led Zeppelin', title: 'Whole Lotta Love', album: 'Led Zeppelin II', year: 1969 },
  { artist: 'The Beatles', title: 'Something', album: 'Abbey Road', year: 1969 },
  { artist: 'Jimi Hendrix', title: 'All Along the Watchtower', album: 'Electric Lady Land', year: 1968 },
  { artist: 'The Velvet Underground', title: 'Walk on the Wild Side', album: 'Transformer', year: 1972 },
  { artist: 'Ramones', title: 'Blitzkrieg Bop', album: 'Ramones', year: 1976 },
  { artist: 'Sex Pistols', title: 'God Save the Queen', album: 'Never Mind the Bollocks', year: 1977 },
  { artist: 'The Clash', title: 'London Calling', album: 'London Calling', year: 1979 },
  { artist: 'Joy Division', title: 'Love Will Tear Us Apart', album: 'Unknown Pleasures', year: 1979 },
  { artist: 'New Order', title: 'Blue Monday', album: 'Power, Corruption & Lies', year: 1983 },
  { artist: 'Talking Heads', title: 'Once in a Lifetime', album: 'Remain in Light', year: 1980 },
  { artist: 'The Police', title: 'Every Breath You Take', album: 'Synchronicity', year: 1983 }
];
