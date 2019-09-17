import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  editorOptions = {theme: 'vs-light', language: 'javascript'};
  code: string =
`
/**
 * @param {string} a - value to be passed
 */
function x(a) {
  console.log("Hello world!");
}

// and this function call be called here
x('value');
`;
}
