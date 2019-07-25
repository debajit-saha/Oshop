import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;
  constructor(private orderService: OrderService) { }

  async ngOnInit() {
    this.orders$ = await this.orderService.getOrders();
  }

  cancleOrder(o) {
    this.orderService.cancleOrder(o);
  }
}
