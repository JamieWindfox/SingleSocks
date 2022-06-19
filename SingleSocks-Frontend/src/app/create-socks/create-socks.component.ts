import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SockProfile} from "../sock-profile";
import {SockService} from "../services/sock.service";
import {AttributeService} from "../services/attribute.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-socks',
  templateUrl: './create-socks.component.html',
  styleUrls: ['./create-socks.component.scss']
})
export class CreateSocksComponent implements OnInit {

  attributes = new Map<string, any>();
  validation: FormGroup;

  constructor(private sockService: SockService, private attributeService: AttributeService, private router: Router) {
  }

  ngOnInit(): void {

    this.attributeService.getAttributes().subscribe((result) => {
      let attributes = Object.keys(result.body).filter(value => value != "maintainer");
      for (let attribute of attributes) {
        // @ts-ignore TODO
        this.attributes.set(attribute, result.body[attribute]);
      }
    });

    this.validation = new FormGroup({
      name: new FormControl('', Validators.required),
      mainColor: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      pattern: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      material: new FormControl('', Validators.required),
      condition: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }

  create() {
    let sock: SockProfile = {
      name: this.validation.controls['name'].value,
      mainColor: this.validation.controls['mainColor'].value,
      size: this.validation.controls['size'].value,
      pattern: this.validation.controls['pattern'].value,
      type: this.validation.controls['type'].value,
      condition: this.validation.controls['condition'].value,
      description: this.validation.controls['description'].value,
      material: this.validation.controls['material'].value,
      imageData: this.validation.controls['file'].value
    }

    this.sockService.create(sock).subscribe((result) => {
      this.router.navigate(['/sock/' + result.body._id]);
    })

  }

  fileUploaded(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let img: File = fileList[0];
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        this.validation.patchValue({
          file: reader.result
        });
      };

    }
  }
}
