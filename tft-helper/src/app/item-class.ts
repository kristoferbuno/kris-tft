import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

export class Item {
    shortname: String;
    fullname: String;
    desc: String;

    constructor(private http: HttpClient, shortname){
        this.shortname = shortname;
        let itemset = http.get<any>('../assets/json/itemdetail.json');
        let itemdetail = itemset[shortname];
        this.fullname = itemdetail.name;
        this.desc = itemdetail.descripton;
    }
}