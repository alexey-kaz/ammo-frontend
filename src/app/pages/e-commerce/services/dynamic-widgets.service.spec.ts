import { TestBed } from '@angular/core/testing';

import { DynamicWidgetsService } from './dynamic-widgets.service';

describe('DynamicWidgetsService', () => {
  let service: DynamicWidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicWidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
