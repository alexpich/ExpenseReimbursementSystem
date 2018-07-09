import { Pipe, PipeTransform } from '@angular/core';
import { Reimbursement } from './models/Reimbursement';

@Pipe({
  name: 'filterPipe',
  pure: false
})

export class FilterPipePipe implements PipeTransform {

  transform(tickets: Reimbursement[], category: number): Reimbursement[] {
    if (category === 0) { return tickets } else {
      return tickets.filter(ticket => {
        return ticket.reimb_status_id === category;
      });
    }
  }
}

