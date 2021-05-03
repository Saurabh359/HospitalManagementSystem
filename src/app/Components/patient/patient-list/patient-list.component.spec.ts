import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PatientListComponent } from './patient-list.component';

describe('PatientListComponent', () => {
  let component: PatientListComponent;
  let fixture: ComponentFixture<PatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialogModule, MatPaginatorModule, BrowserAnimationsModule, MatTableModule, BrowserAnimationsModule],
      declarations: [ PatientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the table with data ', async() => {
  
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
  
      let tableHeaderRow = fixture.nativeElement.querySelectorAll('mat-header-row');
      let tableRows = fixture.nativeElement.querySelectorAll('mat-row');
      expect(tableRows.length).toBe(5);
  
      // Header row
      let headerRow = tableHeaderRow;
      expect(headerRow.cells[0].innerHTML).toBe('PatientId');
      expect(headerRow.cells[1].innerHTML).toBe('Name');
      expect(headerRow.cells[2].innerHTML).toBe('Contact');
      expect(headerRow.cells[3].innerHTML).toBe('Action');
  
      // Data rows
      let row1 = tableRows[0];
      expect(row1.cells[0].innerHTML).toBe('8923');
      expect(row1.cells[1].innerHTML).toBe('Saurabh Mehra');
      expect(row1.cells[2].innerHTML).toBe('7412067123');
      
    });
  });
});
