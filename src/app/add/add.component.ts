import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {contact} from '../contact.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  searchForm: FormGroup;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.searchForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }
}