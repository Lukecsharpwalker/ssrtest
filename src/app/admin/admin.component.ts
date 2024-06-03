import { Component } from '@angular/core';
import { SmallAdminComponent } from './small-admin/small-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SmallAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
