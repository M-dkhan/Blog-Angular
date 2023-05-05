import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  
  blogs: any;
  
  constructor(private blogService: BlogService, private router: Router){}

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  deleteBlog(blogId: number): void {
    this.blogs = this.blogService.deleteBlog(blogId);
  }
  
}
