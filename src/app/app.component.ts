import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PayrollBook';
  environment = environment;
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
  })
  goToAbout() {
     // Logic to navigate to the About page
  }
}
