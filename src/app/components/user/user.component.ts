import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{


  userData={
    name:'',
    age:'',
    amount:'',
    income:'',
    details:'',
    creditHistory:'',
  }
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
  
  }

  formSubmit(){
    console.log(this.userData);
    this.userService.addUser(this.userData).subscribe((data:any)=>{
      console.log('success');
      alert("User is Eligible for the loan");
      this.userData.age='';
      this.userData.name='';
      this.userData.amount='';
      this.userData.details='';
      this.userData.creditHistory='';
      this.userData.income='';

      this.router.navigate(['/userdashboard']);
    },
    (error:any)=>{
      console.log(error);
      alert("User is Not Eligible")
    });

    
  }

  
}
