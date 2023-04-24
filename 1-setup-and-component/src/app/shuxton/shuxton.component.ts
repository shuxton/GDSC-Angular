import { Component, OnInit } from '@angular/core';
import { SajidHusainPatilComponent } from '../sajid-husain-patil/sajid-husain-patil.component';

interface Participant {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'app-shuxton',
  templateUrl: './shuxton.component.html',
  styleUrls: ['./shuxton.component.css'],
})
export class ShuxtonComponent implements OnInit {
  //Add your name and link to the array below

  participants : Participant[]= [ 
  { id: 1, name: 'Shubham', link: 'shuxton' },
  { id: 2, name: 'Shubham NJ', link: 'shubham-nj' },
  { id: 3, name: 'Kartikeya Saini', link: 'kartikeya' },
  { id: 4, name: 'Meenakshi G Patil', link: 'meenakshi-gp' }, 
  { id: 5 ,name: 'Vinayak N M', link: 'vinayaknm'},
  { id: 6 ,name: 'Shivamrut G', link: 'shivamrutg'},
  { id: 7, name:'Yuktha', link: 'yukthaa'},
  { id: 8, name: 'Fathima' , link: 'fathima-al-zahra' },
  { id: 9, name: 'sajid' ,  link :'sajid-husain-patil'},
  { id: 10, name: 'Karthikeyan T' , link: 'karthikeyan-t'}
]

  constructor() {}

  ngOnInit(): void {}
}
