import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ButtonComponent} from './demo/button/button.component';
import {EchartsComponent} from './demo/echarts/echarts.component';
import {LeafletComponent} from './map/leaflet/leaflet.component';
import {BdmapComponent} from './map/bdmap/bdmap.component';
import {OpenlayersComponent} from './map/openlayers/openlayers.component';
import {CesiumComponent} from './map/cesium/cesium.component';

const routes: Routes = [
  {path: '', redirectTo: '/mile', pathMatch: 'full'},
  {path: 'button', component: ButtonComponent},
  {path: 'charts', component: EchartsComponent},
  {path: 'map',  children: [
      { path: 'leaflet', component: LeafletComponent },
      { path: 'ol', component: OpenlayersComponent },
      { path: 'cesium', component: CesiumComponent },
      { path: 'bdmap', component: BdmapComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
