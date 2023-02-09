import { TestBed } from '@angular/core/testing';

import { FetchviewcontentService } from './fetchviewcontent.service';

describe('FetchviewcontentService', () => {
  let service: FetchviewcontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchviewcontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
