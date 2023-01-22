import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/IVideo';
import { WebApiService } from '../web-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { commante } from '../models/commante';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
public video:IVideo={} as IVideo;
public commantes:commante[]=[];
public commant:commante={} as commante; 
public video_id:string | null=null;
public datepip: DatePipe={} as DatePipe;
displayURL:any;
public i:any;
public url:any;

  constructor(private webapiservice : WebApiService,
    private activatedRoute:ActivatedRoute,public datepipe: DatePipe,
    private sanitizer: DomSanitizer) {
      this.displayURL = sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/tgbNymZ7vqY'
      );
      let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy');
      if(this.video_id){
        this.webapiservice.getVideo(this.video_id).subscribe((data :IVideo)=>{
          this.video=data;

        });
      }

      //console.log(currentDateTime);
      
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.video_id=param.get('video_id');
    });
    if(this.video_id){
    this.webapiservice.getVideo(this.video_id).subscribe((data :IVideo)=>{
      this.video=data;
    });
    this.webapiservice.getAllCommants(this.video_id).subscribe((data:commante[])=>{
      this.commantes=data;
      //console.log(this.commantes);
    });
  }
  }
  public currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy');

  public add(){
    //console.log(this.commant.text);
    if(this.video_id && this.currentDateTime){
      this.commant.video_id=this.video_id;
      this.commant.date=this.currentDateTime;
    this.webapiservice.addCommants(this.commant).subscribe((data:commante)=>{
      if(this.video_id){
        this.webapiservice.getAllCommants(this.video_id).subscribe((data:commante[])=>{
          this.commantes=data;
         console.log(this.commantes);
        });
      }
    });
  }
  }
  
public dell(id:string | undefined){
  if(this.video_id && id){
  this.webapiservice.deleteCommants(this.commant,id).subscribe((data:{})=>{
    if(this.video_id){
    this.webapiservice.getAllCommants(this.video_id).subscribe((data:commante[])=>{
      this.commantes=data;
     // console.log(this.commantes);
    });
  }
  });
}
}

}
