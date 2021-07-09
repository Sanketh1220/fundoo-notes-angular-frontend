import { RouterTestingModule } from '@angular/router/testing';
import { TitleComponent } from 'src/app/components/title/title.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';


import { DashboardComponent } from './dashboard.component';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { SearchComponent } from '../search/search.component';
import { DemoMaterialModule } from 'src/app/material.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        TitleComponent,
        SideNavigationComponent,
        SearchComponent
      ],
      imports: [
        RouterTestingModule,
        DemoMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('givenTheForm_whenTested_shouldShowTitle', ()=> {
    const de = fixture.debugElement.query(By.css('app-title'));
    expect(de.nativeElement.textContent).toEqual('FundooNotes');
  });

  it('sideMenuProperty_toBeFalse', () => {
    expect(component.isMenuOpen).toBe(false)
  });

  it('functionWhenClicked_shouldReturnTrue', () => {
    component.toggle()
    expect(component.isMenuOpen).toBeTrue()
  })
});
