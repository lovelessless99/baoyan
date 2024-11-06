import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { WebdataService } from './services/web_data/webdata.service';
import { SharedService } from './services/shared/shared.service';
import { SidebarService } from './services/sidebar/sidebar.service';
import { Router } from '@angular/router';




@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule,],
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
        private sidebarService: SidebarService
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
}
