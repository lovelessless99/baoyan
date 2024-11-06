import { Injectable } from '@angular/core';
import { Video } from '../../models/video_item';
import { CourseDbService } from '../course_db/course-db.service';
interface Course_dict {
    [key: string]: Video[];
}


@Injectable({
    providedIn: 'root'
})


export class WebdataService {
     
    public myData: any;

    private course: Course_dict = {};
    // private course: Course_dict = {
    //     "大乘起信論": [
    //         { title: "大乘起信論第一集(上)", video_id: "wPGuGXTs75I" },
    //         { title: "大乘起信論第一集(下)", video_id: "DSboF3McjiA" },
    //         { title: "大乘起信論第二集(上)", video_id: "YsLb69JGofA" },
    //         { title: "大乘起信論第二集(下)", video_id: "NBu-u9yqHfs" },
    //         { title: "大乘起信論第三集(上)", video_id: "qFpCSxgbak4" },
    //         { title: "大乘起信論第三集(下)", video_id: "QMyBYg2MfFY" },
    //         { title: "大乘起信論第四集(上)", video_id: "GrGwkkWybVY" },
    //         { title: "大乘起信論第四集(下)", video_id: "aNArOLl4axA" },
    //     ],

    //     "唯識學專題": [
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 01", video_id: "SFYBaEUTjMc" },
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 02", video_id: "qKbtS9Cgf68" },
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 03", video_id: "IehR9d1L3LQ" },
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 04", video_id: "RvTm-dm3k1k" },
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 05", video_id: "paa-p7eEsyA" },
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 06", video_id: "wQHoyYS819U" },
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 07", video_id: "aT4z4bkCSow" },
    //         { title: "【心意識轉化禪修營 以唯識心理學為機轉】心意識的運作模式 08", video_id: "Ougo8AYk3kA" },
    //     ]
    // };

    private course_name: string = "";

    constructor(private courseDbService: CourseDbService) {
        this.courseDbService.firebaseData$.subscribe(data => {
            this.myData = data; // 更新 Service A 中的變數
            console.log('Service A received updated data:', this.myData);

            for (const [key, value] of Object.entries(data)) {
                const item = value as { "title": string; "playlist_cover": any[]; "video_list": any[] };

                const title: string = key;
                const video_list = item["video_list"].map(item => ({ "title": item.name, "video_id": item.id }));
                this.course[title] = video_list;
            }
        });
    }

    get course_list(): Video[] {
        return this.course[this.course_name];
    }

    get name(): string {
        return this.course_name;
    }

    set name(newName: string) {
        if (newName.length > 0) {
            this.course_name = newName;
        } else {
            console.log('Name cannot be empty');
        }
    }
}
