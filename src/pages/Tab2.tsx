import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonButton,useIonAlert, IonCard,IonCardContent, IonCardHeader, 
  IonCardTitle,IonCardSubtitle,IonImg } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ejemplo Alert y Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton
          expand="block"
          onClick={() =>
            present({
              cssClass: 'my-css',
              header: 'Alert',
              message: 'Este es un ejemplo de Alert',
              buttons: [
                'Cancel',
                { text: 'Ok', handler: (d) => console.log('ok pressed') },
              ],
              onDidDismiss: (e) => console.log('did dismiss'),
            })
          }
        >
          Mostrar Alerta
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present('Ejemplo de Alert con texto como parametro', [{ text: 'Ok' }])}
        >
          Mostrar Alerta con parametros
        </IonButton>
        
        <IonCard>
          <IonImg src={'https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg'} />
            <IonCardHeader>
              <IonCardSubtitle>Vacaciones con amigos</IonCardSubtitle>
              <IonCardTitle>Un atardecer inolvidable</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
            </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
