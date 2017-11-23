import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
//Work with Route, gets parameters from route
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoDetailComponent implements OnInit, OnDestroy {
	private routeSub:any;
	slug:string;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.routeSub = this.route.params.subscribe(params=>{
  		this.slug = params['slug']
  	})
  }
  ngOnDestroy(){
  	this.routeSub.unsubscribe()
  }

}
