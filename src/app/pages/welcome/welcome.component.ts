import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    PLATFORM_ID,
    Inject,
    Input,
} from '@angular/core';
import { YouTubePlayer, YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms'; // 需要 ngModel
import { CommonModule, isPlatformBrowser } from '@angular/common'; // pipe
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Video } from '../../models/video_item';
import { WebdataService } from '../../services/web_data/webdata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [
        YouTubePlayer,
        NzButtonModule,
        NzSliderModule,
        FormsModule,
        CommonModule,
        NzLayoutModule, NzMenuModule
    ],
    providers: [
        {
            provide: YOUTUBE_PLAYER_CONFIG,
            useValue: {
                disablePlaceholder: true,
            },
        },
    ],
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})


export class WelcomeComponent implements OnInit, AfterViewInit {
    videoDuration: number = 0; // 視頻總時長
    currentTime: number = 0; // 當前播放時間
    isBrowser: boolean = true;

    @Input() video_id: string = 'wPGuGXTs75I';
    isCollapsed = true;

    videoList: Video[] = [];
    param: string = '';

    constructor(@Inject(PLATFORM_ID) platformId: Object, private webdataService: WebdataService, private route: ActivatedRoute) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        // 監聽 input 參數，變的話頁面也會切換
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.param = params.get('param') || '';
            this.videoList = this.webdataService.course_list;
            this.video_id = this.videoList[0].video_id;
        });
    }
    @ViewChild(YouTubePlayer) player!: YouTubePlayer;

    playVideo() {
        this.player.playVideo();
    }

    pauseVideo() {
        this.player.pauseVideo();
    }

    ngAfterViewInit() {
        this.player.stateChange.subscribe((event) => {
            console.log('Player state changed:', event);
            if (event.data === YT.PlayerState.PLAYING) {
                this.videoDuration = this.player.getDuration();
                console.log('Video duration:', this.videoDuration);
            }
        });

        // is browser
        if (this.isBrowser) {
            setInterval(() => {
                if (this.player) {
                    this.currentTime = this.player.getCurrentTime();
                }
            }, 1000);
        }
    }

    onSliderChange(value: number): void {
        this.player.seekTo(value, true); // 跳轉到指定時間
    }

    onVideoClick(video_id: string): void {
        this.video_id = video_id;
    }
}
