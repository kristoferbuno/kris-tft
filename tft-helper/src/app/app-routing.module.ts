import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemCombinatorComponent } from './item-combinator/item-combinator.component';
import { SummonerViewComponent } from './summoner-view/summoner-view.component';


const routes: Routes = [
  // { path: 'placeholder', component: PlaceholderComponent }
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'items', component: ItemCombinatorComponent },
  { path: 'search', component: SummonerViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
