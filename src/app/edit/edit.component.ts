import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import contacts from '../../db.json'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  name : string;
  email : string;
  phone : string;
  searchForm: FormGroup;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
    this.editForm =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
