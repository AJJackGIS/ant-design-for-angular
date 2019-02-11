import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import Vector from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {fromLonLat, transform} from 'ol/proj.js';
import {Style, Fill, Stroke, Text} from 'ol/style';
import {toStringHDMS} from 'ol/coordinate.js';
import GeoJSON from 'ol/format/GeoJSON';

@Component({
  selector: 'app-openlayers',
  templateUrl: './openlayers.component.html',
  styleUrls: ['./openlayers.component.css']
})
export class OpenlayersComponent implements OnInit {

  map = null;

  constructor() {
  }

  ngOnInit() {

    const highlightedStyle = new Style({
      fill: new Fill({ // 矢量图层填充颜色，以及透明度
        color: 'rgba(117, 117, 117, 0.6)'
      }),
      stroke: new Stroke({ // 边界样式
        color: '#319FD3',
        width: 1
      }),
      text: new Text({ // 文本样式
        font: '14px Calibri,sans-serif',
        fill: new Fill({
          color: '#000'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 3
        })
      })
    });

    // 高亮图层
    const highlightedLayer = new Vector({
      source: new VectorSource(),
      style: highlightedStyle
    });


    this.map = new Map({
      view: new View({
        center: fromLonLat([105.9521484375, 35.92464453144099]),
        zoom: 4
      }),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}' +
            '!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0'
          })
        }), // 图层集合
        highlightedLayer
      ],
      target: 'map'
    });

    // overlay容器
    const container = document.getElementById('popup');
    // overlay中body部分
    const content = document.getElementById('popup-content');
    // overlay中关闭按钮
    const closer = document.getElementById('popup-closer');

    // 初始化overlay
    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        source: [0, 0],
        duration: 250   // 当Popup超出地图边界时，为了Popup全部可见，地图移动的速度. 单位为毫秒（ms）
      }
    });

    // 定义关闭按钮事件
    closer.onclick = () => {
      overlay.setPosition(undefined); // 取消定位
      closer.blur(); // 失去焦点
      return false; // 防止事件继续冒泡
    };

    // 添加点击事件
    this.map.addEventListener('click', event => {
      const coordinate = event.coordinate; // 3857
      const lnglat = transform(coordinate, 'EPSG:3857', 'EPSG:4326'); // 3857 -> 4326
      const hdms = toStringHDMS(lnglat); // 度分秒
      content.innerHTML = '<p>你点击的坐标是：</p><code>' + hdms + '</code>'; // 显示具体的内容
      overlay.setPosition(coordinate); // 设置overlay显示的位置**坐标是3857
      this.map.addOverlay(overlay);
    });

    // 添加移动事件
    this.map.addEventListener('pointermove', event => {
      if (event.dragging) {   // 如果是拖动地图造成的鼠标移动，则不作处理
        return;
      }
      const pixel = this.map.getEventPixel(event.originalEvent);
      const feature = this.map.forEachFeatureAtPixel(pixel, (feature, layer) => {
        return feature; // 搜索feature
      });

      if (feature) {
        highlightedLayer.getSource().clear(); // 先清空
        highlightedLayer.getSource().addFeature(feature); // 再添加
      }
    });

    // 自定义vertor显示样式
    const style = new Style({
      fill: new Fill({ // 矢量图层填充颜色，以及透明度
        color: 'rgba(117, 117, 117, 0.6)'
      }),
      stroke: new Stroke({ // 边界样式
        color: '#319FD3',
        width: 1
      }),
      text: new Text({ // 文本样式
        font: '14px Calibri,sans-serif',
        fill: new Fill({
          color: '#000'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 3
        })
      })
    });

    // 创建矢量图层
    const vertorLayer = new Vector({
      // 加载geojson数据
      source: new VectorSource({
        // features: features // 如果是features的方式
        // 如果是geojson的方式
        format: new GeoJSON({
          defaultDataProjection: 'EPSG:4326', // 设定JSON数据使用的坐标系
          featureProjection: 'EPSG:3857' // 设定当前地图使用的feature的坐标系
        }),
        url: 'assets/countries.json'
      }),
      style: (feature, resolution) => {
        style.getText().setText(resolution < 5000 ? feature.get('name') : '');  // 当放大到1:5000分辨率时，显示国家名字
        return style;
      }
    });
    this.map.addLayer(vertorLayer);
  }

}
