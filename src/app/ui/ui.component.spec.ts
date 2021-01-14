import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


import { UiComponent } from './ui.component';


describe('UiComponent', () => {
  //let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('Debería llamar al metodo calcular', () => {
  //   let result = 0;
  //   component.peso = 75;
  //   component.altura = 165;

  //   component.calcular();

  //   result = component.imc;

  //   expect(result).toBe(27.548209366391188);
  // });

  // it('Debe configurar el modelo peso a través de ngModel', async () => {
  //   // Arrange 
  //   await fixture.whenStable();
  //   fixture.detectChanges();
  //   const inputElement = fixture.debugElement.query(By.css('input[name="peso"]')).nativeElement;

  //   // Act 
  //   inputElement.value = '75';
  //   inputElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();

  //   // Assert 
  //   expect(component.peso).toEqual(75);
  // });

  // it('Debe configurar el modelo altura a través de ngModel', async () => {
  //   // Arrange 
  //   await fixture.whenStable();
  //   fixture.detectChanges();
  //   const inputElement = fixture.debugElement.query(By.css('input[name="altura"]')).nativeElement;

  //   // Act 
  //   inputElement.value = '165';
  //   inputElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();

  //   // Assert 
  //   expect(component.altura).toEqual(165);
  // });

  // it('Debe configurar el modelo edad a través de ngModel', async () => {
  //   // Arrange 
  //   await fixture.whenStable();
  //   fixture.detectChanges();
  //   const inputElement = fixture.debugElement.query(By.css('input[name="edad"]')).nativeElement;

  //   // Act 
  //   inputElement.value = '21';
  //   inputElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();

  //   // Assert 
  //   expect(component.edad).toEqual(21);
  // });

  // it('debería agregar altura, peso, edad cuando hago clic en el botón de adición ', () => {
  //   // Arrange 
  //   component.edad = 21;
  //   component.peso = 75;
  //   component.altura = 165;
  //   let calculateButton = fixture.debugElement.query(By.css('.calculate-btn'));

  //   // Act
  //   calculateButton.triggerEventHandler('click', null);

  //   // Assert
  //   expect(component.imc).toBe(27.548209366391188);

  // });

  // it('Debería representar el imc en el resultado div', () => {
  //   // Arrange
  //   component.edad = 21;
  //   component.peso = 75;
  //   component.altura = 165

  //   // Act
  //   component.calcular();
  //   fixture.detectChanges();

  //   let de = fixture.debugElement.query(By.css('.result'));
  //   let el: HTMLElement = de.nativeElement;

  //   // Assert
  //   expect(el.innerText).toContain('27.5 kg/m2');

  // });


  // it('Debería representar el rango en el resultado div', () => {
  //   // Arrange
  //   component.edad = 21;
  //   component.peso = 75;
  //   component.altura = 165

  //   // Act
  //   component.calcular();
  //   fixture.detectChanges();

  //   let de = fixture.debugElement.query(By.css('.rango'));
  //   let el: HTMLElement = de.nativeElement;

  //   // Assert
  //   expect(el.innerText).toContain('sobrepeso');

  // });


});
