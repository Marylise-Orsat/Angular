import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesWritingComponent } from './messages-writing.component';

describe('MessagesWritingComponent', () => {
  let component: MessagesWritingComponent;
  let fixture: ComponentFixture<MessagesWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
