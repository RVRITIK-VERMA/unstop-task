import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { OverallLayoutComponent } from './overall-layout/overall-layout.component';


const routes: Routes = [
  {
    // The initial component is overall layout and it redirects to assessment component
    path: '',
    component: OverallLayoutComponent,
    children: [
      { path: '', redirectTo: 'assessment', pathMatch: 'full' },
      { path: 'assessment', component: AssessmentComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
