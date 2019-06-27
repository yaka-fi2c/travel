import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPersonDetails, personsDetails } from '../mock-data';
import { DataService } from '../data-service.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy {
  personsData: IPersonDetails[];
  modalOpen: boolean;
  subscription: Subscription;
  personInd;
  addModalOpen = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.personsData = personsDetails.slice();
  }

  ngOnDestroy() {
  }

  onDeleteItem(i: number) {
    this.personsData.splice(i, 1);
  }

  onOpenEdit(i: number) {
    this.modalOpen = true;
    this.personInd = i;
    console.log(this.personInd)
  }

  onOpenAdd() {
    this.addModalOpen = true;
  }

  onAddPerson(data: IPersonDetails) {
     this.personsData.push(data);
     this.addModalOpen = false;
  }

  onEdit(data: {name: string, phone: string, company: string, role: string}) {
      this.personsData[this.personInd].name = data.name;
      this.personsData[this.personInd].phone = data.phone;
      this.personsData[this.personInd].company = data.company;
      this.personsData[this.personInd].role = data.role;
  }
}
