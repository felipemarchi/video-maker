# Credentials format and dependencies

## Algorithmia - get Wikipedia's content

Dependence: `npm i algorithmia`  
File: `credentials/algorithmia.json`

```
{
    "apikey": "<apikey>"
}
```

## Readline-sync - get user's inputs

Dependence: `npm i readline-sync`

## Sentence Boundary Detection - break content into sentences

Dependence: `npm i sbd`

## Watson Natural Language Undestanding - fetch keywords of all sentences

Dependence: `npm i watson-developer-cloud`  
File: `credentials/watson-nlu.json`

```
{
  "apikey": "<apikey>",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:natural-language-understanding:us-south:a/d8a17cc90df04912bc5cc27308be4831:72df815b-132b-4b6e-93b3-6f52bb938024::",
  "iam_apikey_name": "auto-generated-apikey-4381fe3e-d3a2-4be1-8782-15a0691695d4",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/d8a17cc90df04912bc5cc27308be4831::serviceid:ServiceId-eed307f1-2f2d-4649-b360-91db4d61019f",
  "url": "https://gateway.watsonplatform.net/natural-language-understanding/api"
}
```

## Google Cloud Custom Search - fetch images from google to each sentence

Dependence: `npm i googleapis`  
File: `credentials/google-search.json`

```
{
  "apikey": "<apikey>",
  "searchEngineId": "<searchEngineId>"
}
```

## Image Downloader - download images from a link to a path

Dependence: `npm i image-downloader`

## ImageMagick - edit and create images

Dependence 1: You must install the ImageMagick (https://imagemagick.org/script/download.php)  
Dependence 2: `npm i gm`
