import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from 'src/app/components/title/title.component';
import { DemoMaterialModule } from '../../material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ForgotPasswordComponent, 
        TitleComponent 
      ],
      imports: [
        DemoMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldShow_descriptionFor_ForgotPasswordPage_in_h1Tag', () => {
    const de = fixture.debugElement.query(By.css('h1'));
    expect(de.nativeElement.textContent).toEqual('Forgot Password');
  });

  it('givenTheForm_whenTested_shouldShowTitle', ()=> {
    const de = fixture.debugElement.query(By.css('app-title'));
    expect(de.nativeElement.textContent).toEqual('FundooNotes');
  });
});
