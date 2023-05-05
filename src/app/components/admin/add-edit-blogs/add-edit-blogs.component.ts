import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-edit-blogs',
  templateUrl: './add-edit-blogs.component.html',
  styleUrls: ['./add-edit-blogs.component.css']
})

export class AddEditBlogsComponent implements OnInit{
  id: number = 0;
  title: string = "";
  description: string = "";
  text: string = "";
  blog: any;
  isAddMode: any;

  constructor(private blogService: BlogService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.isAddMode = !this.id;

    if (this.isAddMode === false){
      this.blog = this.blogService.getBlog(this.id);
      this.title = this.blog.title;
      this.description = this.blog.description;
      this.text = this.blog.text;
    }

  }

  onSubmit(): void {
    if (this.isAddMode === false)
    {
      this.blog = this.blogService.editBlog(this.id, this.title, this.description, this.text);
    }
    else{
      this.blog = this.blogService.addBlog(this.title, this.description, this.text);
    }     
  }

}

