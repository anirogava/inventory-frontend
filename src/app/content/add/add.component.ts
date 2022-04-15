import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Address, Inventory, InventoryResult } from '../content.model';
import { CustomValidator } from '../custom.validator';
import { storeService } from '../services/store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  address = Address;
  form: FormGroup = new FormGroup({});
  usersList: InventoryResult[] = [];

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: storeService,
    private auth: AuthService
  ) {
    {
      this.form = fb.group({
        number: ['', [CustomValidator.numeric]],
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: [Address.Choose, Validators.required],
      price: ['', Validators.required],
    });
  }
  private formReset() {
    this.form.reset();
    this.form.updateValueAndValidity();

    this.submitted = false;

    this.form.get('name')?.setValue('');
    this.form.get('price')?.setValue('');
    this.form.get('Adress')?.setValue('');
  }
  submit(value: Inventory) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.service
      .postData({ ...this.form.value, userId: this.auth.User?.id })
      .subscribe((res) => {
        console.log('წარმატებით გაიგზავნა');
      });
  }

  ngOnInit() {
    this.buildForm();
  }
}
