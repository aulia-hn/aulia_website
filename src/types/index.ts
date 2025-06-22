export interface Project {
  id: string;
  title: string;
  titleImageUrl: string;
  releaseDate: string;
  coverUrl: string;
  type: 'album' | 'ep' | 'single' | 'feat';
  tracks: Track[];
  streamingLinks?: {
    spotify: string;
    appleMusic: string;
    youtubeMusic: string;
    deezer: string;
    tidal: string;
    soundcloud: string;
  };
  ecrit: string;
  prod: string;
  mix: string;
  master: string;
  remerciement: string;
  cover: string;
  label: string;
  streamingEmbedLinks: {
  appleMusic: string,
  spotify: string,
  deezer: string,

}
}
export interface Track {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
  coverUrl?: string;
  lyrics?: string;
}

export interface Clip {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  releaseDate: string;
  lyrics: string;
}

export interface Playlist {
  id: string;
  title: string;
  coverUrl: string;
  description: string;
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
    deezer?: string;
    tidal?: string;
    soundcloud?: string;
  };
}