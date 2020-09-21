import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/@core/@services/common.service';
import { API_TYPE } from 'src/app/@core/@utills/api-type';

@Component({
  selector: 'app-launch-program',
  templateUrl: './launch-program.component.html',
  styleUrls: ['./launch-program.component.scss']
})
export class LaunchProgramComponent implements OnInit {

  constructor(private cs : CommonService) { }

  ngOnInit(): void {
    debugger
    this.getLaunchPrograms();
  }

  getLaunchPrograms(){
    this.cs.httpRequest(API_TYPE.GET, 'launches', {
      limit:100
    }).subscribe(
      (res: any) => {
        console.log(res);
        
      },
      (err : HttpErrorResponse)  => {
        console.log(err);
        
      }
    );
  }

}
