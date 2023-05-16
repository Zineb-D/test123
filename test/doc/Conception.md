# Conception


2 cas de test de **Connexion** pour la fonctionnalité Authentification : **_1 cas passant avec des identifiants de Login corrects et 1 cas non passant avec le champs Mot de passe non renseigné._**


|                 Cas de   test                 |                                 Etapes                                |                                                       Résultats                                                       |
|:---------------------------------------------:|:---------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------:|
| Connexion avec   Identifiants et MDP corrects | Accéder   au lien "https://opencruise-ok.sogeti-center.cloud"         | Affichage   de la page d'autentification                                                                              |
|                                               | Cliquer   sur le champs identifiant et taper l'email "admin@test.com" | Affichage   de la page d'acceuil du siteweb OpenCruise                                                                |
|                                               | cliquer   sur le champs Mot de passe et taper le MDP "Sogeti33"       |                                                                                                                       |
|                                               | Cliquer   sur le bouton connexion                                     |                                                                                                                       |
|                                               |                                                                       |                                                                                                                       |
| Connexion sans   renseigner le champs MDP     | Accéder   au lien "https://opencruise-ok.sogeti-center.cloud"         | Affichage   de la page d'autentification                                                                              |
|                                               | Cliquer   sur le champs identifiant et taper l'email "admin@test.com" | Rester   sur la page d'authentification                                                                               |
|                                               | Laisser   le champs Mot de passe vide                                 | Affichage   du message d'erreur "Merci de renseigner votre mot de passe" en   rouge en dessous du champs Mot de passe |
|                                               | Cliquer   sur le bouton connexion                                     |               

