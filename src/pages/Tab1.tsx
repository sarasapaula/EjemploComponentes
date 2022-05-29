import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {  IonButton,  useIonActionSheet} from '@ionic/react';

import './Tab1.css';

const Tab1: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ejemplo ActionSheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
              header: 'Action Sheet'
            })
          }
        >
          Show ActionSheet
        </IonButton>
        <IonButton
          expand="block"
          onClick={() =>
            present([
              { text: 'Facebook' }, 
              { text: 'Instagram' },
              { text: 'LinkedIn' }], 
              'Choose your favourite social network')
          }
        >
          Show ActionSheet using params
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => {
            present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet');
            setTimeout(dismiss, 3000);
          }}
        >
          Show ActionSheet, hide after 3 seconds
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
