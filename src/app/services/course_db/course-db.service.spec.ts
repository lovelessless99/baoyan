import { TestBed } from '@angular/core/testing';

import { CourseDbService } from './course-db.service';

describe('CourseDbService', () => {
  let service: CourseDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
