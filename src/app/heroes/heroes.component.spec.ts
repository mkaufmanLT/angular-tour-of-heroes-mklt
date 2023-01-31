import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {Observable} from 'rxjs';

class MockHeroService {
  heroes  = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombast' },
    ]

  getHeroes = new Observable<Hero[]>;
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [ { provide: HeroService, useClass: MockHeroService} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    heroService = TestBed.inject(HeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
