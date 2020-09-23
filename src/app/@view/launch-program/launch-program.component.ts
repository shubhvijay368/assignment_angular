import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/@core/@services/common.service';
import { API_TYPE } from 'src/app/@core/@utills/api-type';

@Component({
  selector: 'app-launch-program',
  templateUrl: './launch-program.component.html',
  styleUrls: ['./launch-program.component.scss']
})
export class LaunchProgramComponent implements OnInit {
  years = [
    {value:'2006', isSelected: false},
    {value:'2007', isSelected: false},
    {value:'2008', isSelected: false},
    {value:'2009', isSelected: false},
    {value:'2010', isSelected: false},
    {value:'2011', isSelected: false},
    {value:'2012', isSelected: false},
    {value:'2013', isSelected: false},
    {value:'2014', isSelected: false},
    {value:'2015', isSelected: false},
    {value:'2016', isSelected: false},
    {value:'2017', isSelected: false},
    {value:'2018', isSelected: false},
    {value:'2019', isSelected: false},
    {value:'2020', isSelected: false}
  ];

  launch_success: any = [
    { value:"true", isSelected: false},
    { value:"false", isSelected: false}
  ];
  land_success: any = [
    { value:"true", isSelected: false},
    { value:"false", isSelected: false}
  ];;
  launchData: any = [];
  isshowResult: boolean;
  subscriptions: Subscription[] = [];

  constructor(private cs : CommonService) { }

  ngOnInit(): void {
    this.getLaunchPrograms();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((element) => {
      element.unsubscribe();
    });
  }

  getLaunchPrograms(){
    let req : any = { limit:100 };

    // if(this.launch_success) , land_success: this.land_success

    req.launch_year = this.years.filter(item=>item.isSelected).map(item=>item.value)
    req.launch_success = this.launch_success.filter(item=>item.isSelected).map(item=>item.value)
    req.land_success = this.land_success.filter(item=>item.isSelected).map(item=>item.value)

    let requestSub = this.cs.httpRequest(API_TYPE.GET, 'launches', req).subscribe(
      (res: any) => {
        console.log(res);
        this.isshowResult = true;

        this.launchData = res;
        
      },
      (err : HttpErrorResponse)  => {
        console.log(err);
        
      }
    );
    this.subscriptions.push(requestSub);
  }

  changeFilterYear(index, array){
    for(let i=0;i < array.length;i++){
      if(i == index)
        array[i].isSelected = !array[i].isSelected;
      else
      array[i].isSelected = false;
    }
    this.getLaunchPrograms();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
