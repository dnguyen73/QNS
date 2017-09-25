import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  constructor(private _titleService: Title,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) { }

  ngOnInit() {
    this._titleService.setTitle( 'New Arrival' );
    this.title = this._titleService.getTitle();
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

}
