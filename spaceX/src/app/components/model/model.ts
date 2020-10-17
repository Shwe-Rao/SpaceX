export interface LaunchDetails {
    mission_name : string,
    mission_id : any,
    launch_year : string,
    launch_success : string,
    details : string;
    flight_number: string;
    rocket: {
        first_stage: { cores: Cores[] };
      };
      links: { mission_patch_small: string };
}

export interface Cores {
    land_success: boolean;
}
  

