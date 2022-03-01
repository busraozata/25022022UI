import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-data-ware-house',
  templateUrl: './data-ware-house.component.html',
  styleUrls: ['./data-ware-house.component.scss'],
})
export class DataWareHouseComponent implements OnInit {
  sidebarActive: any;
  showData: any;
  filterForm: FormGroup;
  page = 1;
  pageSize = 7;
  visibleIndex = -1;
  inputTotal = 0;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filters: this.fb.array([this.fb.control(null)]),
    });
  }

  ngOnInit(): void {}

  sidebarData: any = [
    {
      icon: 'bi bi-window-sidebar',
      listName: 'Dashboard',
      subStatus: '',
    },
    {
      icon: 'bi bi-laptop',
      listName: 'Products',
      subStatus: 'fa fa-angle-down',
      subNames: [
        {
          icon: 'bi bi-bag-plus-fill',
          listName: 'Added Products',
        },
        {
          icon: 'bi bi-plus-circle',
          listName: 'New Product',
        },
        {
          icon: 'bi bi-bag',
          listName: 'Supported Devices',
        },
      ],
    },
    {
      icon: 'bi bi-exclamation-diamond',
      listName: 'Reports',
      subStatus: 'fa fa-angle-down',
      subNames: [
        {
          icon: 'bi bi-exclamation-diamond',
          listName: 'Created Reports',
        },
        {
          icon: 'bi bi-plus-lg',
          listName: 'New Report',
        },
        {
          icon: 'bi bi-clock-history',
          listName: 'Update Reports',
        },
        {
          icon: 'bi bi-trash',
          listName: 'Delete Reports',
        },
        {
          icon: 'bi bi-clock-history',
          listName: 'Report Histories',
          doublesubNames: [
            {
              icon: 'bi bi-clock-history',
              listName: 'Report Results',
            },
          ],
        },
      ],
    },

    {
      icon: 'bi bi-file-earmark-zip',
      listName: 'Compression',
      subStatus: 'fa fa-angle-down',
      subNames: [
        {
          icon: 'bi bi-check-all',
          listName: 'Check Compression Status',
        },
        {
          icon: 'bi bi-plus-circle',
          listName: 'Create Custom Compression',
        },
      ],
    },

    {
      icon: 'fa fa-database',
      listName: 'Data Warehouse',
      subStatus: '',
    },
    {
      icon: 'bi bi-box-arrow-in-right',
      listName: 'Login Activities',
      subStatus: '',
    },

    {
      icon: 'bi bi-door-open-fill',
      listName: 'System Logs',
      subStatus: '',
    },
  ];

  chartData: any = [
    { label: '', value: 1 },
    { label: '', value: 4 },
    { label: '', value: 2 },
    { label: '', value: 6 },
    { label: '', value: 9 },
    { label: '', value: 3 },
    { label: '', value: 10 },
  ];

  dataWare: any = [
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'traffic',
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
      type: 'utm',
      srcIP: '10.34.15.5',
      srcName: 'halit.ozer',
      dstIP: '10.34.18.5',
      dstUser: 'ugur.aslan',
      service: 'UDP/443',
      OSName: 'IOS',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'traffic',
      srcIP: '10.34.15.5',
      srcName: 'ozen.ozer',
      dstIP: '10.34.18.5',
      dstUser: 'dogukan.ilgaz',
      service: 'TCP/514',
      OSName: 'Android',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'traffic',
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
      type: 'traffic',
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
      type: 'traffic',
      srcIP: '10.34.15.5',
      srcName: 'ozen.ozer',
      dstIP: '10.34.18.5',
      dstUser: 'dogukan.ilgaz',
      service: 'TCP/514',
      OSName: 'Android',
      actions: '',
    },
    {
      date: '2022-02-22',
      time: '19:53:31',
      type: 'traffic',
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
      type: 'traffic',
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
      type: 'traffic',
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
      type: 'traffic',
      srcIP: '10.34.15.5',
      srcName: 'OZZPDC',
      dstIP: '10.34.18.5',
      dstUser: 'okan.emecen',
      service: 'LDAP',
      OSName: 'Windows',
      actions: '',
    },
  ];

  tabMenuData: any = [
    {
      title: 'All time',
    },
    {
      title: 'This year',
    },
    {
      title: 'This week',
    },
    {
      title: 'Today',
    },
  ];

  addFilter(): void {
    if (this.inputTotal < 3) {
      (this.filterForm.get('filters') as FormArray).push(this.fb.control(null));
      this.inputTotal++;
    } else {
      console.log('Stop');
    }
  }

  getFiltersFormControls(): AbstractControl[] {
    return (<FormArray>this.filterForm.get('filters')).controls;
  }

  showSubItem(i: any) {
    if (this.visibleIndex === i) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = i;
    }
  }

  showSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  isShowData() {
    this.showData = !this.showData;
  }
}
