import { Component, OnInit } from '@angular/core';

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

  { id: 5 ,name: 'Shivamrut G', link: 'shivamrutg'},
  


  { id: 6 ,name: 'Shivamrut G', link: 'shivamrutg'},
  { id: 7, name:'Yuktha', link: 'yukthaa'},


  { id: 6 ,name: 'Shivamrut G', link: 'shivamrutg'},
  { id: 7, name:'Yuktha', link: 'yukthaa'},
  { id: 8, name: 'Fathima' , link: 'fathima-al-zahra' },


  { id: 6 ,name: 'Shivamrut G', link: 'shivamrutg'},
  { id: 7, name:'Yuktha', link: 'yukthaa'},
  { id: 8, name: 'Fathima' , link: 'fathima-al-zahra' }

]

  constructor() {}

  ngOnInit(): void {}
}
