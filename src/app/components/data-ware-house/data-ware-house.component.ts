import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-data-ware-house',
  templateUrl: './data-ware-house.component.html',
  styleUrls: ['./data-ware-house.component.scss'],
})
export class DataWareHouseComponent implements OnInit {
  active: any;
  subMenuToggle: any;
  showData:any;
  filterForm: FormGroup;
 
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
  
  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filters: this.fb.array([this.fb.control(null)]),
    });
  }

  ngOnInit(): void {}

  showActive() {
    this.active = !this.active;
  }

  isShowData(){
    this.showData = !this.showData;
  }

  toggleMenu(event: any) {
    event.target.value = this.subMenuToggle;

    if (event.target.value == this.subMenuToggle) {
      this.subMenuToggle = !this.subMenuToggle;
    }
  }

  total = 0;
  addFilter(): void {
    if (this.total < 3) {
      (this.filterForm.get('filters') as FormArray).push(this.fb.control(null));
      this.total++;
    } else {
      console.log('Stop');
    }
  }

  getFiltersFormControls(): AbstractControl[] {
    return (<FormArray>this.filterForm.get('filters')).controls;
  }
}
