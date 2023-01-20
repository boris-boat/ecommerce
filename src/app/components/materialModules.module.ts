import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
    declarations: [],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatBadgeModule, MatIconModule, MatChipsModule
    ],
    exports: [MatCardModule, MatButtonModule, MatBadgeModule, MatIconModule, MatChipsModule]
})
export class MaterialModules { }