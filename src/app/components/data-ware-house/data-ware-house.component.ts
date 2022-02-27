import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-ware-house',
  templateUrl: './data-ware-house.component.html',
  styleUrls: ['./data-ware-house.component.scss']
})
export class DataWareHouseComponent implements OnInit {

  active: any;
  subMenuToggle: any;

  dataWare: any = [
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'Traffic',
      srcIP: '10.34.15.5',
      srcName: 'OZZPDC',
      dstIP: '10.34.18.5',
      dstUser: 'okan.emecen',
      service: 'LDAP',
      OSName: 'Windows',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'Traffic',
      srcIP: '10.34.15.5',
      srcName: 'OZZPDC',
      dstIP: '10.34.18.5',
      dstUser: 'okan.emecen',
      service: 'LDAP',
      OSName: 'Windows',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'Traffic',
      srcIP: '10.34.15.5',
      srcName: 'OZZPDC',
      dstIP: '10.34.18.5',
      dstUser: 'okan.emecen',
      service: 'LDAP',
      OSName: 'Windows',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'Traffic',
      srcIP: '10.34.15.5',
      srcName: 'OZZPDC',
      dstIP: '10.34.18.5',
      dstUser: 'okan.emecen',
      service: 'LDAP',
      OSName: 'Windows',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'Traffic',
      srcIP: '10.34.15.5',
      srcName: 'OZZPDC',
      dstIP: '10.34.18.5',
      dstUser: 'okan.emecen',
      service: 'LDAP',
      OSName: 'Windows',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'Traffic',
      srcIP: '10.34.15.5',
      srcName: 'OZZPDC',
      dstIP: '10.34.18.5',
      dstUser: 'okan.emecen',
      service: 'LDAP',
      OSName: 'Windows',
      actions: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  showActive() {
    this.active =!this.active;
  }

  toggleMenu(event: any) {
    event.target.value = this.subMenuToggle;

    if (event.target.value == this.subMenuToggle) {
      this.subMenuToggle = !this.subMenuToggle;
    }
  }

}
