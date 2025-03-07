import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';

@Component({
  imports: [RouterOutlet, AppHeaderComponent],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {}
