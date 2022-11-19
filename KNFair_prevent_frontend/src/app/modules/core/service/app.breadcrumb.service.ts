import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable()
export class AppBreadcrumbService {


    private itemsSource = new Subject<MenuItem[]>();
    private items: MenuItem[] = [];
    itemsHandler = this.itemsSource.asObservable();

    setItems(items: MenuItem[]) {
        this.items = items;
        this.itemsSource.next(items);
    }

    addItem(item: MenuItem) {
        const foundIndex = this._foundItemIndex(item);
        this._updateItems(item, foundIndex);
        this.itemsSource.next(this.items);
    }

    private _foundItemIndex(item: MenuItem) {
        let foundIndex = -1;
        for (let i = 0; i < this.items.length - 1; i++) {
            const temp = this.items[i];
            if (temp.label === item.label){
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }

    private _updateItems(item: MenuItem, foundIndex: number) {
        if (foundIndex >= 0) {
            this.items = this.items.slice(0, foundIndex + 1);
        } else {
            this.items.push(item);
        }
    }

}
