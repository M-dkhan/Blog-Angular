import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
  
  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute){}
  blog: any;
  id: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
    
    this.blog = this.blogService.getBlog(this.id);
    console.log(this.blogService.getBlog(this.id));
  }
}
