import { Component, ViewContainerRef } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
  	test
    <main [class.menu-collapsed]="isMenuCollapsed" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})

export class App {

  // isMenuCollapsed: boolean = false;

  // constructor(private _state: GlobalState,
  //             private _imageLoader: BaImageLoaderService,
  //             private _spinner: BaThemeSpinner,
  //             private viewContainerRef: ViewContainerRef,
  //             private themeConfig: BaThemeConfig) {

  //   themeConfig.config();

  //   this._loadImages();

  //   this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
  //     this.isMenuCollapsed = isCollapsed;
  //   });
  // }

  // public ngAfterViewInit(): void {
  //   // hide spinner once all loaders are completed
  //   BaThemePreloader.load().then((values) => {
  //     this._spinner.hide();
  //   });
  // }

  // private _loadImages(): void {
  //   // register some loaders
  //   BaThemePreloader.registerLoader(this._imageLoader.load('/assets/img/sky-bg.jpg'));
  // }

}
