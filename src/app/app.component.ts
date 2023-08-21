import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AddNumberComponent } from './components/add-number.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild(AddNumberComponent)
  addNumComp!: AddNumberComponent

  value = 4

  router = inject(Router)
  
  ngOnInit(): void {
    //this.router.navigate(['/num', this.value ])
  }

  // using method from the component
  clearForm(){
    this.addNumComp.clearForm()
  }

  newNumber(value: number){
    console.info('>>> newNumber: ', value)
    this.value = value
    this.router.navigate(['/num', this.value])
  }
}

