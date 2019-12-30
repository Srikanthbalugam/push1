import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { timer } from 'rxjs';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
   httpData: any;
   RawData:any;
 
  details: any;
  //data1;
  //result: any;
  constructor(private http:HttpClient,private Data:TaskService){
    // const source = timer(0, 1000)
    // const x = source.subscribe(val => {
    //   this.http.get("https://reqres.in/api/users?page=2").subscribe(data1=>{
    //   this.httpData=data1['data'];
    //   console.log(this.httpData)
    // })
    
    // })
    var a=timer(0,10000)
    var x=a.subscribe(val=>{
      this.Data.getData().subscribe(data1=>{
        this.httpData=data1['data'];
        console.log(this.httpData)
      })
    })
  }
       get(b)
  {
    this.details=b
  }
 
 
}

