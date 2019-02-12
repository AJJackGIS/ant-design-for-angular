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

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent}
    ]
  },
  {
    path: 'component',
    component: LayoutComponent,
    children: [
      {path: 'button', component: ButtonComponent},
      {path: 'card', component: CardComponent}
    ]
  },
  {
    path: 'map',
    component: LayoutComponent,
    children: [
      {path: 'leaflet', component: LeafletComponent},
      {path: 'ol', component: OpenlayersComponent},
      {path: 'cesium', component: CesiumComponent},
      {path: 'bdmap', component: BdmapComponent},
      {path: 'maptalks', component: MaptalksComponent}
    ]
  },
  {
    path: 'plugin',
    component: LayoutComponent,
    children: [
      {path: 'charts', component: EchartsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
