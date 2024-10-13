import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  albums: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/albums.json').subscribe((albums) => {
      this.albums = albums
    })
  }
}
