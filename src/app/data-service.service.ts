import { Injectable } from "../../node_modules/@angular/core";
import { Subject } from '../../node_modules/rxjs';

@Injectable({providedIn: 'root'})

export class DataService {

formValues: Subject<any> = new Subject();

}
