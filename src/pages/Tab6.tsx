import { IonContent, IonHeader, IonPage, IonChip, IonToolbar, IonTitle,IonIcon, 
  IonListHeader, IonLabel,IonAvatar, IonImg } from '@ionic/react';
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
          <IonTitle>Ejemplos Chip</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonListHeader color= 'primary'>Basic</IonListHeader>        
          <IonChip>
            <IonLabel>Default</IonLabel>
          </IonChip>
          <IonChip>
            <IonIcon icon={checkmarkCircle}></IonIcon>
            <IonLabel>Icon</IonLabel>
          </IonChip>
          <IonChip>
            <IonAvatar>
              <IonImg
                src="https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
              />
            </IonAvatar>
            <IonLabel>Avatar</IonLabel>
          </IonChip>
        

        <IonListHeader color= 'secondary'>Colors</IonListHeader>
        
          <IonChip color="primary">
            <IonLabel>Primary</IonLabel>
          </IonChip>
          <IonChip color="secondary">
            <IonLabel>Secondary</IonLabel>
          </IonChip>
          <IonChip color="tertiary">
            <IonLabel>Tertiary</IonLabel>
          </IonChip>
          <IonChip color="success">
            <IonLabel>Success</IonLabel>
          </IonChip>
          <IonChip color="warning">
            <IonLabel>Warning</IonLabel>
          </IonChip>
          <IonChip color="danger">
            <IonLabel>Danger</IonLabel>
          </IonChip>
        

        <IonListHeader color= 'success'>Outline</IonListHeader>
        
          <IonChip outline color="primary">
            <IonLabel>Primary</IonLabel>
          </IonChip>
          <IonChip outline color="secondary">
            <IonLabel>Secondary</IonLabel>
          </IonChip>
          <IonChip outline color="tertiary">
            <IonLabel>Tertiary</IonLabel>
          </IonChip>
          <IonChip outline color="success">
            <IonLabel>Success</IonLabel>
          </IonChip>
          <IonChip outline color="warning">
            <IonLabel>Warning</IonLabel>
          </IonChip>
          <IonChip outline color="danger">
            <IonLabel>Danger</IonLabel>
          </IonChip>
        

        <IonListHeader color='warning'>Icons</IonListHeader>
        
          <IonChip outline color="primary">
            <IonIcon icon={pin}></IonIcon>
            <IonLabel>Madison</IonLabel>
            <IonIcon name="close-circle"></IonIcon>
          </IonChip>
          <IonChip outline color="secondary">
            <IonIcon icon={wine}></IonIcon>
            <IonLabel>Nightlife</IonLabel>
            <IonIcon name="close-circle"></IonIcon>
          </IonChip>
          <IonChip outline color="tertiary">
            <IonIcon icon={restaurant}></IonIcon>
            <IonLabel>Dining</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>
          <IonChip outline color="dark">
            <IonIcon icon={videocam}></IonIcon>
            <IonLabel>Entertainment</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
