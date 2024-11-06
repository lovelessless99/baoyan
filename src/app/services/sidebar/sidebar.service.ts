import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    private sidebarItems = new BehaviorSubject<Array<{ name: string }>>([]);
    sidebarItems$ = this.sidebarItems.asObservable();
    constructor() { }

    private idCounter = 0;

    // 添加項目，並指定路由
    addItem(name: string): void {
        const currentItems = this.sidebarItems.getValue();

        // 檢查是否已存在相同名稱和路徑的項目
        const itemExists = currentItems.some(item => item.name === name);

        if (!itemExists) {
            const newItem = { id: this.idCounter++, name, };
            this.sidebarItems.next([...currentItems, newItem]);
        }

    }

    // 移除項目
    removeItem(name: string): void {
        const updatedItems = this.sidebarItems.getValue().filter(item => item.name !== name);
        this.sidebarItems.next(updatedItems);
    }

}
