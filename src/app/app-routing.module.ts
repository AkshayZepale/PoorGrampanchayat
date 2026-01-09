import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OfficersComponent } from './components/officers/officers.component';
import { SchemesComponent } from './components/schemes/schemes.component';
import { NoticesComponent } from './components/notices/notices.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'officers', component: OfficersComponent },
  { path: 'schemes', component: SchemesComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'blogs', component: BlogsComponent },
    { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

