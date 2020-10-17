import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LaunchDetails } from "../components/model/model";
import { ConfigPaths } from "../../environments/ConfigPaths";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { 
  }

  getLaunchDetails(launchSelected, landingSelected, yearSelected) {
    let url= ConfigPaths.SERVERS.development;

    if(launchSelected) {
      url = url + '&launch_success=' + launchSelected;
    }

    if (landingSelected) {
      url = url + '&land_success=' + landingSelected;
    }

    if (yearSelected) {
      url = url + '&launch_year' + yearSelected;
    }
    return this.http.get<LaunchDetails[]>(url);
  }

  // onLaunchFilterApply(launchSelected) {
  //   let url = ConfigPaths.SERVERS.development;
  //   return this.http.get<LaunchDetails[]>(url + '&launch_success=' + launchSelected);
  // }

  // onLandingFilterApply(launchSelected, landingSelected) {
  //   let url = ConfigPaths.SERVERS.development;
  //   return this.http.get<LaunchDetails[]>(url + '&launch_success=' + launchSelected + '&land_success=' + landingSelected);
  // }
}
