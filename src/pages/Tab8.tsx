import { IonContent, IonHeader, IonPage, IonItem, IonToolbar, IonTitle,IonList, 
  IonSpinner, IonCheckbox,IonRadio,IonToggle,IonInput,IonLabel,IonItemSliding, IonItemOptions, IonListHeader } from '@ionic/react';
import { checkmarkCircle, closeCircle, pin, restaurant, videocam, wine } from 'ionicons/icons';
import { useState } from 'react';
import './Tab4.css';
const checkboxList = [
  { val: 'Pepperoni', isChecked: true },
  { val: 'Sausage', isChecked: false },
  { val: 'Mushroom', isChecked: false }
];
const Tab4: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ejemplo Progress </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        
        <IonItem>
         <IonLabel>Default Spinner</IonLabel>
          <IonSpinner />
        </IonItem>
        <IonItem>
          <IonLabel>Lines</IonLabel>
          <IonSpinner name="lines" />
        </IonItem>
        <IonItem>
          <IonLabel>Line Small</IonLabel>
          <IonSpinner name="lines-small" />
        </IonItem>
        <IonItem>
          <IonLabel>Dots</IonLabel>
          <IonSpinner name="dots" />
        </IonItem>
        <IonItem>
          <IonLabel>Bubbles</IonLabel>
          <IonSpinner name="bubbles" />
        </IonItem>
        <IonItem>
          <IonLabel>Circles</IonLabel>
          <IonSpinner name="circles" />
        </IonItem>
        <IonItem>
          <IonLabel>Crescent</IonLabel>
          <IonSpinner name="crescent" />
        </IonItem>
        <IonItem>
          <IonLabel>Paused Default Spinner</IonLabel>
          <IonSpinner paused />
        </IonItem>
        
      </IonList>
    </IonContent>
  </IonPage>
  );
};

export default Tab4;
