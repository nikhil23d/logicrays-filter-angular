import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FreeapiService {
  constructor(private httpclient: HttpClient) {}

  getPlaylist(): Observable<any> {
    return this.httpclient.get(
      "http://143.110.254.46:8089/api/playlist/?format=json"
    );
  }

  getPractice(): Observable<any> {
    return this.httpclient.get(
      "http://143.110.254.46:8089/api/practice/?format=json"
    );
  }

  getVideo(): Observable<any> {
    return this.httpclient.get(
      "http://143.110.254.46:8089/api/video/?format=json"
    );
  }

  getCardBySelectTopics(selectedVideoId: string): Observable<any> {
    let params1 = new HttpParams().set("id", selectedVideoId);
    return this.httpclient.get(
      "http://143.110.254.46:8089/api/video/?format=json",
      { params: params1 }
    );
  }
}
