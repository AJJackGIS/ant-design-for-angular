import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonComponent } from './demo/button/button.component';
import { EchartsComponent } from './demo/echarts/echarts.component';
import { LeafletComponent } from './map/leaflet/leaflet.component';
import { BdmapComponent } from './map/bdmap/bdmap.component';
import { OpenlayersComponent } from './map/openlayers/openlayers.component';
import { CesiumComponent } from './map/cesium/cesium.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MaptalksComponent } from './map/maptalks/maptalks.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    EchartsComponent,
    LeafletComponent,
    BdmapComponent,
    OpenlayersComponent,
    CesiumComponent,
    DashboardComponent,
    LayoutComponent,
    MaptalksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
