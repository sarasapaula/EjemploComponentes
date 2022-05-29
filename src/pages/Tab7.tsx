import { IonContent, IonHeader, IonPage, IonItem, IonToolbar, IonTitle,IonList, 
  IonItemOption, IonCheckbox,IonRadio,IonToggle,IonInput,IonLabel,IonItemSliding, IonItemOptions, IonListHeader } from '@ionic/react';
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
          <IonTitle>Ejemplo Listas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonListHeader color= 'primary'>Lista con items texto</IonListHeader>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
    <IonListHeader color= 'warning'>Lista con items input</IonListHeader>
      <IonItem>
        <IonLabel>Input</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Radio</IonLabel>
        <IonRadio slot="end"></IonRadio>
      </IonItem>
      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;
