import { consultaAPI } from './consultaAPI.service';
import { TestBed, async, inject } from '@angular/core/testing';


describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [consultaAPI]
    });
  });

  it('should ...', inject([consultaAPI], (service: consultaAPI) => {
    expect(service).toBeTruthy();
  }));
});
