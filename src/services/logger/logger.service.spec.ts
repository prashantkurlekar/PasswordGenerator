import { TestBed, inject } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Service: LoggerService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
  });

  it('should initialize',
    inject([LoggerService], (service: LoggerService) => {
      expect(service).toBeTruthy();
    })
  );

});
