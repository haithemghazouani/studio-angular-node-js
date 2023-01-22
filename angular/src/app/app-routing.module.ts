import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from './video/video.component';
import {HomeComponent} from './home/home.component';
import {StudioComponent} from './studio/studio.component';
import{AddvideoComponent} from './addvideo/addvideo.component';
import { EditvideoComponent } from './editvideo/editvideo.component';
const routes: Routes = [
 { path: 'home', component:HomeComponent 
 },
 { path: 'studio', component:StudioComponent
},
{path:'video/:video_id',component:VideoComponent
},
{path:'videos/add',component:AddvideoComponent
},
{path:'videos/edit/:video_id',component:EditvideoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
