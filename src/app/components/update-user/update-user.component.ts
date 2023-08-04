import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  id:any;

  userData:any={
    name:'',
    age:'',
    amount:'',
    income:'',
    details:'',
    creditHistory:'',
  }
  constructor(private userService:UserService,private router:Router,private activeroute:ActivatedRoute){}
  ngOnInit(): void {
       this.id = this.activeroute.snapshot.params['id'];
       this.userService.getUser(this.id).subscribe((data)=>{
        this.userData = data;
       },(error)=>{
        console.log(error);
       })
  }
 

  updateForm(){
    this.id =  this.activeroute.snapshot.params['id'];
    this.userService.updateUser(this.userData,this.id).subscribe((data:any)=>{
      console.log(data);
      this.userData = data;
      this.router.navigate(['userdashboard']);
      console.log("Updated");
      },
      (error:any)=>{
        console.log(error);
        alert("something went wrong")
      })
   }

  



  

}
