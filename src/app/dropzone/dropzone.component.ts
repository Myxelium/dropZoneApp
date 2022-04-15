import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})

export class DropzoneComponent{
  @Output() fileDropped = new EventEmitter<File[]>();
  @Output() invalidFiles = new EventEmitter<string[]>();

  @Input() icon = 'upload';
  @Input() text = 'Drop files here or click to upload.';
  @Input() accepted: string[];

  @ViewChild('fileInput') _fileInput: ElementRef;

  isTouchedByFile: boolean = false;
  files : File[];

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    this.isTouchedByFile = true;
    this.preventDefault(event);
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
    this.isTouchedByFile = false;
    this.preventDefault(event);
  }

  @HostListener('click') onClick() {
    this._fileInput.nativeElement.click();
  }

  @HostListener('drop', ['$event']) ondrop(event: any) {
    this.preventDefault(event);

    let files = event.dataTransfer.files;

    if (files.length > 0)
      this.fileDropped.emit(this.checkFileTypes(files));

    this.isTouchedByFile = false;
  }

  selectedFromDialog(files: any) {
    let selected : File[] = files.target.files;

    if(selected.length > 0)
      this.fileDropped.emit(this.checkFileTypes(selected));
  }

  private preventDefault(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  private checkFileTypes(files: File[]) {
    let filteredFiles: string[] = [];

    if(this.accepted == null)
      return files;

    return [...files].filter(file => {
      if(!this.accepted.includes(file.type)) {
        filteredFiles.push(file.name);
        this.invalidFiles.emit(filteredFiles);
      }

      return this.accepted.includes(file.type);
    });
  }
}
