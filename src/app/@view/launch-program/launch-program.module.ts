import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LaunchProgramRoutingModule } from './launch-program-routing.module';
import { LaunchProgramComponent } from './launch-program.component';


@NgModule({
  declarations: [LaunchProgramComponent],
  imports: [
    CommonModule,
    LaunchProgramRoutingModule
  ]
})
export class LaunchProgramModule { }
