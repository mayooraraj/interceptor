import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoaderService } from 'src/loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor';
  getdata:any;
  constructor(private http:HttpClient,  public loaderService: LoaderService)
  {
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe((res) =>{
      console.log(res);
      this.getdata=res;
      
    })
  }



}
