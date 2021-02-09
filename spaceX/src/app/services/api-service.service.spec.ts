import { TestBed } from '@angular/core/testing';

import { ApiServiceService } from './api-service.service';
import {​​​​​​ HttpClientTestingModule, HttpTestingController }​​​​​​ from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {  LaunchDetails } from "../components/model/model";

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let launchSelected = "true";
  let landingSelected = "true";
  let yearSelected = "2017";
  let launchUrl = 'https://api.spaceXdata.com/v3/launches?limit=25&launch_success=true&land_success=true&launch_year2017';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(ApiServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('#getLaunchDetails', () => {
    let expectedData: LaunchDetails[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedData = [
        {
          "mission_name":"Iridium NEXT Mission 1",
          "mission_id":[
            "F3364BF"
          ],
          "launch_year":"2017",
          "launch_success":"true",
          "details":"First payload to fly on a reused first stage, B1021, previously launched with CRS-8, which also landed a second time. In what is also a first, the payload fairing remained intact after a successful splashdown achieved with thrusters and a steerable parachute.",
          "flight_number":"39",
          "rocket": {
            "first_stage" : {  }
          },
         "links":{
          "mission_patch_small":"https://images2.imgbox.com/0d/06/aNPEVF72_o.png",
         }
        }
      ] as LaunchDetails[];
    });
    
    //Test case 1
    it('should return expected launch details by calling once', () => {
      service.getLaunchDetails(launchSelected, landingSelected, yearSelected).subscribe(
        emps => expect(emps).toEqual(expectedData, 'should return expected launch details'),
        fail
      );

      const req = httpTestingController.expectOne(launchUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData); //Return expectedEmps
    });
    
    //Test case 2
    it('should be OK returning no launch details', () => {
      service.getLaunchDetails(launchSelected, landingSelected, yearSelected).subscribe(
        emps => expect(emps.length).toEqual(0, 'should have empty launch details array'),
        fail
      );

      const req = httpTestingController.expectOne(launchUrl);
      req.flush([]); //Return empty data
    });
    

    //Test case 3
    it('should return expected launch details when called multiple times', () => {
      service.getLaunchDetails(launchSelected, landingSelected, yearSelected).subscribe();
      service.getLaunchDetails(launchSelected, landingSelected, yearSelected).subscribe(
        emps => expect(emps).toEqual(expectedData, 'should return expected launch details'),
        fail
      );

      const requests = httpTestingController.match(launchUrl);
      expect(requests.length).toEqual(2, 'calls to getLaunchDetails()');

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(expectedData); //Return expectedData in second call
    });
  });
});
