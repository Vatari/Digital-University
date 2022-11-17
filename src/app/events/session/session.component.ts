import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  declare words: ['foo', 'bar'];

  newSessionForm!: UntypedFormGroup;
  name!: any;
  presenter!: any;
  duration!: any;
  level!: any;
  abstract!: any;

  session!: ISession;

  constructor() {}

  ngOnInit() {
    this.name = new UntypedFormControl('', Validators.required);
    this.presenter = new UntypedFormControl('', Validators.required);
    this.duration = new UntypedFormControl('', Validators.required);
    this.level = new UntypedFormControl('', Validators.required);
    this.abstract = new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(400),
      //restrictedWords(this.words),   ----> TODO
    ]);

    this.newSessionForm = new UntypedFormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues: any) {
    this.session = {
      id: undefined!,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: [],
    };
    this.saveNewSession.emit(this.session);
  }
}
