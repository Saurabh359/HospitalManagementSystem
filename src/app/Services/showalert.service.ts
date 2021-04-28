import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { AlertboxComponent } from '../Components/alertbox/alertbox.component';

@Injectable({
  providedIn: 'root'
})
export class ShowalertService {

  constructor(private factoryResoler: ComponentFactoryResolver) { }

  showAlert(message: string, type: string, dir: ViewContainerRef){
    let alertFactory= this.factoryResoler.resolveComponentFactory(AlertboxComponent); 
    dir.clear();

    let compRef= dir.createComponent(alertFactory);

    compRef.instance.message= message;
    compRef.instance.type=type;

    setTimeout(()=>{
        dir.clear();
    },3000);
  }
}
