import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ){

  }

  validateForm :FormGroup;

  ngOnInit(){
    this.validateForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      name:[null,[Validators.required]]
    
    })
  }

  submitForm(){
    this.authService.register(this.validateForm.valid).subscribe(res=>{

      this.message.success(`Signup successful`,{nzDuration: 5000});
      this.router.navigateByUrl("/login");
    },errors=>{
      this.message.error(
        `${error.error}`,
        {nzDuration:5000}
      )
    }
  
  )
  }

}
