import {
  Component,
  OnInit,
} from '@angular/core';
import {menu} from "../../shared/model/components/header.model";
import {Menu} from "../../shared/model/components/header.model";
import {MediaService} from "../../shared/api/main/media.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss'],
})

export class HomeComponent implements OnInit {
  public menu: Menu[] = menu;
  constructor() {

  }

  ngOnInit() {
  }


}
