import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  screenWidth:number = 0;

constructor() { }

ngOnInit() {
  this.checksize();
}


showSidebar() {
  $(".content").css({
    "margin-left": "261px"
  })
  setTimeout(()=> {
    $(".sidebar").css({
      "left": "0px"
    });
  }, 250)
}


hideSidebar() {
$(".sidebar").css({
  "left": "-260px"
  });
  $(".content").css({
    "margin-left": "0px"
  })
}

  checksize () {
    $(window).on('resize load', function() {
      this.screenWidth = $(window).width();
      if(this.screenWidth < 768) {
        this.hideSidebar();
      }else {
        this.showSidebar();
      }
    });
  }


  toggleSidebar() {
    if($(".sidebar").css('left') == '0px'){
      this.hideSidebar();
    }else {
      this.showSidebar();

    }
  }
}


