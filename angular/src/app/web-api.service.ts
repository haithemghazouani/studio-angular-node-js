import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { IVideo } from './models/IVideo';
import { commante } from './models/commante';
@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  private  serverUrl:string ='http://localhost:8000/api';

  constructor(private httpClient:HttpClient) { }

  public getAllVideo():Observable<IVideo[]>{
    let dataURL:string=`${this.serverUrl}/video`;
    return this.httpClient.get<IVideo[]>(dataURL).pipe(); 
  }

public getVideo(video_id:string):Observable<IVideo>{
let dataURL:string =`${this.serverUrl}/video/${video_id}`;
return this.httpClient.get<IVideo>(dataURL).pipe();
}

public createVideo(video : IVideo):Observable<any>{
  let dataURL:string=`${this.serverUrl}/video`;
  return this.httpClient.post(dataURL,video).pipe();
}

public updateVideo(video :IVideo,video_id:string):Observable<IVideo>{
  let dataURL:string=`${this.serverUrl}/video/${video_id}`;
  return this.httpClient.put<IVideo>(dataURL,video).pipe();
}

public deleteVideo(video : IVideo,video_id:string):Observable<{}>{
  let dataURL:string=`${this.serverUrl}/video/${video_id}`;
  return this.httpClient.delete<{}>(dataURL).pipe();
}

public getAllCommants(video_id:string):Observable<commante[]>{
  let dataURL:string=`${this.serverUrl}/commantebyid/${video_id}`;
  console.log(dataURL);
  return this.httpClient.get<commante[]>(dataURL).pipe();
}
public addCommants(commantes:commante):Observable<any>{
  let dataURL:string=`${this.serverUrl}/commante`;
  return this.httpClient.post(dataURL,commantes).pipe();
}

public deleteCommants(commant : commante,id:string):Observable<{}>{
  let dataURL:string=`${this.serverUrl}/commante/${id}`;
  return this.httpClient.delete<{}>(dataURL).pipe();
}
}
