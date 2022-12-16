import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainpageComponent } from './user-mainpage.component';
import {PlayerComponent} from './../pages/player/player.component'
describe('UserMainpageComponent', () => {
  let component: UserMainpageComponent;
  let fixture: ComponentFixture<UserMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
