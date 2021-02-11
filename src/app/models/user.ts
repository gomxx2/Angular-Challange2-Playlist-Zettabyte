export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export interface Playlist {
    id: number;
    name: string;
    totalDuration: number;
    totalSongs: number;
    description: string;
    songs: Song[];
  }
  
  export interface Song {
    title: string;
    artist: string;
    duration: number;
  }
  
