import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bdmap',
  templateUrl: './bdmap.component.html',
  styleUrls: ['./bdmap.component.css']
})
export class BdmapComponent implements OnInit {

  regionOptions = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/countries.geo.json')
      .subscribe(geoJson => {
        echarts.registerMap('China', geoJson);
      });
    this.regionOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}：{c}'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          type: 'map',
          mapType: 'China',
          itemStyle: {
            normal: {
              areaColor: '#AAD5FF',
              borderColor: 'white',
              label: { show: true, color: 'white' }
            },
            emphasis: {
              areaColor: '#A5DABB'
            }
          }
        }
      ]
    };
  }
}
