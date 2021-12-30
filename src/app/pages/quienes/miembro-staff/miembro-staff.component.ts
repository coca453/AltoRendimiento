import { Component, Input } from '@angular/core';

@Component({
  selector: 'ar-miembro-staff',
  templateUrl: './miembro-staff.component.html',
  styleUrls: ['./miembro-staff.component.css']
})
export class MiembroStaffComponent {

  @Input() miembroStaffData;
  
}
