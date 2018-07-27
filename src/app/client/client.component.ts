import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Client } from '../POJO/client';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../POJO/survey';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 // @Output() onCreate: EventEmitter<Client>;
 // @Output() onSave : EventEmitter<Client>;
  private model : Client;
  private identifiant : String;
  private survey : Survey;

  constructor(private clientService : ClientService, private surveyService : SurveyService) { }

  ngOnInit() {
    this.model = new Client();
    this.surveyService.survey.subscribe((s) => this.survey= s);
    console.log(this.survey);  
		//this.onCreate = new EventEmitter();
	//	this.onSave = new EventEmitter();
  }

  newC(form: NgForm) {
    let data: Client = JSON.parse(JSON.stringify(this.model));
    this.clientService.createClient(data, this.survey);
      //this.onCreate.emit(data);
      form.resetForm;
    } 
    
    oldC(form: NgForm)  {
       // this.onSave.emit(identifiant);
      // this.clientService.createResponse();
        form.resetForm;
    } 

	}
