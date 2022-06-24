import { Component, OnInit } from '@angular/core';
import { faLeaf, faWorm, faSeedling, faReceipt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faLeaf=faLeaf;
  faWorm=faWorm;
  faSeedling=faSeedling;
  faReceipt=faReceipt;

  ngOnInit(): void {
  }

}
