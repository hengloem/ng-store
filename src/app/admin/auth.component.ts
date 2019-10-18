import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Model/auth.service';

@Component ({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public username: string;
    public password: string;
    public errorMessage: string;

    constructor(private router: Router, private auth: AuthService) {

    }

    authenticate(form: NgForm) {
        if(form.valid) {
            this.auth.authenticate(this.username, this.password)
            .subscribe(response => {
                console.log(response);
                if(response){
                    this.router.navigateByUrl("/admin/main")
                }
                this.errorMessage = "Authentication fail."
            });
        }else{
            this.errorMessage = "Please fill all required.";
        }
    }
}