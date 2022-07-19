import { Component } from '@angular/core';

@Component({
    selector: "app-controls",
    templateUrl: "./controls.html"
})
export class ControlsComponent{
    title: string = "mi title"

    async insertText(){
        return Word.run(async (context) => {
            const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);
            paragraph.font.color = "blue";
            await context.sync();
        });
    }
}

