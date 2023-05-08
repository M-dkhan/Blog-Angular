import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from './config/constants';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: any;
  
  constructor(public http: HttpClient, private router: Router) { 
    // const local_blogs = localStorage.getItem('blogs');
    // if (local_blogs === undefined) {
    //   this.blogs = JSON.parse(local_blogs);
    // }
    // else {
    //   localStorage.setItem('blogs', JSON.stringify(this.blogs));
    // }
  }

  getBlogs(): Observable<any> {
    return this.http.get(`${Constants.API_ENDPOINT}/api/blogs`)
    // return this.blogs;
  }

  getBlog(id: any){
    return this.http.get(`${Constants.API_ENDPOINT}/api/blogs/show/${id}`)
  }

  editBlog(id: number, title: string, description: string, text: string): any{
    
    if (this.blogs[id-1] === undefined)
    {
      return this.router.navigateByUrl('/not-found');
    }
    this.blogs[id-1].title = title;
    this.blogs[id-1].description = description;
    this.blogs[id-1].text = text;

    localStorage.setItem('blogs', JSON.stringify(this.blogs));

    return this.blogs[id-1];
  }

  addBlog(title: string, description: string, text: string): any{
    let id: number = this.blogs.length + 1;
    let blog: any = {
      'id' : id,
      'title': title,
      'description' : description,
      'text' : text,
    };
    this.blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
    return blog;
  }
  deleteBlog(id: number){
    if (isNaN(id)) {
      return this.router.navigateByUrl('/not-found');
    }
    this.blogs.splice(id-1, 1);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
    return this.blogs;
}
  getBlogComment(id: number){
    return this.http.get(`${Constants.API_ENDPOINT}/api/blogs/get-comments/${id}`)
  }
}
