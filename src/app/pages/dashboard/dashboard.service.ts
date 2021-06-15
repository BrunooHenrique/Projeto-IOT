import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Room } from 'src/app/shared/model/room.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private db: AngularFireDatabase) {}

  update(room: Room, key: string) {

    this.db.database.ref('sala/temperatura').set(room.temperatura);
    this.db.database.ref('sala/distancia').set(room.distancia);
    this.db.database.ref('sala/presenca').set(room.presenca);
    this.db.database.ref('sala/luminosidade').set(room.luminosidade);
    this.db.database.ref('sala/umidade').set(room.umidade);
    this.db.database.ref('sala/porta').set(room.porta);
    this.db.database.ref('sala/set_ar').set(room.set_ar);
    this.db.database.ref('sala/set_luminosidade').set(room.set_luminosidade);
    this.db.database.ref('sala/set_multimidia').set(room.set_multimidia);
    this.db.database.ref('sala/set_porta').set(room.set_porta);

    // this.db
    //   .list('sala')
    //   .update(key, room)
    //   .catch((error: any) => {
    //     console.error(error);
    //   });
  }

  getAll() {
    let room = new Room();

    this.db.database.ref('sala/distancia').on('value', (snapshot) => {
      room.distancia = snapshot.val();

      this.db.database.ref('sala/luminosidade').on('value', (snapshot) => {
        room.luminosidade = snapshot.val();

        this.db.database.ref('sala/presenca').on('value', (snapshot) => {
          room.presenca = snapshot.val();

          this.db.database.ref('sala/temperatura').on('value', (snapshot) => {
            room.temperatura = snapshot.val();

            this.db.database.ref('sala/umidade').on('value', (snapshot) => {
              room.umidade = snapshot.val();

              this.db.database.ref('sala/porta').on('value', (snapshot) => {
                room.porta = snapshot.val();

                this.db.database.ref('sala/set_porta').on('value', (snapshot) => {
                  room.set_porta = snapshot.val();

                  this.db.database.ref('sala/set_ar').on('value', (snapshot) => {
                    room.set_ar = snapshot.val();
    
                    this.db.database.ref('sala/set_luminosidade').on('value', (snapshot) => {
                      room.set_luminosidade = snapshot.val();
      
    
                      this.db.database.ref('sala/set_multimidia').on('value', (snapshot) => {
                        room.set_multimidia = snapshot.val();
                        
                       
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

    return room;
  }
}
