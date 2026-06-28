export const ALBUM_TYPES = [
  { value: 'all', label: 'All' },
  { value: 'album', label: 'Albums' },
  { value: 'single', label: 'Singles' },
  { value: 'ep', label: 'EPs' },
  { value: 'compilation', label: 'Compilations' },
]

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
  { value: 'alpha', label: 'A–Z' },
]

export const DEMO_DATA = {
  'linkin park': {
    artist: { name: 'Linkin Park', followers: '25.4M' },
    albums: [
      { id: 'lp1', name: 'Hybrid Theory', year: 2000, type: 'album', tracks: 12, cover: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_-_Hybrid_Theory_%28Official_Album_Cover%29.jpg', spotify: 'https://open.spotify.com/album/5BHPwoYQxWEBVXJFqj6gsL' },
      { id: 'lp2', name: 'Meteora', year: 2003, type: 'album', tracks: 13, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Linkin_Park_-_Meteora_cover_art.jpg/220px-Linkin_Park_-_Meteora_cover_art.jpg', spotify: 'https://open.spotify.com/album/0YUkNOuD6kN7gSPxX9MiK0' },
      { id: 'lp3', name: 'Minutes to Midnight', year: 2007, type: 'album', tracks: 12, cover: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Minutes_to_Midnight_cover.jpg', spotify: 'https://open.spotify.com/album/6lxfJ7eHGQ2O2CQWCmMvtL' },
      { id: 'lp4', name: 'A Thousand Suns', year: 2010, type: 'album', tracks: 15, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/LinkinParkAThousandSunsalbumcover.jpg/220px-LinkinParkAThousandSunsalbumcover.jpg', spotify: 'https://open.spotify.com/album/0YgXiUbbCIVWJEMKVsD5D9' },
      { id: 'lp5', name: 'Living Things', year: 2012, type: 'album', tracks: 11, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Linkin_Park_-_Living_Things.jpg/220px-Linkin_Park_-_Living_Things.jpg', spotify: 'https://open.spotify.com/album/3IyNNDbMKGVR7aMKF0xZjY' },
      { id: 'lp6', name: 'The Hunting Party', year: 2014, type: 'album', tracks: 13, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Linkin_Park_-_The_Hunting_Party.png/220px-Linkin_Park_-_The_Hunting_Party.png', spotify: 'https://open.spotify.com/album/5GbXoXw40q2pQW7DzQBD3b' },
      { id: 'lp7', name: 'One More Light', year: 2017, type: 'album', tracks: 10, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Linkin_Park_-_One_More_Light_%28Official_Album_Cover%29.png/220px-Linkin_Park_-_One_More_Light_%28Official_Album_Cover%29.png', spotify: 'https://open.spotify.com/album/3P7c1oWxIiSmBJbZqJH2HK' },
      { id: 'lp8', name: 'From Zero', year: 2024, type: 'album', tracks: 11, cover: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Linkin_Park_-_From_Zero.png', spotify: 'https://open.spotify.com/album/6uDfzBvH7c9c2L7VtaSJSB' },
      { id: 'lp9', name: 'Reanimation', year: 2002, type: 'compilation', tracks: 13, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Linkin_Park_Reanimation.jpg/220px-Linkin_Park_Reanimation.jpg', spotify: 'https://open.spotify.com/album/4HimSCISI0SKQ7X4TPBPXG' },
      { id: 'lp10', name: 'Collision Course', year: 2004, type: 'ep', tracks: 6, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Collisioncourse.jpg/220px-Collisioncourse.jpg', spotify: 'https://open.spotify.com/album/0VJmkiC4gXoEbABi44AAZF' },
      { id: 'lp11', name: 'Papercuts', year: 2023, type: 'compilation', tracks: 18, cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Linkin_Park_-_Papercuts.png/220px-Linkin_Park_-_Papercuts.png', spotify: 'https://open.spotify.com/album/2YKFoEMFfXLWRFEGl3G8Mv' },
      { id: 'lp12', name: 'In the End', year: 2000, type: 'single', tracks: 1, cover: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_-_Hybrid_Theory_%28Official_Album_Cover%29.jpg', spotify: 'https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq' },
    ],
  },
  'radiohead': {
    artist: { name: 'Radiohead', followers: '8.9M' },
    albums: [
      { id: 'rh1', name: 'Pablo Honey', year: 1993, type: 'album', tracks: 12, cover: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Pablo_Honey.png', spotify: 'https://open.spotify.com/album/6400dnyeDyD2mIFHfkwHXN' },
      { id: 'rh2', name: 'The Bends', year: 1995, type: 'album', tracks: 12, cover: 'https://upload.wikimedia.org/wikipedia/en/c/cc/TheBends.jpg', spotify: 'https://open.spotify.com/album/35UJLpClj5EDrhpNIi4K48' },
      { id: 'rh3', name: 'OK Computer', year: 1997, type: 'album', tracks: 12, cover: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png', spotify: 'https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE' },
      { id: 'rh4', name: 'Kid A', year: 2000, type: 'album', tracks: 10, cover: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead.kida.albumart.jpg', spotify: 'https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7' },
      { id: 'rh5', name: 'Amnesiac', year: 2001, type: 'album', tracks: 11, cover: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Radiohead.amnesiac.albumart.jpg', spotify: 'https://open.spotify.com/album/1HrMmB5useeZ0F5lHrMvl0' },
      { id: 'rh6', name: 'Hail to the Thief', year: 2003, type: 'album', tracks: 14, cover: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Hailtothethief.jpg', spotify: 'https://open.spotify.com/album/7dxKtc08dEeIye5MvTfMNd' },
      { id: 'rh7', name: 'In Rainbows', year: 2007, type: 'album', tracks: 10, cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Radiohead_-_In_Rainbows.png', spotify: 'https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK' },
      { id: 'rh8', name: 'The King of Limbs', year: 2011, type: 'album', tracks: 8, cover: 'https://upload.wikimedia.org/wikipedia/en/6/6d/The_King_of_Limbs.png', spotify: 'https://open.spotify.com/album/7pFeBzX627ff0VnN6bxCR3' },
      { id: 'rh9', name: 'A Moon Shaped Pool', year: 2016, type: 'album', tracks: 11, cover: 'https://upload.wikimedia.org/wikipedia/en/4/4d/A_Moon_Shaped_Pool.png', spotify: 'https://open.spotify.com/album/6vuykQgDLUCiZ7YggIpLM9' },
    ],
  },
  'daft punk': {
    artist: { name: 'Daft Punk', followers: '11.2M' },
    albums: [
      { id: 'dp1', name: 'Homework', year: 1997, type: 'album', tracks: 16, cover: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Daftpunkworkcover.jpg', spotify: 'https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY' },
      { id: 'dp2', name: 'Discovery', year: 2001, type: 'album', tracks: 14, cover: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Discovery2001.jpg', spotify: 'https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc' },
      { id: 'dp3', name: 'Human After All', year: 2005, type: 'album', tracks: 8, cover: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Daft_Punk_-_Human_After_All.png', spotify: 'https://open.spotify.com/album/4PMUMrLvX3xFdGhNjHCGW4' },
      { id: 'dp4', name: 'Alive 2007', year: 2007, type: 'album', tracks: 13, cover: 'https://upload.wikimedia.org/wikipedia/en/8/85/Daftpunkalive2007.jpg', spotify: 'https://open.spotify.com/album/228Rnm7HvnBpyFnRSqBBcA' },
      { id: 'dp5', name: 'Random Access Memories', year: 2013, type: 'album', tracks: 13, cover: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg', spotify: 'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa' },
    ],
  },
}
