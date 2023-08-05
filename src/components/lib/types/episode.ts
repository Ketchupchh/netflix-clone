export type Episode = {
    air_date: string;
    crew: [
      {
        job: string;
        department: string;
        credit_id: string;
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
      },
    ],
    episode_number: 1,
    guest_stars: [
    {
      character: string;
      credit_id: string;
      order: number;
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
    }
    ],
    name: string;
    overview: string;
    id: number;
    production_code: string;
    runtime: number;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
};
    
export type Episodes = Episode[];