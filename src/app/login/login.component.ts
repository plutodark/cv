import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password = '';
  constructor(private _router: Router,public http: Http) { }

  ngOnInit() {
  }

  onLogin() {
    const connectionStr = `http://104.155.198.18:3000/${this.password}`;
    console.log(connectionStr);
    this.http.get(connectionStr).subscribe(res => {
      const res_json = res.json();
      if (res_json.status === 'success') {
        console.log('success');
        localStorage.setItem('cvuser', JSON.stringify(res_json));
        this._router.navigate(['/']);
      }else {
        console.log('failed');
      }
    });
  }

}
