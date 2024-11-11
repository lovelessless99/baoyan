import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { WebdataService } from './services/web_data/webdata.service';
import { SharedService } from './services/shared/shared.service';
import { SidebarService } from './services/sidebar/sidebar.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Router } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzTagModule, NzModalModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
    isCollapsed = false;
    selectedMenu: string = "";
    sidebarItems$: any;

    constructor(private router: Router,
        private webdataService: WebdataService,
        private sharedService: SharedService,
        private sidebarService: SidebarService,
        private nzMessageService : NzMessageService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.sidebarItems$ = this.sidebarService.sidebarItems$;
    }   

    ngOnInit(): void {
        this.sharedService.selectedMenu$.subscribe(menu => {
            this.selectedMenu = menu;
        });
    }

    gohome() {
        // highlight
        this.sharedService.setSelectedMenu("home");

        // 然後導航到目標 component
        this.router.navigate(['/roadmap']);
    }

    removeSidebarItem(name: string): void {
        this.sidebarService.removeItem(name);
    }


    onMenuItemClick(value: string) {

        // highlight
        this.sharedService.setSelectedMenu(value);

        // 先將選中的項目設置到 service 中
        this.webdataService.name = value;

        // 然後導航到目標 component
        this.router.navigate(['/welcome', value]);
    }

    confirm(name: string): void {
        this.nzMessageService.info('移除此項目');
        const currentItems = this.sidebarService.getCurrentItems();;
        const removedItemIndex = currentItems.findIndex((item: { name: string; }) => item.name === name);
        const nextItem = currentItems[removedItemIndex + 1] || currentItems[removedItemIndex - 1];
        this.sidebarService.removeItem(name);
        
        console.log("next item: ", nextItem);

        if (nextItem) {
            this.router.navigate(['/welcome', nextItem["name"]]);
        }
        else {
            this.router.navigateByUrl('/roadmap').then(
                success => {
                  if (success) {
                    console.log('導航成功');
                    console.log('当前路径:', this.router.url);
                    this.changeDetectorRef.detectChanges();
                  } else {
                    console.log('導航失敗');
                  }
                },
                error => {
                  console.error('導航過程中出現錯誤:', error);
                }
              );
        }

    }

}
