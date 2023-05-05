import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBlogsComponent } from './add-edit-blogs.component';

describe('AddEditBlogsComponent', () => {
  let component: AddEditBlogsComponent;
  let fixture: ComponentFixture<AddEditBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
