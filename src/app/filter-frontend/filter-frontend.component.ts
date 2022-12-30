import { Component, OnInit } from "@angular/core";
import { FreeapiService } from "../services/freeapi.service";

import { Playlist } from "../classes/playlist";
import { Practice } from "../classes/practice";
import { Video } from "../classes/video";

@Component({
  selector: "app-filter-frontend",
  templateUrl: "./filter-frontend.component.html",
  styleUrls: ["./filter-frontend.component.css"],
})
export class FilterFrontendComponent implements OnInit {
  constructor(private _freeApiService: FreeapiService) {}

  listPlaylist: Playlist[];
  PlaylistSelected: Number;
  listPractice: Practice[];
  PracticeSelected: Number;
  listVideo: Video[];
  VideoSelected: Number;
  ngOnInit() {
    this._freeApiService.getPlaylist().subscribe((data) => {
      // console.log(data);
      this.listPlaylist = data.results;
      console.log("Playlist data --->>", this.listPlaylist);
    });

    this._freeApiService.getPractice().subscribe((data) => {
      // console.log(data);
      this.listPractice = data.results;
      console.log("Practice data --->>", this.listPractice);
    });

    // this._freeApiService.getVideo()
    // .subscribe (
    //   data => {
    //     // console.log(data);
    //     this.listVideo = data.results;
    //     console.log("Video data --->>", this.listVideo);
    //   }
    // )
  }

  onVideoSelected(selectedVideoId: any): void {
    this._freeApiService
      .getCardBySelectTopics(selectedVideoId)
      .subscribe((data) => {
        this.listVideo = data.results;
        console.log("Video data --->>", this.listVideo);
      });
  }
}
