import { TestBed } from '@angular/core/testing';

import { CardScreenService } from './card-screen.service';

describe('CardScreenService', () => {
  let service: CardScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
