import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Person } from './../../interfaces/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  do: String = "insert"
  position: any = 0

  contacts: Array<Person> = []

  contact: Person = {
        name: "",
        surnames: "",
        age: "",
        dni: "",
        birthday: "",
        favouriteColour: "",
        sex: ""
  }

  sexs = [
    { id: 'Hombre', value: 'Hombre' },
    { id: 'Mujer', value: 'Mujer' },
    { id: 'Otro', value: 'Otro' },
    { id: 'No especificado', value: 'No especificado' }
  ];


  constructor() { }

  ngOnInit(): void {}

  add( form : NgForm ){
    if( this.do === 'insert' ){

      let birthDate  = new Date(this.contact.birthday);
      let day = birthDate.getDay();
      let month = birthDate.getMonth();
      let year = birthDate.getFullYear();
      let ageNum = parseInt(this.contact.age)
      let name = this.contact.name;
      let surnames = this.contact.surnames;
      let favouriteColour = this.contact.favouriteColour;
      let sex = this.contact.sex;

      this.contact.birthday = `${day}/${month}/${year}`

      if(ageNum > 0 && ageNum <= 125){
      this.contacts.push( this.contact )
      } //Edad entre 0 - 125

      this.contact = {
        name: "",
        surnames: "",
        age: "",
        dni: "",
        birthday: new Date(),
        favouriteColour: "",
        sex: ""
      }

    }else{
      this.contacts[ this.position ] = this.contact
      this.do = 'insert'
    }
    form.resetForm()
  }

  delete( delPosition : number )    : void {
    this.contacts.splice( delPosition , 1 )
  }
  update( upPosition : number ) : void {
    this.contact  = this.contacts[ upPosition ];
    this.do   = 'update'
    this.position = upPosition
  }
}
