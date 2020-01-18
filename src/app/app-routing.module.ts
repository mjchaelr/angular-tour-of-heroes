import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    /*
    When the app starts, the browser's address bar points to the web site's root.
    That doesn't match any existing route so the router doesn't navigate anywhere.
    To make the app navigate to the dashboard automatically, add the following route t
    o the AppRoutingModule.Routes array.
     */
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
  // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Next, AppRoutingModule exports RouterModule so it will be available throughout the app.
})
export class AppRoutingModule { }
