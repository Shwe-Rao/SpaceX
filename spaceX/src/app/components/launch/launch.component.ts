import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {

    this.yearArray = [{
      yearSelected: '2000'
    },{
      yearSelected: '2001'
    },
    {
      yearSelected: '2002'
    },
    {
      yearSelected: '2003'
    },
    {
      yearSelected: '2004'
    },
    {
      yearSelected: '2005'
    },
    {
      yearSelected: '2006'
    },
    {
      yearSelected: '2007'
    },
    {
      yearSelected: '2008'
    },
    {
      yearSelected: '2009'
    },
    {
      yearSelected: '2010'
    },
    {
      yearSelected: '2011'
    },
    {
      yearSelected: '2012'
    },
    {
      yearSelected: '2013'
    },
    {
      yearSelected: '2014'
    },
    {
      yearSelected: '2015'
    },
    {
      yearSelected: '2016'
    },
    {
      yearSelected: '2017'
    },
    {
      yearSelected: '2018'
    },
    {
      yearSelected: '2019'
    },
    
    {
      yearSelected: '2020'
    }
  ]

    this.getLaunchData();
  }

  onLaunchClick(value) {
    this.launchSelected = value;
    this.getLaunchData();
  }

  onLandingClick(value) {
    this.landingSelected = value;
    this.getLaunchData();
  }

  onYearSelected(value) {
    this.yearSelected = value;
    this.getLaunchData();
  }

  getLaunchData() {
    this.apiService.getLaunchDetails(this.launchSelected, this.landingSelected, this.yearSelected).subscribe(res => {
      this.data = res;
      this.launchData = this.data;
    });
  }

}
