import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
} from '@ionic/react';

const Index = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Index</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="flex-1">
        <IonText>Hello World</IonText>
      </IonContent>
    </IonPage>
  );
}

export default Index;