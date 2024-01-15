# Angular Template For Office Add-in

Angular template for Office Add-in using Angular, Ngxs, Material and Office.js.

## Getting Started

Add-Ins must use a secure connection (HTTPS) in order to be able to render properlly and within a Task-Pane office extension.
For this reason, a valid security certificate must be introduced for development experience.

Install chocolatey package manager for windows, If not previously installed

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Install mkcert

```bash
choco install mkcert
```

Introduce local certificate with mkcert (Install Certificate in Machine)

```bash
mkcert -install
```

Navigate to the Angular Project Folder and generate a certificate for the local domain

```bash
mkcert localhost
```

## Run The Project

```bash
npm run start
```
