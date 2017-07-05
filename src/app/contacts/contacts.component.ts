import {
    Component,
    OnInit
} from '@angular/core';


@Component({
    selector: 'contacts',
    styleUrls: ['./contacts.component.css'],
    templateUrl: './contacts.component.html'
})

export class ContactsComponent implements OnInit {

    public contacts: Object[];

    constructor(){};

    public ngOnInit(){
        this.contacts = [
            {
                name: 'John',
                lastName: 'Johnson',
                email: 'johnjohnson@gmail.com'
            },
            {
                name: 'Jane',
                lastName: 'Janeson',
                email: 'janejaneson@gmail.com'
            },
            {
                name: 'Ben',
                lastName: 'Benson',
                email: 'benbenson@gmail.com'
            }
        ]
    }
}