import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:any
  submitted:boolean=false;
  constructor(private fromBuilder:FormBuilder, private userService:UserService, private router:Router) { 
    this.loginForm = this.fromBuilder.group({
      emailAddress:['',Validators.required],
      password:['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.userService.getAllUser().subscribe((data:any)=>{
      this.user = data
      console.log("Successfully fetched the data",data);
    })
  }

  login()
  {
    this.submitted = true;
    if(this.loginForm.invalid)
    {
      return
    }

    let emailAddress = this.loginForm.value.emailAddress;
    let password = this.loginForm.value.password;
    let res = this.user.filter((user:any)=>{
      return (emailAddress == user.emailAddress && password==user.password)
    })
    if(res.length>0){
      alert("Login Sucessfully")
      this.router.navigate(['/content'])
    }
    else{
      alert("User or Password is incorrect")
    }

    

    
  }

  get f(){
    return this.loginForm.controls
  }

}
