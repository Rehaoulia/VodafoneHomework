import { Component, OnInit } from '@angular/core';
import contacts from '../../db.json';
import { FormBuilder } from '@angular/forms';
import {contact} from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit { 

  searchForm;
  selectedLetter : String;
  contacts: contact[];
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.contacts = contacts;
    this.selectedLetter = "";
    this.searchForm = this.formBuilder.group({
      name: ''
    });
   }
  ngOnInit(): void {
  }
  

  searchLetter(letter : String) {
    if(this.selectedLetter == letter){
      this.contacts = contacts;
      this.selectedLetter = "";
    }else{
    this.contacts = [];
      for ( let element of contacts) {
        if(element.name.charAt(0) == letter){
          this.contacts.push(element);
        }
      }
      this.selectedLetter = letter;
    }
  }

  onSubmit(){
    this.contacts = []
    for(let element of contacts) {
      if(element.name.toLowerCase().includes(this.searchForm.get('name')?.value.toLowerCase())) {
        this.contacts.push(element);
      }else if(this.searchForm.get('name')?.value == '') {
        this.contacts = contacts;
      }
    }
  }
  openProfile(id:number){
    this.router.navigate(['/profile'], {state : {data : {id : id}}});
  }
}

