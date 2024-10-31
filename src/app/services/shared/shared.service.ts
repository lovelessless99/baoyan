import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor() {}
    
    // 使用 BehaviorSubject 來共享選中的菜單項，初始值為空
    private selectedMenuSubject = new BehaviorSubject<string>('');
    selectedMenu$ = this.selectedMenuSubject.asObservable();  // 供其他 component 訂閱

    // 更新選中的菜單項
    setSelectedMenu(menu: string): void {
        this.selectedMenuSubject.next(menu);  // 發布新的菜單項
    }

    // 獲取當前的菜單項值
    getSelectedMenu(): string {
        return this.selectedMenuSubject.getValue();
    }

}
