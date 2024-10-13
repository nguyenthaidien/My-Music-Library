import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  albumId!: number
  album: any
  musicList: any[] = []

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      this.albumId = +id
      this.http.get<any[]>('/assets/albums.json').subscribe((albums) => {
        this.album = albums.find((album) => album.id === this.albumId)
        this.musicList = this.album.musicList
        console.log(this.albumId,this.album)
      })
    }
  }
}
