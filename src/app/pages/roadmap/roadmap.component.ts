import { Component, Input, OnInit  } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';


// ngmodel
import { FormsModule } from '@angular/forms';

// ngfor
import { CommonModule } from '@angular/common';

// pipe
import { NgArrayPipesModule } from 'ngx-pipes';


import { Router } from '@angular/router';

import { WebdataService } from '../../services/web_data/webdata.service';
import { SharedService } from '../../services/shared/shared.service';
import { CourseDbService } from './../../services/course_db/course-db.service';
@Component({
    selector: 'app-roadmap',
    standalone: true,
    imports: [NzLayoutModule, NzCardModule, FormsModule, CommonModule, NzGridModule, NzInputModule, NgArrayPipesModule],
    templateUrl: './roadmap.component.html',
    styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent implements OnInit {
    
    // 定義儲存結果的陣列
    cards_items: Array<{ "image_url": any; "title": any; "content": string}> = [];
    isLoading = true;

    private data: any;
    constructor(private router: Router,
                private webdataService: WebdataService,
                private sharedService: SharedService,
                private courseDbService: CourseDbService,
    ) {
       
    }

   
    @Input() searchText: string = '';

    ngOnInit(): void {
        this.courseDbService.getAllData().subscribe(
            data => {
                this.data = data;
                console.log("data", this.data);
              
                for (const [key, value] of Object.entries(data)) {
                    const item = value as { "title": string; "playlist_cover": any[]; "video_list": any[] };

                    const title: string = key;
                    const playlistCover = item.playlist_cover;
                    
                    const cover = playlistCover.reduce((prev, current) => {
                        return (current.height > prev.height) ? current : prev;
                    });

                    this.cards_items.push({"title": title, "image_url": cover.url, "content": ""});
                }

                console.log("item is", this.cards_items);
                this.isLoading = false;
            }
        )
    }
    // cards_items = [
    //     { title: "大乘起信論", content: "馬鳴菩薩經典之作", image_url: "https://i.ytimg.com/vi/FdiXKSfihpc/mqdefault.jpg" },
    //     { title: "秒懂楞嚴", content: "破妄顯真的大經典", image_url: "https://d3mww1g1pfq2pt.cloudfront.net/Avatar/ckoebnfr1f8j10973cx577g5a/1620651305995.jpg" },
    //     { title: "六祖壇經", content: "慧能大師的頓悟法門", image_url: "https://i.ytimg.com/vi/10pxW9VJuns/hqdefault.jpg" },
    //     { title: "瑜伽師地論", content: "唯識學派的三大重要思想", image_url: "https://i.ytimg.com/vi/ToCNQT6rq9k/hqdefault.jpg" },
    //     { title: "唯識學專題", content: "深度認識自己的法門", image_url: "https://i.ytimg.com/vi/117UXMcm7-E/hqdefault.jpg" },
    //     { title: "華嚴經", content: "最富貴的大經典", image_url: "https://images.chinatimes.com/newsphoto/2020-09-17/656/20200917002956.jpg" },
    // ];

    goToAbout(course_name: string) {
        this.sharedService.setSelectedMenu(course_name);
        this.webdataService.name = course_name;
        this.router.navigate(['/welcome', course_name]);  // 導航到 /about 路徑
    }

}
