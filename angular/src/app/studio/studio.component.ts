import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/IVideo';
import { WebApiService } from '../web-api.service';
@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  public video: IVideo[] = [];
  public vid: IVideo = {} as IVideo;
  total: number = 0;
pagination: number = 1;

  constructor(private webapiService: WebApiService) { }

  ngOnInit(): void {
      this.allvideo();
  }

  public allvideo(){
    this.webapiService.getAllVideo().subscribe((data: IVideo[]) => {
      this.video = data;
      this.total=data.length;
      console.log(this.video);
    });
  }
  public delete(id: string | undefined) {
    if (confirm("Are you sure to delete")) {
      console.log("Implement delete functionality here");
      if (id && this.vid) {
        this.webapiService.deleteVideo(this.vid, id).subscribe((data: {}) => {
            this.allvideo();
        });
      }
    }

  }

}
