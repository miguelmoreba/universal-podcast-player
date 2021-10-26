

interface Genre {
    name: string;
    id: string;
}

export interface ITunesResponse {
    previewUrl: string;
    collectionViewUrl: string;
    trackTimeMillis: number;
    artworkUrl60: string;
    artistViewUrl: string;
    trackViewUrl: string;
    artworkUrl600: string;
    artworkUrl160: string;
    episodeFileExtension: string;
    episodeContentType: string;
    episodeUrl: string;
    artistIds: number[];
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    releaseDate: Date;
    trackId: number;
    trackName: string;
    shortDescription: string;
    feedUrl: string;
    kind: string;
    wrapperType: string;
    country: string;
    description: string;
    genres: Genre[];
    episodeGuid: string;
}

