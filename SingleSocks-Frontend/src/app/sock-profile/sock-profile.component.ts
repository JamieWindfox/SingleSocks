import {Component, OnInit} from '@angular/core';
import {SockProfile} from "../sock-profile";
import {ActivatedRoute} from "@angular/router";
import {SockService} from "../services/sock.service";
import {AttributeService} from "../services/attribute.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-sock-profile',
  templateUrl: './sock-profile.component.html',
  styleUrls: ['./sock-profile.component.scss']
})
export class SockProfileComponent implements OnInit {

  technicalDescription = true;

  sock: SockProfile;

  // TODO get if user is admin or is user's own sock
  // TODO css for editing
  isUsersSock = false;

  attributes = new Map<string, any>();
  editingAttribute = "";
  validation: FormGroup;

  constructor(private route: ActivatedRoute, private sockService: SockService, private attributeService: AttributeService) {
  }

  ngOnInit(): void {
    // TODO get sock by Id
    const sockId = this.route.snapshot.paramMap.get('id');

    this.sockService.queryById(sockId).subscribe(result => {
      this.sock = result.body;
      this.sock.picture = environment.serverUrl + 'api/images/' + this.sock._id;
      this.initValidation();
    })

    this.attributeService.getAttributes().subscribe((result) => {
      let attributes = Object.keys(result.body).filter(value => value != "maintainer");
      for (let attribute of attributes) {
        // @ts-ignore TODO
        this.attributes.set(attribute, result.body[attribute]);
      }
    });
  }

  initValidation() {
    this.validation = new FormGroup({
      mainColor: new FormControl(this.sock.mainColor, Validators.required),
      size: new FormControl(this.sock.size, Validators.required),
      pattern: new FormControl(this.sock.pattern, Validators.required),
      type: new FormControl(this.sock.type, Validators.required),
      material: new FormControl(this.sock.material, Validators.required),
      condition: new FormControl(this.sock.condition, Validators.required),
      description: new FormControl(this.sock.description, Validators.required),
    });
  }

  onEdit(type: string) {
    this.editingAttribute = type;
  }

  getPropertyValue(key: string) {
    // @ts-ignore
    return this.sock[key];
  }

  save() {
    this.sock.mainColor = this.validation.controls['mainColor'].value,
      this.sock.size = this.validation.controls['size'].value,
      this.sock.pattern = this.validation.controls['pattern'].value,
      this.sock.type = this.validation.controls['type'].value,
      this.sock.condition = this.validation.controls['condition'].value,
      this.sock.description = this.validation.controls['description'].value,
      this.sock.material = this.validation.controls['material'].value

    this.sockService.update(this.sock).subscribe((result) => {
      this.sock = result.body;
      this.cancel();
    });
  }

  cancel() {
    this.editingAttribute = '';
    this.initValidation();
  }
}
