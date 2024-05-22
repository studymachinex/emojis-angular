import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PickerComponent, PickerModule } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PickerComponent, CommonModule, PickerModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emojis-angular';
  text: string = '';
  showEmojiPicker: boolean = false;

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    const emoji = event.emoji.native;
    this.text += emoji;
  }


}
