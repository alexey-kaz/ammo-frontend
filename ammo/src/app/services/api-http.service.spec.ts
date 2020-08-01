import { TestBed } from '@angular/core/testing';

import { ApiHttp } from './api-http.service';

describe('DataService', () => {
  let service: ApiHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
