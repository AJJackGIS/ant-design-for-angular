import {Component, OnInit} from '@angular/core';
import 'echarts/map/js/province/hubei.js';

@Component({
  selector: 'app-bdmap',
  templateUrl: './bdmap.component.html',
  styleUrls: ['./bdmap.component.css']
})
export class BdmapComponent implements OnInit {

  regionOptions = null;

  constructor() {
  }

  randomData() {
    return Math.round(Math.random() * 500);
  }

  ngOnInit() {
    const mydata = [
      {name: '武汉市', value: this.randomData()},
      {name: '十堰市', value: this.randomData()},
      {name: '黄石市', value: this.randomData()},
      {name: '宜昌市', value: this.randomData()},
      {name: '襄阳市', value: this.randomData()},
      {name: '鄂州市', value: this.randomData()},
      {name: '荆门市', value: this.randomData()},
      {name: '孝感市', value: this.randomData()},
      {name: '荆州市', value: this.randomData()},
      {name: '黄冈市', value: this.randomData()},
      {name: '咸宁市', value: this.randomData()},
      {name: '随州市', value: this.randomData()},
      {name: '恩施土家族苗族自治州', value: this.randomData()},
      {name: '仙桃市', value: this.randomData()},
      {name: '潜江市', value: this.randomData()},
      {name: '天门市', value: this.randomData()},
      {name: '神农架林区', value: this.randomData()}
    ];

    this.regionOptions = {
      backgroundColor: '#CCCCCC',
      title: {
        text: '湖北省春节城市热度值',
        subtext: '',
        left: 'center',
        top: 'top',
        padding: 20,
        textStyle: {
          color: '#ffffff'
        }
      },
      tooltip: {
        trigger: 'item'
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
      visualMap: {
        type: 'continuous',
        min: 0,
        max: 500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        color: ['orangered', 'yellow', 'lightskyblue']
      },
      series: [
        {
          name: '热点',
          type: 'map',
          mapType: '湖北',
          roam: true,
          label: {
            show: true,
            color: 'white',
            fontSize: 14,
            fontFamily: 'Courier New'
          },
          itemStyle: {
            areaColor: '#AAD5FF',
            borderColor: 'white'
          },
          emphasis: {
            label: {
              fontSize: 16
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            }
          },
          data: mydata
        }
      ]
    };
  }
}
