import { Component, input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements OnInit {
  label = input.required<string>();
  kind = input.required<DropdownKind>();
  hrefs = input.required<string[]>();

  ngOnInit(): void {}
}

export const enum DropdownKind {
  EPISODES,
  CHARACTERS,
}
