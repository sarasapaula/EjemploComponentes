import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonBadge, IonItem, IonLabel,IonList, IonListHeader } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ejemplo Badge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
          <IonListHeader>Badges</IonListHeader>
          <IonItem>
            <IonLabel>Followers</IonLabel>
            <IonBadge slot="end">22k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Likes</IonLabel>
            <IonBadge color="secondary" slot="end">118k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Stars</IonLabel>
            <IonBadge color="tertiary" slot="end">34k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Completed</IonLabel>
            <IonBadge color="success" slot="end">80</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Warnings</IonLabel>
            <IonBadge color="warning" slot="end">70</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonBadge color="danger" slot="end">1000</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Unread</IonLabel>
            <IonBadge color="light" slot="end">24</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Drafts</IonLabel>
            <IonBadge color="medium" slot="end">14</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Deleted</IonLabel>
            <IonBadge color="dark" slot="end">4</IonBadge>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
