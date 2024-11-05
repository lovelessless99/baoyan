import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { app } from '../../../environments/environment';
import { ref, get } from "firebase/database";
import { getDatabase, query, limitToFirst, onValue } from "firebase/database";
import { BehaviorSubject, from, Observable, of  } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class CourseDbService {
    private course_db;
    private firebaseDataSubject = new BehaviorSubject<any>(null); // 初始化 BehaviorSubject
    public firebaseData$: Observable<any> = this.firebaseDataSubject.asObservable();
    
    // private dataPath: string = "-OATAINcM2gAJQwfV2Df";
    private dataPath: string = "global/-OAwJZ7NLxFuwHq1J7ox";

    getLimitedData(): Observable<any> {
        if (!this.course_db) {
          // 如果在伺服器端運行，返回空的 Observable
          return of(null);
        }
        const dataRef = ref(this.course_db, this.dataPath);
        const limitedQuery = query(dataRef, limitToFirst(6));
        return from(get(limitedQuery).then(snapshot => snapshot.val()));
    }

    getAllData(): Observable<any> {
        if (!this.course_db) {
          return of(null);
        }
    
        const dataRef = ref(this.course_db, this.dataPath);
        return from(get(dataRef).then(snapshot => snapshot.val()));
    }





    constructor(@Inject(PLATFORM_ID) private platformId: Object) {

        // 只在瀏覽器端初始化 Firebase (SSR)
        if (isPlatformBrowser(this.platformId)) {
            this.course_db = getDatabase(app);
            const dataRef = ref(this.course_db, this.dataPath);

            onValue(dataRef, snapshot => {
                const data = snapshot.val();
                this.firebaseDataSubject.next(data); // 更新 BehaviorSubject 的值
            });
        }
    }
}
