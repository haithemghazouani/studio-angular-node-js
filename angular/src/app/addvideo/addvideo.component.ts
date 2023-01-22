import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVideo } from '../models/IVideo';
import { WebApiService } from '../web-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
public video:IVideo={} as IVideo;
public succ:boolean=false;
public datepip: DatePipe={} as DatePipe;


  constructor(private webapiservice : WebApiService,
    private router:Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  public currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy');


public add(){
  //console.log(this.video.title);
  if(this.currentDateTime){
  this.video.date=this.currentDateTime;

  this.webapiservice.createVideo(this.video).subscribe((data:IVideo)=>{
    this.succ=true;
  });
}
}

}
