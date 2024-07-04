import { Component } from '@angular/core';
import { imageGridData  } from '../../config/home.config'
@Component({
  selector: 'rippler-home-container',
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent {
 
  gridData:any = imageGridData;

}
