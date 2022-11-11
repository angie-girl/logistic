import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-for-clients',
  templateUrl: './for-clients.component.html',
  styleUrls: ['./for-clients.component.scss']
})
export class ForClientsComponent {

  downloadPdf(fileUrl: string, fileName: string ) {
    FileSaver.saveAs(fileUrl, fileName);
  }
}
