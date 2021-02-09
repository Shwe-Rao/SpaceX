import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { LaunchDetails } from "../../components/model/model";

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  data: any;
  launchData: LaunchDetails;
  yearSelected = '';
  launchSelected = '';
  landingSelected = '';
  yearArray: any;
  launchActiveTrue: boolean = false;
  launchActiveFalse: boolean = false;
  landingActiveTrue: boolean = false;
  landingActiveFalse: boolean = false;
  ngOnInit(): void {

    this.yearArray = [{
      yearSelected: '2000',
      active: false
    },{
      yearSelected: '2001',
      active: false
    },
    {
      yearSelected: '2002',
      active: false
    },
    {
      yearSelected: '2003',
      active: false
    },
    {
      yearSelected: '2004',
      active: false
    },
    {
      yearSelected: '2005',
      active: false
    },
    {
      yearSelected: '2006',
      active: false
    },
    {
      yearSelected: '2007',
      active: false
    },
    {
      yearSelected: '2008',
      active: false
    },
    {
      yearSelected: '2009',
      active: false
    },
    {
      yearSelected: '2010',
      active: false
    },
    {
      yearSelected: '2011',
      active: false
    },
    {
      yearSelected: '2012',
      active: false
    },
    {
      yearSelected: '2013',
      active: false
    },
    {
      yearSelected: '2014',
      active: false
    },
    {
      yearSelected: '2015',
      active: false
    },
    {
      yearSelected: '2016',
      active: false
    },
    {
      yearSelected: '2017',
      active: false
    },
    {
      yearSelected: '2018',
      active: false
    },
    {
      yearSelected: '2019',
      active: false
    },
    {
      yearSelected: '2020',
      active: false
    } 
  ]

    this.getLaunchData();
  }

  onLaunchClick(value) {
    this.launchSelected = value;
    if(value === 'true') {
      this.launchActiveTrue = true;
      this.launchActiveFalse = false;
    } else {this.launchActiveFalse = true;
      this.launchActiveTrue = false;}
    this.getLaunchData();
  }

  onLandingClick(value) {
    this.landingSelected = value;
    if(value === 'true') {
      this.landingActiveTrue = true;
      this.landingActiveFalse = false;
    } else {
      this.landingActiveTrue = false;
      this.landingActiveFalse = true;
    } 

    this.getLaunchData();
  }

  onYearSelected(value) {
    this.yearSelected = value;
    let obj = this.yearArray.find(o => o.yearSelected === value);
    let activeObj = this.yearArray.find(o => o.active === true);
    if(activeObj) {activeObj.active = false};
    obj.active = true;
    this.getLaunchData();
  }

  getLaunchData() {
    this.apiService.getLaunchDetails(this.launchSelected, this.landingSelected, this.yearSelected).subscribe(res => {
      this.data = res;
      this.launchData = this.data;
    });
  }

  onClearFilterClick() {
    this.yearSelected = null;
    let obj = this.yearArray.find(o => o.active === true);
    if(obj) {obj.active = false};

    this.launchSelected = null;
    this.launchActiveFalse = false;
    this.launchActiveTrue = false;

    this.landingSelected = null;
    this.landingActiveFalse = false;
    this.landingActiveTrue = false;

    this.getLaunchData();
  }

}
