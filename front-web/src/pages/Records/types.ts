export type RecordsReponse = {
    content: RecordIntem[];
    totalPages: number;
}

export type RecordIntem= {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: String;
    gamePlatform: Platform,
    genreName: String;
}

export type  = 'XBOX' | 'PC' | 'PLAYSTATION';