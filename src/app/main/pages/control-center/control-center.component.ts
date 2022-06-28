import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Role } from '../../_models/role';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth/auth.service';
import { ModalGlobalService } from '../../_services/modal-global/modal-global.service';

@Component({
  selector: 'app-control-center',
  templateUrl: './control-center.component.html',
  styleUrls: ['./control-center.component.scss']
})
export class ControlCenterComponent implements OnInit {

  user!: User | null;

  poz: number = 0;
  typeChartsettings: string = "Type Charts Settings";
  timeFrameSettings: string = "Time Frame Settings";
  accountSettings: string = "Account Settings";
  enviromentSettings: string = "Enviroment Settings";
  selectedTitle: string = "";

  constructor(
    private authService: AuthService,
    private modalService: NgbModal,
    public modalGlobalService: ModalGlobalService
  ) {
    this.authService.userSubject.asObservable().subscribe(data => {
      this.user = data
    })
  }

  get isUser() {
    return this.user && this.user.role === Role.User
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Admin
  }

  ngOnInit(): void {
  }

  openXl(poz: number, selectedTitle: string) {
    this.modalService.open(this.modalGlobalService.get("modalControlCenter"), { size: 'xl' });
    this.poz = poz;
    this.selectedTitle = selectedTitle;
  }

}
