import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IVideo } from '../models/IVideo';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-editvideo',
  templateUrl: './editvideo.component.html',
  styleUrls: ['./editvideo.component.css']
})
export class EditvideoComponent implements OnInit {

  public video:IVideo={} as IVideo;
  public succ:boolean=false;
  public video_id:string | null=null;

  
    constructor(private webapiservice : WebApiService,
      private router:Router,private activatedRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
        this.video_id=param.get('video_id');
      });
      if(this.video_id){
        this.webapiservice.getVideo(this.video_id).subscribe((data :IVideo)=>{
          this.video=data;
        });
      }
    }
  
  
  
  public add(){
    //console.log(this.video.title);

  if(this.video_id){
    this.webapiservice.updateVideo(this.video,this.video_id).subscribe((data:IVideo)=>{
      this.succ=true;
    });
  }
  }

}
