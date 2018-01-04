import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

interface  todotype {
  todo: string;
  content: string;
  status: boolean;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public  todotxt: string;
  public todolst: todotype[] = [{todo:'Task1',content:'',status:false},{todo:'Task2',content:'',status:false},
    {todo:'Task3',content:'',status:false},{todo:'Task4',content:'',status:false}];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,private storage: Storage) {

    // Load Tasks
    this.loadStorage()

  }

  saveStorage(): void {
    try {
      this.storage.set('Task1_a1', this.todolst[0].todo);
      this.storage.set('Task1_a2', this.todolst[0].content);
      this.storage.set('Task1_a3', this.todolst[0].status);
      this.storage.set('Task2_a1', this.todolst[1].todo);
      this.storage.set('Task2_a2', this.todolst[1].content);
      this.storage.set('Task2_a3', this.todolst[1].status);
      this.storage.set('Task3_a1', this.todolst[2].todo);
      this.storage.set('Task3_a2', this.todolst[2].content);
      this.storage.set('Task3_a3', this.todolst[2].status);
      this.storage.set('Task4_a1', this.todolst[3].todo);
      this.storage.set('Task4_a2', this.todolst[3].content);
      this.storage.set('Task4_a3', this.todolst[3].status);
    } catch (e) {
      console.log('save entry error');
    }
  }

  loadStorage(): void {
    try {
      this.storage.get('Task1_a1').then(task => {
        this.todolst[0].todo = task;
      });
      this.storage.get('Task1_a2').then(task => {
        this.todolst[0].content = task;
      });
      this.storage.get('Task1_a3').then(task => {
        this.todolst[0].status = task;
      });
      this.storage.get('Task2_a1').then(task => {
        this.todolst[1].todo = task;
      });
      this.storage.get('Task2_a2').then(task => {
        this.todolst[1].content = task;
      });
      this.storage.get('Task2_a3').then(task => {
        this.todolst[1].status = task;
      });
      this.storage.get('Task3_a1').then(task => {
        this.todolst[2].todo = task;
      });
      this.storage.get('Task3_a2').then(task => {
        this.todolst[2].content = task;
      });
      this.storage.get('Task3_a3').then(task => {
        this.todolst[2].status = task;
      });
      this.storage.get('Task4_a1').then(task => {
        this.todolst[3].todo = task;
      });
      this.storage.get('Task4_a2').then(task => {
        this.todolst[3].content = task;
      });
      this.storage.get('Task4_a3').then(task => {
        this.todolst[3].status = task;
      });
    } catch (e) {
      console.log('no entries found!');
    }
  }

  public doaddtask(todo: string) {
    var entry: String;
    var newEntry: todotype = {todo:'-',content:'-',status:false};

    if (todo==null) return;
    entry=todo.toString();
    todo=entry.trim();
    if(todo=='') return;

    newEntry.todo=todo;
    newEntry.content='-';
    newEntry.status=false;
    this.todolst.push(newEntry);
    this.todotxt='';
  }

  public clickItem(item: any) {
    this.presentAlert3(item);
  }


  public delItem(item: any) {

    // Löschen eine Items
    this.presentAlert(item);

  }

  public doDelItem(item: any) {
    this.todolst.splice(item,1);
  }

  public doclearlist() {
    this.presentAlert2();

  }

  public doDelAllItems() {
    this.todolst.splice(0)
  }

  presentAlert(item: any) {
    let alert = this.alertCtrl.create({
      title: 'ToDo-List...',
      subTitle: 'delete Task ['+this.todolst[item]+'] ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.doDelItem(item);
          }
        },
        {
          text: 'No',
          handler: () => {
            return;
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: 'ToDo-List...',
      subTitle: 'clear List ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.doDelAllItems();
          }
        },
        {
          text: 'No',
          handler: () => {
            return;
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert3(item: any) {
    var newEntry: todotype = {todo:'-',content:'-',status:false};


    let alert = this.alertCtrl.create({
      title: 'ToDo-Liste',
      subTitle: 'this Entry...',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            newEntry=this.todolst[item];
            // Edit

            this.navCtrl.push('DetailsPage', { param1: newEntry, param2: '' });
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.doDelItem(item);
          },
        },
        {
          text: 'Cancel',
          handler: () => {
            return;
          },
        }
      ]
    });
    alert.present();
  }

}
