import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs = [
    {
        "id": 1,
        "title": "New Blog Post 1",
        "description": "This is a new blog post 1.",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "id": 2,
        "title": "New Blog Post 2",
        "description": "This is a new blog post 1.",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "id": 3,
        "title": "New Blog Post 3",
        "description": "This is a new blog post 1.",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "id": 4,
        "title": "New Blog Post 4",
        "description": "This is a new blog post 1.",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "id": 5,
        "title": "New Blog Post 5",
        "description": "This is a new blog post 1.",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "id": 6,
        "title": "New Blog Post 6",
        "description": "This is a new blog post 1.",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]; 
  
  constructor(public http: HttpClient, private router: Router) { 
    const local_blogs = localStorage.getItem('blogs');
    if (local_blogs === undefined) {
      this.blogs = JSON.parse(local_blogs);
    }
    else {
      localStorage.setItem('blogs', JSON.stringify(this.blogs));
    }
  }

  getBlogs() {
    return this.blogs;
  }

  getBlog(id: any){

    if (this.blogs[id-1] === undefined)
    {
      return this.router.navigateByUrl('/not-found');
    }
    return this.blogs[id-1];
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
}
