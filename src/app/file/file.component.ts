import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  form: FormGroup;
  headers: any;

  constructor(public fb: FormBuilder, private http: HttpClient,private router:Router) {
    this.form = this.fb.group({
      mobilenumber:['9856985698'],
      firstname:['DILBAHAR'],
      middlename:['SINGH'],
      lastname:['ARORA'],
      pan:['AZEPD6246N'],
      fathername:['Subrahmanya Sharma'],
      dob:['01062001'],
      email:['ramashankar.darivemula@jocata.com'],
      gender:['M'],
      pincode:['500043'],
      city:['HYDERABAD'],
      state:['Telangana']


    });
   }

  ngOnInit(): void {
  }
  submitForm():void {
    var formData: any = new FormData();
    // console.log(this.form.get('city')?.value+"i am hero----")
    formData.append('mobilenumber', this.form.get('mobilenumber')?.value);
    formData.append('firstname', this.form.get('firstname')?.value);
    formData.append('middlename', this.form.get('middlename')?.value);
    formData.append('lastname', this.form.get('lastname')?.value);
    formData.append('pan', this.form.get('pan')?.value);
    formData.append('fathername', this.form.get('fathername')?.value);
    formData.append('dob', this.form.get('dob')?.value);
    formData.append('email', this.form.get('email')?.value);
    formData.append('gender', this.form.get('gender')?.value);
    formData.append('pincode', this.form.get('pincode')?.value);
    formData.append('city', this.form.get('city')?.value);
    formData.append('state', this.form.get('state')?.value);


    // var object = {};
    // formData.forEach(function(value: String, key: String){
    // object[key]=value;
    let myMap = new Map<string, string>();
    formData.forEach(function(value: string, key: string){
      myMap.set(key,value);
      // console.log(myMap.get(key));
});
// console.log(JSON.stringify(myMap));
var obj = Object.fromEntries(myMap);

    var json = JSON.stringify(obj);
  console.log(json);
    this.http
      .post('http://localhost:8080/tcl/customer/saveCustomerDetails', json ,{headers: { 'Content-Type': 'application/json'},})
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

      this.router.navigate(['/Register']);  
  }

}
