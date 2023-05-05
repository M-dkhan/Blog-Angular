import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AddEditBlogsComponent } from './components/admin/add-edit-blogs/add-edit-blogs.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: BlogListComponent},
  { path: 'blogs/:id', component: BlogDetailComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/blogs/add', component: AddEditBlogsComponent},
  { path: 'admin/blogs/edit/:id', component: AddEditBlogsComponent},
  // { path: '/blogs', component: BlogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
