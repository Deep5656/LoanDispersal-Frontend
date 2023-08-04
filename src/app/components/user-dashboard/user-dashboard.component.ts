import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users:any;
  userId:any;

  searchedTxt:String="";

  constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    },
    (error)=>{
      console.log(error);
    })
  }

 delete(id:any){
  Swal.fire({
    icon: 'warning',
    title: 'are you sure ?',
    confirmButtonText: 'Delete',
    showCancelButton: true,
  }).then((result)=>{
    if(result.isConfirmed){
      this.userService.deleteUser(id).subscribe((data)=>{
        console.log("deleted");
        window.location.reload();
      },(error:any)=>{
        console.log(error);
      });
    }
  });
  
 }

//  update(id:any){
//     this.userId = id;
//  }


}
