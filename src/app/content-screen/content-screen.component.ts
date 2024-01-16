import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-content-screen',
  templateUrl: './content-screen.component.html',
  styleUrls: ['./content-screen.component.css']
})
export class ContentScreenComponent implements OnInit {
  userTitle:any;
  constructor(private userService:UserService) { }
  allUserData:any;
  data:any;
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData()
  {
    this.userService.getUser().subscribe((allUser:any)=>{
      this.allUserData = allUser;
      this.data=allUser;
      this.allUserData=this.allUserData.slice(1,10)
      console.log(this.allUserData,'ALl user')
    },(error)=>{

    })
  }

  serachByTitle(searchString:any){
    console.log(searchString,'Searched Value')
    this.allUserData = this.data.filter((e:any)=>{
      return e?.title.includes(this.userTitle)== true
    })
  }

  changePage(item:any)
  {
    let page = item-1;
    page = page ==0?1:page
    console.log(page,'Page')
   this.allUserData = this.data.slice(page*10)
  }

}
