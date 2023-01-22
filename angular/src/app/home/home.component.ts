import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WebApiService } from '../web-api.service'; 
import { IVideo } from '../models/IVideo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
safeURL:any;
public video: IVideo[] = [];

videoURL="https://www.youtube.com/embed/tgbNymZ7vqY";
  constructor( private _sanitizer: DomSanitizer,
    private webservice:WebApiService) {

   }

  ngOnInit(): void {
this.getvideoUrl();
  }
public getvideoUrl(){
  let i:number;
  this.webservice.getAllVideo().subscribe((data:IVideo[])=>{
    this.video=data;
    for(i=0;i<=data.length;i++)  { 
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.video[i].url);
   }
  });
}

}
