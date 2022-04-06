import { Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// const H = window['H']();

let myWindow = window as any;
myWindow.H = 'H';
const H = myWindow.h;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map') mapContainer: ElementRef;
  public hmap: any;
  public ui: any;
  public model: any;

  constructor(private router: Router, mapContainer: ElementRef) { }

  getMap() {
    // tslint:disable-next-line:max-line-length
    const platform = new H.service.Platform({ app_id: 'FT6BN72expMAfiiUKGBz', app_code: 'Nhvp1L9-W4v7n4hFClqxbA', useCIT: true, useHTTPS: true });
    const defaultLayers = platform.createDefaultLayers();
    // tslint:disable-next-line:max-line-length
    const map = new H.Map(this.mapContainer.nativeElement, defaultLayers.normal.map, { center: { lat: 39.50, lng: -98.35 }, pixelRatio: Math.min(2, devicePixelRatio), zoom: 4 });
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    this.ui = new H.ui.UI.createDefault(map, defaultLayers);
    // this.ui = ui;
    return this.hmap;
  }

  addPins() {
    // ADDS DATA TO MAP (LOCATIONS OF POWER UNITS)
    for (const truck of this.model.data) {
      if (truck.location) {
        const location = { lat: truck.location.coordinates[1], lng: truck.location.coordinates[0] };
        const marker = new H.map.Marker(location);
        const bubble = new H.ui.InfoBubble(location, { content: truck.assetNumber });
        this.hmap.addObject(marker);
        // marker.addEventListener('tap', function (evt:any) { this.ui.addBubble(bubble); }, false);


      }
    }
  }


  ngOnInit(): void {
    // API Call
    // this.powerUnitsClient.getPowerUnits(true, undefined, undefined, 1, 100, null).subscribe((value) => {
    //   this.model = value;
    //   this.getMap();
    //   this.addPins();
    // });

    this.model = [];
  }

}
