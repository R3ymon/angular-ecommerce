import { Component, inject, signal, SimpleChanges } from '@angular/core';


import { ProductComponent } from '../../../products/components/product/product.component';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ProductComponent,
    RouterLinkWithHref,
    RouterLinkActive
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true); //esconder carrito por defecto
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    ///desplegar el carrito por medio de click
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
