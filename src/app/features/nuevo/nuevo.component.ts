import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
@Input() item : any;
@Input() titulo = "";
  constructor(private activeModal : NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.item)
  }


closeModal(){
  this.activeModal.close()
}

}
