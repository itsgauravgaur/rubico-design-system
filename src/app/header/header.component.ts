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




  checksize = () => {
    $(window).on('resize load', function() { 
      this.screenWidth = $(window).width();
      if(this.screenWidth < 768) {
        hideSidebar();
      }else {
        showSidebar();
      }
    });
  }


  toggleSidebar() {
    if($(".sidebar").css('left') == '0px'){
      hideSidebar();
    }else {    
      showSidebar();
      
    }
  }  
}


function showSidebar() {
    $(".content").css({
      "margin-left": "261px"
    })
    setTimeout(()=> {
      $(".sidebar").css({
        "left": "0px"
      });
    }, 250)
 }


 function hideSidebar() {
  $(".sidebar").css({
    "left": "-260px"
    });
    $(".content").css({
      "margin-left": "0px"
    })
}