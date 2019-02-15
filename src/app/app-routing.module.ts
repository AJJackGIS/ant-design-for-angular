import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ButtonComponent} from './component/button/button.component';
import {EchartsComponent} from './plugin/echarts/echarts.component';
import {LeafletComponent} from './map/leaflet/leaflet.component';
import {BdmapComponent} from './map/bdmap/bdmap.component';
import {OpenlayersComponent} from './map/openlayers/openlayers.component';
import {CesiumComponent} from './map/cesium/cesium.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {MaptalksComponent} from './map/maptalks/maptalks.component';
import {CardComponent} from './component/card/card.component';
import {DropdownComponent} from './component/dropdown/dropdown.component';
import {MenuComponent} from './component/menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},

      {path: 'component/button', component: ButtonComponent},
      {path: 'component/card', component: CardComponent},
      {path: 'component/dropdown', component: DropdownComponent},
      {path: 'component/menu', component: MenuComponent},

      {path: 'map/leaflet', component: LeafletComponent},
      {path: 'map/ol', component: OpenlayersComponent},
      {path: 'map/cesium', component: CesiumComponent},
      {path: 'map/bdmap', component: BdmapComponent},
      {path: 'map/maptalks', component: MaptalksComponent},

      {path: 'plugin/charts', component: EchartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
