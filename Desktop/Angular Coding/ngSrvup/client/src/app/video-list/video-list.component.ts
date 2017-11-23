import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoListComponent implements OnInit {
	title="Video List"
	//videoList = ["Item 1", "Item 2", "Item 3"] JSON
	todayDate;
	videoList = [
		{
		name: "Item 1",
		slug: "item-1",
		embed:`1hyjLD7pk10`,
		}, 
		{
		name: "Item 2",
		slug: "item-2",
		embed:`1hyjLD7pk10`,
		}, 
		{
		name: "Item 3",
		slug: "item-3",
		embed:"",
		}
	]
  constructor() { }

  ngOnInit() {
  	this.todayDate = new Date
  }

  getEmbedUrl(item){
  	return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2'

  }

}
