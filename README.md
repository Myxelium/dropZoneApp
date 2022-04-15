# DropZoneApp

https://myxelium.github.io/ngDropzoneApp


This is a simple dropzone for uploading files.

To see the output from it, open the console.



Usage
```
TS

  badTypes = ["image/png", "image/jpeg", "image/jpg"]

HTML

  <app-dropzone 
    icon="delete" 
    text="Ladda upp filer" 
    [accepted]="badTypes" 
    (invalidFiles)="errorcheck($event)" 
    (fileDropped)="onFileDropped($event)">
  </app-dropzone>
  ```
  
  everything is optional except fileDropped since you want a some kind of output right?
  
  the inputs have a default value. any material icon will do.
