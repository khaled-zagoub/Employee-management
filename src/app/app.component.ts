import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Content } from './models/response';
import { Employee } from './models/Employee';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app';
  idIndex : number = 25;
  employee : Employee;
  

  //Material table columns
  displayedColumns: string[] = ['number', 'name', 'salary', 'age', 'action'];
  //Table Data Source
  dataSource: MatTableDataSource<Employee>;
  //Dynamic Data Variable
  content:Content;
  constructor(private http: HttpClient){
    this.employee = new Employee (this.idIndex, "", null, null, "");
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }


  deleteEmployee(index: number){
    this.content.data.splice(index, 1);
    this.updateDataSource();
  }

  updateDataSource() {
    this.dataSource = new MatTableDataSource<Employee>(this.content.data);
    this.dataSource.paginator = this.paginator;
  }

  addNew(){
    this.content.data.push(this.employee);
    console.log(this.content.data);
    this.updateDataSource();
    this.employee = {
      id : this.idIndex + 1,
      employee_name : "",
      employee_salary : null,
      employee_age : null,
      profile_image : ""
  };
 
 }

  ngOnInit() {
       //get request from web api and this web api is totaly free to use
       this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe( res => {
       this.content = ( res as Content );
     
        //Data Table Data Source and pagination with dynamic data
        this.dataSource = new MatTableDataSource<Employee>(this.content.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        }, error => console.error(error));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
 }

 public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

  

}
