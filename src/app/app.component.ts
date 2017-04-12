import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {EmployeeModel}  from './models/employee.model';



@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './app/forms/home.html'
})
export class AppComponent  {
  
   name = 'Angular2 JS'; 

   languages=['English' ,'Spanish', 'French'] ;
  
   employeeModel = new EmployeeModel('Hello' , 'World', true,true,'English','10/10/2001');

   isValidLang=false;


  fnGetName(lname:String)
   {
     // alert("Value is :" + lname.toUpperCase);

    //  employeeModel.lname=lname.toLocaleUpperCase.toString() ;
      
   }

   fnValidateLang(primaryLang:String)
   {
    // alert(primaryLang);
    console.log(primaryLang);
      if(primaryLang === 'default')
      {
        this.isValidLang=true;
      }else
      {
        this.isValidLang=false;
      }
          
   }


   fnSubmit(form:FormsModule)
   {
     console.log( form.Value );
     console.log( this.employeeModel);
     console.log( this.employeeModel.fname);
   }

}
