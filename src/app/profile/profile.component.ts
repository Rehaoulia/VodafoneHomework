import { Component, OnInit } from '@angular/core';
import contacts from '../../db.json'
import { FormBuilder } from '@angular/forms';
import { contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  searchForm;
  name : string;
  email : string;
  phone : string;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.searchForm = this.formBuilder.group({
      name: ''
    });
    let name = '';
    let phone = '';
    let email = ''
    for (let element of contacts){
      if (element.id == history.state.data.id){
        name = element.name;
        email = element.email;
        phone = element.phone;
      }
    }
    this.name = name; 
    this.email  = email;
    this.phone = phone;
   }

  ngOnInit(): void {
  }

  openEdit(){
    this.router.navigate(['/edit'], {state : {data : {id : history.state.data.id}}});
  }

}
