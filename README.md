# App Supereroi

Questo progetto è un'applicazione web sviluppata in Angular, progettata per la gestione di un elenco di supereroi. L'applicazione si distingue per l'utilizzo di un backend json-server deployato su Render.com, superando le limitazioni di GitHub Pages per la persistenza dei dati e gestendo le problematiche di CORS.

## Descrizione Approfondita del Progetto
L'App Supereroi è una Single Page Application (SPA) che consente agli utenti di visualizzare, creare e gestire i propri personaggi. I dati dei supereroi sono recuperati da un'API RESTful simulata tramite json-server, che è stato deployato su una piattaforma cloud (Render.com) per renderlo pubblicamente accessibile e persistente. Questo approccio risolve la sfida di avere un backend dinamico con un frontend ospitato su GitHub Pages.

Il progetto include funzionalità avanzate di Angular come il routing, i form reattivi per l'inserimento di nuovi supereroi (con gestione dinamica dei poteri), e l'uso di servizi per l'interazione con l'API. Particolare attenzione è stata posta alla gestione delle problematiche CORS (Cross-Origin Resource Sharing), abilitando le intestazioni necessarie sul server json-server per consentire la comunicazione sicura con l'applicazione Angular.

Inoltre, l'applicazione presenta due funzionalità custom interessanti:

- Un HTTP Interceptor (BatmanInterceptor) che intercetta le risposte dell'API e mostra un avviso se il supereroe in questione è "Batman".

- Una Custom Pipe (AntiBatmanPipe) che modifica la visualizzazione dei poteri di "Batman" nella pagina di dettaglio, ribadendo scherzosamente che "Batman non è un supereroe".

## Tecnologie Utilizzate
### Frontend (Angular)
- **Angular**: Framework principale per lo sviluppo dell'applicazione.

- **TypeScript**: Linguaggio di programmazione per lo sviluppo di Angular.

- **HTML**: Struttura dei componenti e dei template.

- **CSS**: Styling dei componenti.

- **Angular Router**: Per la navigazione tra le diverse pagine/viste dell'applicazione (lista eroi, form di creazione, dettaglio eroe).

- **Angular Forms (Reactive Forms)**: Per la gestione dei form complessi, come quello per la creazione di nuovi supereroi con array dinamici di poteri.

- **Angular HttpClient**: Per effettuare richieste HTTP all'API esterna.

- **RxJS**: Per la gestione dei flussi di dati asincroni (es. chiamate API).

- **Bootstrap 5**: Framework CSS utilizzato per il layout responsivo e lo stile dei componenti (es. navbar, card, btn, form-control).

### Backend (json-server su Render.com)
- **json-server**: Un server REST API full fake con zero codifica in meno di un minuto.

- **Node.js**: Ambiente di runtime per eseguire json-server.

- **Express.js (implicito tramite json-server)**: Per la gestione delle richieste HTTP.

- **cors**: Middleware Node.js per abilitare il Cross-Origin Resource Sharing.

- **Render.com**: Piattaforma cloud utilizzata per il deployment del backend json-server, fornendo un URL pubblico e persistente.

## Funzionalità Principali
- **Visualizzazione Lista Supereroi**: Mostra un elenco di supereroi con i loro nomi.

- **Indicatore di Caricamento**: Durante il recupero iniziale dei dati dei supereroi dal backend (che può subire un "cold start" su servizi gratuiti), viene visualizzato un indicatore di caricamento per migliorare l'esperienza utente.

- **Creazione Nuovo Supereroe**: Un form dedicato permette di aggiungere nuovi supereroi, con la possibilità di aggiungere dinamicamente più poteri.

- **Dettaglio Supereroe**: Cliccando su un supereroe dalla lista, si accede a una pagina dedicata che mostra il nome e tutti i poteri.

- **Gestione Dati con Servizio**: Un servizio Angular (SupereroiService) gestisce tutte le interazioni con l'API esterna.

- **HTTP Interceptor Personalizzato**: BatmanInterceptor intercetta le risposte dell'API, mostrando un avviso se il supereroe recuperato è "Batman".

- **Custom Pipe AntiBatmanPipe**: Trasforma la visualizzazione dei poteri per il personaggio "Batman" nella pagina di dettaglio.

- **Deployment su Render.com**: Il backend è accessibile tramite un URL pubblico, permettendo all'applicazione Angular di funzionare anche quando deployata su GitHub Pages.

- **Gestione CORS**: Il backend è configurato per accettare richieste cross-origin, risolvendo i problemi di sicurezza del browser.

## Come Avviare il Progetto
Questo progetto richiede l'esecuzione sia del frontend (applicazione Angular) che del backend (JSON Server deployato).

### Prerequisiti
- Node.js (versione LTS raccomandata)

- npm (Node Package Manager) o Yarn

- Angular CLI: Installa globalmente Angular CLI se non lo hai già fatto:

npm install -g @angular/cli

### Installazione e Deployment del Backend (JSON Server su Render.com)
Il backend è già deployato su Render.com all'indirizzo: https://supereroi-api.onrender.com/supereroi.
Se desideri replicare il deployment o modificare il backend:

1. Clona il repository del backend:

git clone https://github.com/ValeVent/supereroi-backend.git
cd supereroi-backend

(Sostituisci ValeVent/supereroi-backend.git con il tuo repository se lo hai forkato).

2. Installa le dipendenze del backend:

npm install

3. Configura CORS (già presente nel server.js):
Assicurati che il file server.js includa:

const cors = require('cors');
server.use(cors());

Questo è fondamentale per permettere all'app Angular di comunicare con il server.

4. Deploy su Render.com:

- Crea un account su Render.com.

- Crea un nuovo "Web Service".

- Connetti il tuo repository GitHub del backend (supereroi-backend).

- Configura il "Build Command" (es. npm install) e lo "Start Command" (es. node server.js).

- Render.com assegnerà un URL pubblico al tuo backend. Assicurati che il BASE_URL nel tuo frontend Angular (src/app/shared/base_url.ts) punti a questo URL. Nel codice fornito, è già impostato a https://supereroi-api.onrender.com/supereroi.

### Installazione e Avvio del Frontend (Applicazione Angular)
1. Clona il repository del frontend:

git clone https://github.com/ValeVent/app-supereroi.git
cd app-supereroi

(Sostituisci ValeVent/app-supereroi.git con il tuo repository se lo hai forkato).

2. Installa le dipendenze del frontend:

npm install

3. Verifica BASE_URL: Assicurati che il file src/app/shared/base_url.ts contenga l'URL corretto del tuo backend deployato su Render.com:

export const BASE_URL = 'https://supereroi-api.onrender.com/supereroi';

4. Avvia il server di sviluppo Angular:

ng serve

5. Apri il tuo browser web e naviga su http://localhost:4200/.

## Stato del Progetto
Questo progetto è un'applicazione Angular completa e funzionale che dimostra l'integrazione con un backend esterno deployato, la gestione delle API, il routing, i form reattivi e l'implementazione di funzionalità avanzate come interceptor e pipe custom. È un ottimo esempio di come superare le sfide di deployment per progetti full-stack su piattaforme di hosting statico.

## Contatti
- **GitHub (Frontend)**: https://github.com/ValeVent/app-supereroi

- **GitHub (Backend)**: https://github.com/ValeVent/supereroi-backend

- **LinkedIn**: https://www.linkedin.com/in/valentina-venturo

- **Sito Web**: http://www.valentinaventuro.it

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

