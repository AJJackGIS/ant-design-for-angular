import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonComponent } from './component/button/button.component';
import { EchartsComponent } from './plugin/echarts/echarts.component';
import { LeafletComponent } from './map/leaflet/leaflet.component';
import { BdmapComponent } from './map/bdmap/bdmap.component';
import { OpenlayersComponent } from './map/openlayers/openlayers.component';
import { CesiumComponent } from './map/cesium/cesium.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MaptalksComponent } from './map/maptalks/maptalks.component';
import { CardComponent } from './component/card/card.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { MenuComponent } from './component/menu/menu.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ChilddemoComponent } from './pages/childdemo/childdemo.component';
import { InputParentComponent } from './pages/input-parent/input-parent.component';
import { InputChildComponent } from './pages/input-child/input-child.component';
import { BroadcastReceiverComponent } from './subscribe/broadcast-receiver/broadcast-receiver.component';
import { BroadcastReceiver2Component } from './subscribe/broadcast-receiver2/broadcast-receiver2.component';
import { BroadcastReceiverHomeComponent } from './subscribe/broadcast-receiver-home/broadcast-receiver-home.component';
import { BroadcastServiceService } from './subscribe/broadcast-service.service';
import { PageComponent } from './rxjs/page/page.component';
import { DataServiceService } from './rxjs/data-service.service';
import { HttpServiceService } from './http/http-service.service';
import { HttpPageComponent } from './http/http-page/http-page.component';
import { MyHttpInterceptor } from './Interceptor/my-http-interceptor';
import { RxjsLearnComponent } from './rxjs/rxjs-learn/rxjs-learn.component';
import { FlipcardComponent } from './flipcard/flipcard/flipcard.component';
import { FlipbackComponent } from './flipcard/flipback/flipback.component';
import { FlipfrontComponent } from './flipcard/flipfront/flipfront.component';
import { AxiosPageComponent } from './axios/axios-page/axios-page.component';

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
    MaptalksComponent,
    CardComponent,
    DropdownComponent,
    MenuComponent,
    DemoComponent,
    ChilddemoComponent,
    InputParentComponent,
    InputChildComponent,
    BroadcastReceiverComponent,
    BroadcastReceiver2Component,
    BroadcastReceiverHomeComponent,
    PageComponent,
    HttpPageComponent,
    RxjsLearnComponent,
    FlipcardComponent,
    FlipbackComponent,
    FlipfrontComponent,
    AxiosPageComponent
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
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    BroadcastServiceService,
    DataServiceService,
    HttpServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
