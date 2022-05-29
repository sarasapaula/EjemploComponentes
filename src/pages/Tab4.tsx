import { IonContent, IonHeader, IonPage, IonButton, IonToolbar, IonGrid, IonTitle,IonRow, IonCol, IonLabel, IonSegment } from '@ionic/react';

import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ejemplo Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonLabel>Small Size</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol size="12"> 
              <IonButton size="small">Default</IonButton>
              <IonButton size="small" color="secondary">Secondary</IonButton>
              <IonButton size="small" color="tertiary">Tertiary</IonButton>
            </IonCol>
          </IonRow>  
          <IonRow>
            <IonLabel>Default Size</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol size="12"> 
            <IonButton color="success">Success</IonButton>
            <IonButton color="warning">Warning</IonButton>
            <IonButton color="danger">Danger</IonButton>
            </IonCol>
          </IonRow>  
          <IonRow>
            <IonLabel>Large Size</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol size="6"> 
              <IonButton size="large" color="light">Light</IonButton>
              <IonButton size="large" color="medium">Medium</IonButton>
              <IonButton size="large" color="dark">Dark</IonButton>
            </IonCol>
          </IonRow>  
          <IonRow>
            <IonLabel>Block Width</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol size="12"> 
              <IonButton expand="block">A block button</IonButton>
            </IonCol>
          </IonRow>  
          <IonRow>
            <IonLabel>Full Width</IonLabel>
          </IonRow>
          <IonRow>
            <IonCol size="12"> 
            <IonButton expand="full" color="secondary">A full-width button</IonButton>
            </IonCol>
          </IonRow>             
        </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Tab4;
