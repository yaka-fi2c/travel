import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data-service.service';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  @Input() modalOpen: boolean;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  @Output() modalValues: EventEmitter<{name: string, phone: string, company: string, role: string}> = new EventEmitter();

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      phone: ['', Validators.required],
      company: [''],
      role: ['']
    })
  }

  closePopup() {
    this.closeModal.emit(false);
    this.form.reset();
  }

  onSubmit() {
    this.closeModal.emit(false);
    this.modalValues.emit(this.form.value)
    this.form.reset();
  }
}
