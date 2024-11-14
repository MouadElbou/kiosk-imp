import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ScanningpageComponent } from './scanningpage/scanningpage.component';
import { ScanningPreviewComponent } from './scanning-preview/scanning-preview.component';
import { DocumentSelectionComponent } from './document-selection/document-selection.component';
import { ScanProgressComponent } from './scan-progress/scan-progress.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'preview', component: ScanningPreviewComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'scanning', component: ScanningpageComponent },
  { path: 'loading', component: ScanProgressComponent },
  { path: 'printing', component: DocumentSelectionComponent },
  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
