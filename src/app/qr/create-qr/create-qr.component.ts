import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QrService } from '../qr-service';


@Component({
  selector: 'app-create-qr',
  templateUrl: './create-qr.component.html',
  styleUrls: ['./create-qr.component.css']
})
export class CreateQrComponent implements OnInit {

  constructor(public qrService: QrService) { }

  customFields = [];
  qrText = '';

  mapLabels(tempForm: object, labels: any) {

    for (let i = 0; i < labels.length; i++) {

      tempForm[labels[i].innerHTML] = tempForm[i];
      delete tempForm[i];
    }

    this.qrText = JSON.stringify(tempForm);
    console.log(this.qrText);
    this.qrService.createQr(tempForm);
  }




  onQrFormSubmit(form: NgForm) {
    const labels = document.getElementsByClassName('custom-label');
    const tempForm = form.value;
    this.mapLabels(tempForm, labels);
  }

  onAddCustomField() {
    this.customFields.push(1);
  }

  onRemoveCustomField() {
    this.customFields.splice(this.customFields.length - 1);
  }

  ngOnInit() {
  }

}
