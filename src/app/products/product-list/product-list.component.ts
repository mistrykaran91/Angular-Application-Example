import { Component, ViewChild } from "@angular/core";
import { merge } from "rxjs";
import { switchMap, startWith, map } from "rxjs/operators";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material';
import { MatSort } from "@angular/material/sort";

import { Product, ProductResult } from "../product";
import { ProductService } from "../product.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent {
  public pageTitle = "Product List";

  displayedColumns: string[] = [
    "productCode",
    "productName",
    "price",
    "quantityInStock"
  ];
  // products: Product[] = [];
  totalCount: number = 0;
  public dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private productService: ProductService) { }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          const { active, direction } = this.sort;
          const pageIndex = this.paginator.pageIndex;

          return this.productService.getProducts(active, direction, pageIndex);
        }),
        map((data: ProductResult) => {
          this.totalCount = data.totalCount;
          return data.items;
        })
      )
      .subscribe((products: Product[]) => (this.dataSource.data = products));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (filterValue.length > 2 || filterValue.trim() === '') {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  }
}
