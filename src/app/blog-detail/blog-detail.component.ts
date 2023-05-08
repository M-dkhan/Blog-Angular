import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {
  
  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private router: Router){}
  blog: any;
  id: any;
  showCommentForm: boolean = false;
  comments: any[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
    
    this.blogService.getBlog(this.id).subscribe((response: any) => {
      if (response.status === 404){
        this.router.navigateByUrl('/not-found');
      }
      this.blog = response;

    });

    this.blogService.getBlogComment(this.id).subscribe((response: any) => {
      if (response.status === 404){
        this.router.navigateByUrl('/not-found');
      }
      console.log((Object.values(response)));
      this.comments = response;

    });
    
  }

  toggleCommentForm(){
    console.log('toggle comment function is working ')
    return this.showCommentForm = !this.showCommentForm;
  }
}
