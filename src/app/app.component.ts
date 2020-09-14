import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  objClone:any;
  locations = {
    "location_id": "3DFEAEW2-KJA23-AS22",
    "Name": "Earth",
    "Address": "Milky Way Galaxy, Alpha Quadrant, near Mars",
    "Phone": "111-111-111",
    "AddressContinue": null,
    "Zip": "56000",
    "Locality": "Testing location name",
    "Country": "Pakistan",
    "Province": "Punjab",
    "City": "Lahore",
    "Latitude": "22.22222",
    "Longitude": "11.111111",
    "enable_store_timings": true,
    "branch_timings": {
      "Monday": {
        "timingsEnabled": true,
        "timings": [
          { "timeOpen": "00:01", "timeClose": "01:00" },
          { "timeOpen": "12:00", "timeClose": "00:00" }
        ]
      },
      "Tuesday": {
        "timingsEnabled": true,
        "timings": [
          { "timeOpen": "00:01", "timeClose": "01:00" },
          { "timeOpen": "12:00", "timeClose": "00:00" }
        ]
      },
      "Wednesday": {
        "timingsEnabled": true,
        "timings": [
          { "timeOpen": "00:01", "timeClose": "01:00" },
          { "timeOpen": "12:00", "timeClose": "00:00" }
        ]
      },
      "Thursday": {
        "timingsEnabled": true,
        "timings": [
          { "timeOpen": "00:01", "timeClose": "01:00" },
          { "timeOpen": "12:00", "timeClose": "00:00" }
        ]
      },
      "Friday": {
        "timingsEnabled": true,
        "timings": [
          { "timeOpen": "00:01", "timeClose": "01:00" },
          { "timeOpen": "12:00", "timeClose": "00:00" }
        ]
      },
      "Saturday": {
        "timingsEnabled": true,
        "timings": [
          { "timeOpen": "00:01", "timeClose": "01:00" },
          { "timeOpen": "12:00", "timeClose": "00:00" }
        ]
      },
      "Sunday": {
        "timingsEnabled": true,
        "timings": [
          { "timeOpen": "00:01", "timeClose": "01:00" },
          { "timeOpen": "12:00", "timeClose": "03:00" }
        ]
      }
    },
    "status": true,
    "specific_timings": true,
    "delivery_areas": [
      "Earth Quadrant a",
      "Earth Quadrant b",
      "Earth Quadrant c",
      "Earth Quadrant d",
      "Earth Quadrant e"
    ]
  };
  ngOnInit(){
    this.changeTimingEnabled();
    this.ourAsyncFunc();

}
/* Test2 Part 1 */
changeTimingEnabled(){
  this.objClone = JSON.parse(JSON.stringify(this.locations));
  this.objClone.branch_timings.Friday.timingsEnabled = false;
  this.objClone.branch_timings.Saturday.timingsEnabled = false;
  this.objClone.branch_timings.Sunday.timingsEnabled = false;
  this.objClone.branch_timings.Monday.timingsEnabled = false;
  this.objClone.branch_timings.Tuesday.timingsEnabled = false;
  this.objClone.branch_timings.Wednesday.timingsEnabled = false;
  this.objClone.branch_timings.Thursday.timingsEnabled = false;
  console.log(this.objClone)
  console.log(this.locations)

}

/* Test2 Part 2 */
  ourAsyncFunc() {
	console.log("1. We are Borg");
  console.log("2. You will be assimilated!");
  console.log("3. Resistance is futile!");
}

}
