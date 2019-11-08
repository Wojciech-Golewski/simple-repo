import { Component, OnInit } from '@angular/core';

const aboutUsText: string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Et pharetra pharetra massa massa ultricies mi. Diam ut venenatis tellus
in. Tortor aliquam nulla facilisi cras fermentum odio eu. Viverra vitae
congue eu consequat ac felis donec. Viverra maecenas accumsan lacus vel
facilisis. Orci dapibus ultrices in iaculis nunc sed augue.
Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.
Amet purus gravida quis blandit turpis. Purus gravida quis blandit turpis.
Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.
<br /><br />
Ultrices gravida dictum fusce ut. Id nibh tortor
id aliquet lectus proin nibh nisl condimentum. Ligula ullamcorper
malesuada proin libero nunc consequat. Egestas quis ipsum suspendisse
ultrices gravida dictum fusce ut placerat. Pretium vulputate sapien nec
sagittis. Cras sed felis eget velit aliquet sagittis id consectetur.
Sed elementum tempus egestas sed sed risus pretium. Urna et pharetra
pharetra massa massa ultricies mi quis. Auctor neque vitae tempus quam
pellentesque nec nam aliquam. Lobortis feugiat vivamus at augue eget
arcu dictum varius duis. Sit amet consectetur adipiscing elit pellentesque habitant.
Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper.
<br /><br />
Sagittis nisl rhoncus mattis rhoncus urna neque.
Fusce id velit ut tortor pretium. Magna eget est lorem
ipsum dolor sit. Nulla at volutpat diam ut venenatis tellus.
Sed risus pretium quam vulputate. Aenean et tortor at risus
viverra adipiscing. Massa tincidunt dui ut ornare. Senectus et
netus et malesuada fames ac turpis. Nec feugiat nisl pretium fusce.
Ornare massa eget egestas purus viverra accumsan in nisl. Pretium vulputate
sapien nec sagittis. Vitae suscipit tellus mauris a diam maecenas sed.
Faucibus a pellentesque sit amet porttitor eget dolor morbi.
`;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  textToDisplay: string;

  constructor() { }

  ngOnInit() {
    this.textToDisplay = aboutUsText;
  }
}