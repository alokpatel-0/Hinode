import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>){
     dialogRef.disableClose = true;  
    }
  
  

  ngOnInit(): void {}

  deleteCartData(): void {
    this.dialogRef.close('yes');
  }

  notDeleteCartData(){
    this.dialogRef.close('no')
  }

}
