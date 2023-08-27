import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { AssessmentComponent } from './assessment/assessment.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { OverallLayoutComponent } from './overall-layout/overall-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AssessmentComponent,
    SidePanelComponent,
    OverallLayoutComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PanelRoutingModule,
  ]
})
export class PanelModule { }
