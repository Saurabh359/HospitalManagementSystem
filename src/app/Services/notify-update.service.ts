import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotifyUpdateService{

    notify= new Subject();
    alertNotify= new Subject<{ msg:string, type: string}>();
    
    constructor(){}
}