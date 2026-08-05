# Proposta Comercial · Dr. Geraldo Souza

Landing page estática (HTML + assets). Sem build, sem dependências de instalação.

## Estrutura

    index.html      página completa
    support.js      runtime necessário à página
    assets/         logo, arte do hero, favicon e imagem de compartilhamento
    vercel.json     cache dos assets

## Publicar na Vercel

1. Suba esta pasta em um repositório do GitHub.
2. Na Vercel: **Add New… → Project → Import** o repositório.
3. Framework Preset: **Other**. Build Command: vazio. Output Directory: `.` (raiz).
4. **Deploy**. A página responde em `/`.

Domínio próprio: *Project → Settings → Domains*.

## Ajustes rápidos

- **Número do WhatsApp** — em `index.html`, no fim do arquivo, procure `whatsappNumber` (`5511951007967`). Ele alimenta todos os botões e as mensagens pré-preenchidas.
- **Preços** — nos cards da seção *Investimento* (`597`, `847`, `1.497`).
- **Validade da proposta** — na seção de fechamento ("Proposta válida por 15 dias…").
- **Imagens** — substitua os arquivos em `assets/` mantendo os nomes.

A página é preta absoluta (#000), otimizada para leitura no celular e não indexável por buscadores (`noindex`).
