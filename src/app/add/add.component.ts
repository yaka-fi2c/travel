import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { IPersonDetails } from '../mock-data';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  @Input() addModalOpen: boolean;
  @Output() passNewPerson:EventEmitter<IPersonDetails> = new EventEmitter();
  @Output() close:EventEmitter<boolean> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      phone: ['', Validators.required],
      company: [''],
      role: [''],
      street: [''],

    })
  }

  onSubmit(){
    const newPerson: IPersonDetails = {
      name: this.form.get('name').value,
      profilePicSrc: 'john-smith.jpg',
      role: this.form.get('role').value,
      company: this.form.get('company').value,
      location: 'Riviera State 32/106',
      phone: this.form.get('phone').value,
    }
    this.passNewPerson.emit(newPerson)
    this.form.reset();
  }
  closePopup() {
    this.close.emit(false)
    this.form.reset();
  }
}
