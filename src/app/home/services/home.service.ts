import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HomeInterface } from 'src/app/home/types/home.interface';
import { ImageArrayInterface } from 'src/app/home/types/imageArray.interface';

@Injectable()
export class HomeService {
  todos$ = new BehaviorSubject<HomeInterface>({value:'djox'});
  imageArray$ = new BehaviorSubject<ImageArrayInterface[]>([]);

  changeTodo(text: string): void{
    this.todos$.next({value:text})
  }
  addCountry( src: any, index: number, route: string ): void {
    let makeSortedArray = [...this.imageArray$.value , { src: src , index: index , route: route }].sort((a: any,b: any) => a.index - b.index);
    this.imageArray$.next(makeSortedArray);
    // this.imageArray$.next([ ...this.imageArray$.value , { src: src , index: index , route: route }]);
  }

}
