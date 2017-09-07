import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface  todotype {
  todo: string;
  content: string;
  status: boolean;
}

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public  details: todotype[] = [{todo:'-',content:'-',status:false}];
  public todo: string;
  public  content: string;
  public  status: boolean;

  constructor(public navCtrl: NavController, private navParams: NavParams) {

  var parameter1: todotype = {todo:'-',content:'-',status:false};
  var parameter2: string;
    //Lade Task aus navparams
    parameter1 = this.navParams.get('param1');
    parameter2 = this.navParams.get('param2');

    this.details[0]=parameter1;
    this.todo=this.details[0].todo;
    this.content=this.details[0].content;
    this.status=this.details[0].status;

  }

  public clickItem(Item: any) {

  }

  public NavBack(navCtrl: NavController) {
    navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
