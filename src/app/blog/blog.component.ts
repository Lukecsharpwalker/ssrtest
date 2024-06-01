import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, inject } from '@angular/core';
import { Firestore, FirestoreModule, collection, collectionData, deleteDoc, doc, runTransaction, setDoc, updateDoc } from '@angular/fire/firestore'; // Add the missing import
import { Blog } from './blog.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add the missing import
import { CommentsComponent } from './comments/comments.component';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FirestoreModule, CommonModule, FormsModule, ReactiveFormsModule, CommentsComponent],
  providers: [HttpClient],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  firestore = inject(Firestore);
  http = inject(HttpClient);

  blogDescription = '';
  blogTitle = '';

  collection = collection(this.firestore, 'blog');
  blog$ = collectionData(this.collection, {idField: 'id'}) as Observable<Blog[]>;

  addBlog() {
    const newTaskRef = doc(collection(this.firestore, 'blog'));
    const blog = { title: this.blogTitle, description: this.blogDescription };
    setDoc(newTaskRef, blog).finally(() => {
      console.log('Blog added');
    });
  }

}
