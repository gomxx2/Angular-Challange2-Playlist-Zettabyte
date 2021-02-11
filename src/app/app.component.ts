import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  Playlist, User } from './models/user';
import { PlaylistComponent } from './playlist/playlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {  
// lagu: Playlist[];
  playlist:any=[];
  editUserForm: boolean;
  editedUser: any = {};
  
  constructor(
    public dialog:MatDialog
  ) {

   }


  name = "Angular " ;
  keys: Array<string>;

  ngOnInit() { 
    this.getPlaylist();   
  }
getPlaylist(){
  this.playlist = [
    {          
      name: 'Kopikutik',
      totalDuration: 5,
      totalSongs:2,
      desc: 'More than a coffee, this is all of your favorite accoustic songs.',
      music : {
        "list1": {
          item: {
            title: 'Cigarettes of ours',
            artist: 'Ardhito Pramono',
            time: 3,
          }
        },
        "list2": {
          item: {
           title: 'Walking Back Home',
           artist: 'Vira Talisa',
           time: 2,
          }
        }       
      }      
    },{   
      name: 'Anime Hits',
      totalDuration: 5,
     totalSongs: 2,
     desc: 'Listen to your favorite Anime songs, all in one playlist',
      music: {
        "list1": {
          item: {
            title: 'Renai Circulation',
            artist: 'Kana Hanazawa',
            time: 4,
          }
        },
        "list2": {
          item: {
            title: 'Platinum Disco',
            artist: 'Tsukihi Phoenix',
            time: 4, 
          }
        },
        "list3": {
          item: {
           title: 'Silhouette',
            artist: 'KANA-BOON',
            time: 5,       
          }
        }          
      }      
    }    
  ];
}
  

 
  getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  productDetail(data,nomor)
  {
    let dialog=this.dialog.open(PlaylistComponent,{
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        //jika nomor =-1 (penambahan data baru) maka tambahkan data
        if(nomor==-1 )this.playlist.push(res);
        //jika tidak maka perbarui data
        else this.playlist[nomor]=res;
      }
    })

  }

  deleteUser(user: Playlist) {
    this.playlist.splice(this.playlist.indexOf(user), 1);
  }
      
}
