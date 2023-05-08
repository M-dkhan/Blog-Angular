import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any;

  constructor(private http: HttpClient, private blogservice:BlogService){}

  ngOnInit() {
    this.blogservice.getBlogs().subscribe((response: any) => {
      console.log(response);
      this.blogs = Object.values(response);
    });
  }
}
