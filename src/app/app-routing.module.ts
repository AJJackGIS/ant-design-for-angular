import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ButtonComponent} from './demo/button/button.component';
import {EchartsComponent} from './demo/echarts/echarts.component';
import {LeafletComponent} from './map/leaflet/leaflet.component';
import {BdmapComponent} from './map/bdmap/bdmap.component';
import {OpenlayersComponent} from './map/openlayers/openlayers.component';
import {CesiumComponent} from './map/cesium/cesium.component';
import {LayoutComponent} from './pages/layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'button', component: ButtonComponent},
      {path: 'charts', component: EchartsComponent}
    ]
  },
  {
    path: 'map',
    component: LayoutComponent,
    children: [
      {path: 'leaflet', component: LeafletComponent},
      {path: 'ol', component: OpenlayersComponent},
      {path: 'cesium', component: CesiumComponent},
      {path: 'bdmap', component: BdmapComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
